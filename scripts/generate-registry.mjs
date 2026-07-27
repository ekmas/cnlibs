import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import postcss from "postcss";

const REPO_ROOT = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  ".."
);

// registry.json and public/r/**/*.json are committed artifacts served to
// real users, so the default run always bakes in the production SITE_URL
// regardless of the ambient shell's NODE_ENV — only an explicit `--dev` flag
// (`pnpm registry:build:dev`) points the generated registryDependencies at
// the local dev server, for testing an in-progress component end to end via
// `shadcn add`/`init` without publishing it first. `--test` (`pnpm
// registry:test`) implies the same local-server intent for its one-off file;
// `--test=<slug>` (e.g. `--test=pastel-dreams`) picks which theme's colors
// it uses instead of the "default" theme.
const TEST_REGISTRY_ARG = process.argv.find(
  (arg) => arg === "--test" || arg.startsWith("--test=")
);
const TEST_REGISTRY_FLAG = TEST_REGISTRY_ARG !== undefined;
const TEST_REGISTRY_SLUG = TEST_REGISTRY_ARG?.startsWith("--test=")
  ? TEST_REGISTRY_ARG.slice("--test=".length)
  : "default";
if (TEST_REGISTRY_FLAG || process.argv.includes("--dev")) {
  process.env.NODE_ENV = "development";
} else {
  process.env.NODE_ENV ??= "production";
}

const LIBRARIES = [
  {
    name: "8bit",
    root: "apps/8bit",
    uiDir: "apps/8bit/components/ui",
  },
];

