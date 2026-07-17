import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const REPO_ROOT = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  ".."
);

const LIBRARIES = [
  {
    name: "8bit",
    root: "apps/8bit",
    uiDir: "apps/8bit/components/ui",
  },
];

const FRAMEWORK_PACKAGES = new Set(["react", "react-dom", "next"]);
const TSX_EXTENSION = /\.tsx?$/;
const IMPORT_SPECIFIER = /from\s+["']([^"']+)["']/g;

function titleCase(kebab) {
  return kebab
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

function packageNameFromSpecifier(specifier) {
  const segments = specifier.split("/");
  if (specifier.startsWith("@")) {
    return segments.slice(0, 2).join("/");
  }
  return segments[0];
}

function extractImportSpecifiers(content) {
  const matches = content.matchAll(IMPORT_SPECIFIER);
  return [...matches].map((match) => match[1]);
}

function buildItem(library, fileName) {
  const componentName = fileName.replace(TSX_EXTENSION, "");
  const files = new Map();
  const dependencies = new Set();

  function resolveLocalFile(relativePath, type, target) {
    if (files.has(relativePath)) {
      return;
    }
    const absolutePath = path.join(REPO_ROOT, relativePath);
    const content = fs.readFileSync(absolutePath, "utf8");
    files.set(relativePath, { path: relativePath, type, target });
    collectImports(content);
  }

  function collectImports(content) {
    for (const specifier of extractImportSpecifiers(content)) {
      if (specifier === "@/lib/utils") {
        resolveLocalFile(
          `${library.root}/lib/utils.ts`,
          "registry:lib",
          "~/lib/utils.ts"
        );
      } else if (specifier.startsWith("@/components/ui/")) {
        const depName = specifier.replace("@/components/ui/", "");
        resolveLocalFile(
          `${library.uiDir}/${depName}.tsx`,
          "registry:ui",
          `~/components/ui/${depName}.tsx`
        );
      } else if (!(specifier.startsWith(".") || specifier.startsWith("@/"))) {
        const packageName = packageNameFromSpecifier(specifier);
        if (!FRAMEWORK_PACKAGES.has(packageName)) {
          dependencies.add(packageName);
        }
      }
    }
  }

  resolveLocalFile(
    `${library.uiDir}/${fileName}`,
    "registry:ui",
    `~/components/ui/${fileName}`
  );

  const title = titleCase(componentName);

  return {
    name: `${library.name}/${componentName}`,
    componentName,
    type: "registry:ui",
    title,
    description: `${title} component from the ${library.name} UI library.`,
    ...(dependencies.size > 0
      ? { dependencies: [...dependencies].sort() }
      : {}),
    files: [...files.values()],
  };
}

const builtItems = LIBRARIES.flatMap((library) => {
  const uiDirAbsolute = path.join(REPO_ROOT, library.uiDir);
  const fileNames = fs
    .readdirSync(uiDirAbsolute)
    .filter((name) => name.endsWith(".tsx"))
    .sort();
  return fileNames.map((fileName) => buildItem(library, fileName));
});

const items = builtItems.map(({ componentName, ...item }) => item);

const registry = {
  $schema: "https://ui.shadcn.com/schema/registry.json",
  name: "cnlibs",
  homepage: "https://github.com/ekmas/cnlibs",
  items,
};

fs.writeFileSync(
  path.join(REPO_ROOT, "registry.json"),
  `${JSON.stringify(registry, null, 2)}\n`
);

console.log(`Wrote ${items.length} item(s) to registry.json`);

const OUTPUT_DIR = path.join(REPO_ROOT, "apps/8bit/public/r");
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

for (const item of builtItems) {
  const compiled = {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name: item.componentName,
    type: item.type,
    title: item.title,
    description: item.description,
    ...(item.dependencies ? { dependencies: item.dependencies } : {}),
    files: item.files.map((file) => ({
      path: file.path,
      content: fs.readFileSync(path.join(REPO_ROOT, file.path), "utf8"),
      type: file.type,
      target: file.target,
    })),
  };
  fs.writeFileSync(
    path.join(OUTPUT_DIR, `${item.componentName}.json`),
    `${JSON.stringify(compiled, null, 2)}\n`
  );
}

console.log(`Built ${builtItems.length} item(s) into apps/8bit/public/r`);
