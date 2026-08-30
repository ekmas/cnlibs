import fs from "node:fs/promises";
import path from "node:path";

/* Server-only helpers for the component docs pages. */

type RegistryFile = { content: string };

const EXPORT_BLOCK = /export\s*\{([^}]*)\}/g;
const EXPORT_DECL = /export\s+(?:function|const)\s+([A-Z][A-Za-z0-9]*)/g;
const EXPORT_ALIAS = /\s+as\s+/;
const COMPONENT_NAME = /^[A-Z]/;
const JSX_TAG = /<([A-Z][A-Za-z0-9]*)/g;
const TSX_EXTENSION = /\.tsx$/;

const EXPORT_DIRS = [
  { dir: "components/ui", alias: "@/components/ui" },
  { dir: "components/ascii", alias: "@/components/ascii" },
];

/** The component's own source from the self-hosted registry item
 * (public/r/<slug>.json, first file) — what the Installation
 * section's "Manual" tab shows. */
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

/** Capitalised names a module exports, from `export { A, B as C }`
 * blocks and `export function`/`export const` declarations. */
function exportedNames(source: string): string[] {
  const names: string[] = [];
  for (const match of source.matchAll(EXPORT_BLOCK)) {
    for (const raw of (match[1] ?? "").split(",")) {
      const name = raw.trim().split(EXPORT_ALIAS).at(-1)?.trim() ?? "";
      if (COMPONENT_NAME.test(name)) {
        names.push(name);
      }
    }
  }
  for (const match of source.matchAll(EXPORT_DECL)) {
    if (match[1]) {
      names.push(match[1]);
    }
  }
  return names;
}

/** Every .tsx module in a directory as [specifier, source]. */
async function readModules(dir: string, alias: string) {
  const absolute = path.join(process.cwd(), dir);
  const files = (await fs.readdir(absolute)).filter((name) =>
    name.endsWith(".tsx")
  );
  return Promise.all(
    files.map(async (file) => {
      const source = await fs.readFile(path.join(absolute, file), "utf8");
      return [`${alias}/${file.replace(TSX_EXTENSION, "")}`, source] as const;
    })
  );
}

let exportIndex: Promise<Map<string, string>> | null = null;

/** Reads the library's export names once: component name -> the "@/…"
 * module it is imported from, over components/ui and components/ascii. */
function getExportIndex() {
  exportIndex ??= (async () => {
    const index = new Map<string, string>();
    const modules = (
      await Promise.all(
        EXPORT_DIRS.map(({ dir, alias }) => readModules(dir, alias))
      )
    ).flat();
    for (const [specifier, source] of modules) {
      for (const name of exportedNames(source)) {
        if (!index.has(name)) {
          index.set(name, specifier);
        }
      }
    }
    return index;
  })();
  return exportIndex;
}

/** The import statements a snippet needs, derived from the capitalised
 * JSX tags it uses and the library's export index — so the Usage
 * section can show `import { Button } from "@/components/ui/button"`
 * above a bare `<Button>…</Button>` example. Unknown tags are skipped. */
export async function usageImports(code: string): Promise<string | null> {
  const index = await getExportIndex();
  const byModule = new Map<string, Set<string>>();
  for (const match of code.matchAll(JSX_TAG)) {
    const name = match[1] ?? "";
    const specifier = index.get(name);
    if (!specifier) {
      continue;
    }
    const names = byModule.get(specifier) ?? new Set<string>();
    names.add(name);
    byModule.set(specifier, names);
  }
  if (byModule.size === 0) {
    return null;
  }
  return [...byModule.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(
      ([specifier, names]) =>
        `import { ${[...names].sort().join(", ")} } from "${specifier}";`
    )
    .join("\n");
}
