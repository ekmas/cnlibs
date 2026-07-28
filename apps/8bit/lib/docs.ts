import fs from "node:fs/promises";
import path from "node:path";
import { docsNav, gettingStartedNav } from "@/content/docs/manifest";

export interface DocsPagerLink {
  href: string;
  title: string;
}

const pages: DocsPagerLink[] = [
  ...gettingStartedNav,
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
// Matches only the exported demo function itself, not any un-exported helper
// components/functions a larger demo (e.g. data-table) declares above it.
const FUNCTION_OPEN_PATTERN = /export\s+function\s+\w+\s*\([^)]*\)\s*\{/;

export interface UsageCodeParts {
  imports: string | null;
  /** Module- or component-level declarations (e.g. a demo's data array or
   * `useState` call) that sit between the imports and the returned markup. */
  setup: string | null;
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

/** Locates the exported demo function within `rest` (skipping any
 * un-exported helper functions/components a larger demo, e.g. data-table,
 * declares above it) and splits it into the module-level code that precedes
 * it and its own body — so a later `return` inside a helper never gets
 * mistaken for the demo's own returned markup. */
function findDemoFunction(
  rest: string
): { moduleLevel: string; body: string } | null {
  const fnMatch = rest.match(FUNCTION_OPEN_PATTERN);
  if (fnMatch?.index === undefined) {
    return null;
  }

  const moduleLevel = rest.slice(0, fnMatch.index);
  const bodyStart = fnMatch.index + fnMatch[0].length;

  return { body: rest.slice(bodyStart), moduleLevel };
}

/** Extracts the module-level declarations before a demo's function (e.g. a
 * `const slides = [...]`) and the declarations inside its body before
 * `return` (e.g. a `useState` call), so they can be shown alongside the
 * imports, ahead of the returned markup. */
function extractSetup(moduleLevel: string, body: string): string | null {
  const returnMatch =
    body.match(RETURN_PAREN_PATTERN) ?? body.match(RETURN_BARE_JSX_PATTERN);
  const bodyLevel =
    returnMatch?.index === undefined ? "" : body.slice(0, returnMatch.index);

  const parts = [moduleLevel, bodyLevel].map(dedent).filter(Boolean);
  return parts.length ? parts.join("\n\n") : null;
}

/** Splits a demo code string into its leading import statements (plus an
 * optional "use client" directive), any setup declarations between the
 * imports and the component's `return`, and the returned markup itself. */
export function splitUsageCode(code: string): UsageCodeParts {
  const match = code.match(LEADING_IMPORTS_PATTERN);
  const rest = match ? code.slice(match[0].length) : code;
  const demoFn = findDemoFunction(rest);
  const body = demoFn ? demoFn.body : rest;

  return {
    imports: match?.[0].trim() || null,
    setup: demoFn ? extractSetup(demoFn.moduleLevel, body) : null,
    snippet: extractReturnedMarkup(body) ?? body.trim(),
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