const THEME_REGISTRIES = [
  {
    name: "8bit",
    themesModule: "apps/8bit/registry/themes.ts",
    siteUrlModule: "apps/8bit/lib/site.ts",
    outputDir: "apps/8bit/public/r/themes",
    // Every theme compiles to a registry:style item, so each one carries the
    // pixel-corner utilities (px-rounded-*, px-border-*, px-ring) that the
    // rest of the library depends on for its "8-bit" look.
    utilitiesSource: "apps/8bit/app/globals.css",
    utilityNamePattern: /^px-(rounded|border|ring)(-|$)/,
    // Components installed alongside every theme, so `shadcn init` on a
    // theme scaffolds a project with something already on the page.
    registryDependencyNames: ["button"],
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

function declValue(decl) {
  const value = decl.value.replace(/\s+/g, " ").trim();
  return decl.important ? `${value} !important` : value;
}

// Converts a postcss container's children into the nested plain-object shape
// the registry-item `css` field expects: declarations become prop/value
// pairs, rules and at-rules become nested objects keyed by their
// selector/prelude (e.g. "&::before", "@utility px-ring").
function cssNodeToObject(container) {
  const result = {};
  for (const child of container.nodes) {
    if (child.type === "decl") {
      result[child.prop] = declValue(child);
    } else if (child.type === "rule") {
      result[child.selector] = cssNodeToObject(child);
    } else if (child.type === "atrule") {
      const key = child.params
        ? `@${child.name} ${child.params}`
        : `@${child.name}`;
      result[key] = cssNodeToObject(child);
    }
  }
  return result;
}

function buildUtilitiesCss(themeRegistry) {
  const cssPath = path.join(REPO_ROOT, themeRegistry.utilitiesSource);
  const root = postcss.parse(fs.readFileSync(cssPath, "utf8"));
  const css = {};
  root.walkAtRules("utility", (rule) => {
    if (themeRegistry.utilityNamePattern.test(rule.params)) {
      css[`@utility ${rule.params}`] = cssNodeToObject(rule);
    }
  });
  return css;
}

// `pnpm registry:test` (optionally `--test=<slug>`): write a single scratch
// registry:style item (one theme's colors, wired to the local button)
// instead of the full registry, so `shadcn add`/`init` can be tried end to
// end against an in-progress component without regenerating (and having to
// remember not to commit) all 40+ real theme files. Not part of the
// published registry — gitignored.
async function writeTestRegistryItem(themeRegistry) {
  const modulePath = path.join(REPO_ROOT, themeRegistry.themesModule);
  const { THEMES } = await import(pathToFileURL(modulePath).href);
  const theme = THEMES.find((t) => t.slug === TEST_REGISTRY_SLUG);
  if (!theme) {
    console.error(
      `No theme named "${TEST_REGISTRY_SLUG}". Available slugs: ${THEMES.map((t) => t.slug).join(", ")}`
    );
    process.exit(1);
  }
  const siteUrlModulePath = path.join(REPO_ROOT, themeRegistry.siteUrlModule);
  const { SITE_URL } = await import(pathToFileURL(siteUrlModulePath).href);
  const css = buildUtilitiesCss(themeRegistry);
  const registryDependencies = themeRegistry.registryDependencyNames.map(
    (name) => `${SITE_URL}/r/${name}.json`
  );

  const compiled = {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name: "test-registry",
    type: "registry:style",
    title: `${theme.title} (local test)`,
    description:
      "Scratch registry item for testing registryDependencies against the local dev server. Not part of the published registry — regenerate with `pnpm registry:test`, don't commit it.",
    registryDependencies,
    cssVars: theme.cssVars,
    css,
  };

  const outPath = path.join(REPO_ROOT, "apps/8bit/public/r/test-registry.json");
  fs.writeFileSync(outPath, `${JSON.stringify(compiled, null, 2)}\n`);
  console.log(`Wrote ${path.relative(REPO_ROOT, outPath)}`);
  console.log(`Try: npx shadcn add ${SITE_URL}/r/test-registry.json`);
}

if (TEST_REGISTRY_FLAG) {
  await writeTestRegistryItem(THEME_REGISTRIES[0]);
  process.exit(0);
}

async function buildThemeItems(themeRegistry) {
  const modulePath = path.join(REPO_ROOT, themeRegistry.themesModule);
  const { THEMES } = await import(pathToFileURL(modulePath).href);
  const siteUrlModulePath = path.join(REPO_ROOT, themeRegistry.siteUrlModule);
  const { SITE_URL } = await import(pathToFileURL(siteUrlModulePath).href);
  const css = buildUtilitiesCss(themeRegistry);
  const registryDependencies = themeRegistry.registryDependencyNames.map(
    (name) => `${SITE_URL}/r/${name}.json`
  );
  return THEMES.map((theme) => ({
    name: `${themeRegistry.name}/themes/${theme.slug}`,
    slug: theme.slug,
    outputDir: themeRegistry.outputDir,
    type: "registry:style",
    title: theme.title,
    description: theme.description,
    registryDependencies,
    cssVars: theme.cssVars,
    css,
  }));
}

const builtThemeItems = (
  await Promise.all(THEME_REGISTRIES.map(buildThemeItems))
).flat();

const items = [
  ...builtItems.map(({ componentName, ...item }) => item),
  // `css` is identical across every theme (it's the shared pixel-corner
  // utility set, not theme-specific data) and large enough to blow past
  // lint's file-size cap when inlined 40+ times, so the manifest omits it
  // the same way it omits `files[].content` for UI items — the full payload
  // still ships in each theme's own public/r/themes/{slug}.json.
  ...builtThemeItems.map(({ slug, outputDir, css, ...item }) => item),
];

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

for (const item of builtThemeItems) {
  const dir = path.join(REPO_ROOT, item.outputDir);
  fs.mkdirSync(dir, { recursive: true });
  const compiled = {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name: item.slug,
    type: item.type,
    title: item.title,
    description: item.description,
    registryDependencies: item.registryDependencies,
    cssVars: item.cssVars,
    css: item.css,
  };
  fs.writeFileSync(
    path.join(dir, `${item.slug}.json`),
    `${JSON.stringify(compiled, null, 2)}\n`
  );
}

console.log(
  `Built ${builtThemeItems.length} theme(s) into apps/8bit/public/r/themes`
);
