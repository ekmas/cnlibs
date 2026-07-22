import fs from "node:fs/promises";
import path from "node:path";
import { docsNav } from "@/content/docs/manifest";

const SITE_DESCRIPTION =
  "8bit is a collection of pixel-cornered, retro-styled components for shadcn/ui, built on Base UI. Pick a component from the sidebar to see its documentation and examples.";

export interface DocsPagerLink {
  href: string;
  title: string;
}

const pages: DocsPagerLink[] = [
  { href: "/docs", title: "Introduction" },
  ...docsNav.map((doc) => ({ href: `/docs/${doc.slug}`, title: doc.title })),
];

export function getDocsPager(href: string): {
  prev?: DocsPagerLink;
  next?: DocsPagerLink;
} {
  const index = pages.findIndex((page) => page.href === href);
  if (index === -1) {
    return {};
  }
  return { next: pages[index + 1], prev: pages[index - 1] };
}

const LEADING_IMPORTS_PATTERN =
  /^(\s*"use client";\s*)?(\s*import\s[\s\S]*?;\s*)+/;

const RETURN_PAREN_PATTERN = /return\s*\(/;
// Fallback for a single-line `return <Jsx />;` with no wrapping parens.
const RETURN_BARE_JSX_PATTERN = /return\s+([\s\S]*);\s*\}\s*$/;
const LEADING_WHITESPACE_PATTERN = /^ */;

export interface UsageCodeParts {
  imports: string | null;
  snippet: string;
}

/** Strips blank leading/trailing lines and the common leading whitespace
 * shared by every remaining line, so JSX pulled out of a nested `return`
 * reads as top-level code instead of keeping its original nesting depth. */
function dedent(text: string): string {
  const lines = text.split("\n");
  while (lines.length && lines[0]?.trim() === "") {
    lines.shift();
  }
  while (lines.length && lines.at(-1)?.trim() === "") {
    lines.pop();
  }
  if (lines.length === 0) {
    return "";
  }

  const indent = lines.reduce((min, line) => {
    if (line.trim() === "") {
      return min;
    }
    const leading = line.match(LEADING_WHITESPACE_PATTERN)?.[0].length ?? 0;
    return Math.min(min, leading);
  }, Number.POSITIVE_INFINITY);

  return lines.map((line) => line.slice(indent)).join("\n");
}

/** Extracts the JSX inside a demo component's `return ( ... )` (or a bare
 * `return <Jsx />;`), discarding everything else — hooks, helper constants,
 * the function wrapper itself. */
function extractReturnedMarkup(code: string): string | null {
  const parenMatch = code.match(RETURN_PAREN_PATTERN);
  if (parenMatch?.index !== undefined) {
    const start = parenMatch.index + parenMatch[0].length;
    let depth = 1;
    let end = start;
    while (end < code.length && depth > 0) {
      if (code[end] === "(") {
        depth += 1;
      } else if (code[end] === ")") {
        depth -= 1;
      }
      end += 1;
    }
    if (depth === 0) {
      return dedent(code.slice(start, end - 1));
    }
  }

  const bareMatch = code.match(RETURN_BARE_JSX_PATTERN);
  return bareMatch?.[1] ? dedent(bareMatch[1]) : null;
}

/** Splits a demo code string into its leading import statements (plus an
 * optional "use client" directive) and the returned markup, with any hooks,
 * helper constants, or the function wrapper itself stripped out. */
export function splitUsageCode(code: string): UsageCodeParts {
  const match = code.match(LEADING_IMPORTS_PATTERN);
  const rest = match ? code.slice(match[0].length) : code;

  return {
    imports: match?.[0].trim() || null,
    snippet: extractReturnedMarkup(rest) ?? rest.trim(),
  };
}

interface RegistryFile {
  content: string;
}

/** Reads the primary component file's raw source from the self-hosted
 * registry, for the docs "Manual" install tab. */
export async function getComponentSource(slug: string): Promise<string | null> {
  try {
    const filePath = path.join(process.cwd(), "public", "r", `${slug}.json`);
    const raw = await fs.readFile(filePath, "utf8");
    const data = JSON.parse(raw) as { files?: RegistryFile[] };
    return data.files?.[0]?.content ?? null;
  } catch {
    return null;
  }
}

export function buildDocsIndexMarkdown(): string {
  const lines: string[] = [
    "# Introduction",
    "",
    SITE_DESCRIPTION,
    "",
    "## Components",
    "",
    ...docsNav.map((doc) => `- [${doc.title}](/docs/${doc.slug})`),
    "",
  ];

  return lines.join("\n");
}
