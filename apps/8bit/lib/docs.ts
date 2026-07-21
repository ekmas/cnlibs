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

export interface UsageCodeParts {
  imports: string | null;
  snippet: string;
}

/** Splits a demo code string into its leading import statements (plus an
 * optional "use client" directive) and the remaining markup/logic. */
export function splitUsageCode(code: string): UsageCodeParts {
  const match = code.match(LEADING_IMPORTS_PATTERN);
  if (!match?.[0].trim()) {
    return { imports: null, snippet: code.trim() };
  }
  return {
    imports: match[0].trim(),
    snippet: code.slice(match[0].length).trim(),
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
