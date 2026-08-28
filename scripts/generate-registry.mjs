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
// `--test-chart` (`pnpm registry:test:charts`, optionally `--test-chart=<family>`,
// e.g. `--test-chart=bar-chart`) is the dither-kit equivalent of `--test`: one
// scratch chart-family item with registryDependencies pointed at the local
// dev server, for trying `shadcn add` against an in-progress dither-kit
// change without regenerating (or committing) the full public/r/dither-kit
// output. Defaults to "area-chart".
const TEST_CHART_ARG = process.argv.find(
  (arg) => arg === "--test-chart" || arg.startsWith("--test-chart=")
);
const TEST_CHART_FLAG = TEST_CHART_ARG !== undefined;
const TEST_CHART_FAMILY = TEST_CHART_ARG?.startsWith("--test-chart=")
  ? TEST_CHART_ARG.slice("--test-chart=".length)
  : "area-chart";
if (TEST_REGISTRY_FLAG || TEST_CHART_FLAG || process.argv.includes("--dev")) {
  process.env.NODE_ENV = "development";
} else {
  process.env.NODE_ENV ??= "production";
}

const LIBRARIES = [
  {
    name: "8bit",
    uiDir: "apps/8bit/components/ui",
    hooksDir: "apps/8bit/hooks",
    // Bundles a ui component's file (and its own dependency chain) into
    // another item's registry entry even though the source file doesn't
    // import it — e.g. breadcrumb's collapsed-items pattern pairs it with
    // dropdown-menu (see content/docs/breadcrumb.tsx), so shadcn add
    // breadcrumb ships both without the base component needing to import
    // DropdownMenu itself.
    extraLocalDependencies: {
      breadcrumb: ["dropdown-menu"],
    },
    // A component's own registry item ships this `@utility` (and any
    // `@keyframes` it names) as `css`, since these live in globals.css
    // rather than being derivable from the component's imports — e.g.
    // skeleton's shimmer relies on animate-pixel-skeleton/pixel-skeleton
    // existing in the consumer's stylesheet.
    componentUtilities: {
      skeleton: {
        keyframes: ["pixel-skeleton"],
        utilities: ["animate-pixel-skeleton"],
      },
      spinner: {
        keyframes: ["pixel-spin-dot"],
        utilities: ["animate-pixel-spin-dot"],
      },
    },
    utilitiesSource: "apps/8bit/app/globals.css",
    outputDir: "apps/8bit/public/r",
  },
  {
    name: "ascii",
    uiDir: "apps/ascii/components/ui",
    hooksDir: "apps/ascii/hooks",
    // The ascii components share frame primitives (components/ascii/
    // ascii-box.tsx, ascii-theme.tsx) and pure helpers (lib/ascii.ts,
    // lib/ascii-theme.ts) that live outside components/ui. Imports under
    // these aliases are followed and bundled into the item, landing at the
    // same relative paths in the consumer's project so the "@/" imports
    // keep resolving. (@/lib/utils is still skipped — shadcn scaffolds it.)
    aliases: [
      {
        prefix: "@/components/ascii/",
        dir: "apps/ascii/components/ascii",
        type: "registry:component",
        target: "~/components/ascii/",
      },
      {
        prefix: "@/lib/",
        dir: "apps/ascii/lib",
        type: "registry:lib",
        target: "~/lib/",
      },
      {
        prefix: "@/registry/",
        dir: "apps/ascii/registry",
        type: "registry:lib",
        target: "~/registry/",
      },
    ],
    outputDir: "apps/ascii/public/r",
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
    // Raw (unparsed) text of the same utilities, generated as a plain
    // importable string so the /theme page's "Manual" copy tab can show
    // them without the app itself needing a postcss dependency at runtime.
    manualCssModule: "apps/8bit/lib/generated/pixel-utilities.ts",
  },
  {
    name: "ascii",
    themesModule: "apps/ascii/registry/themes.ts",
    siteUrlModule: "apps/ascii/lib/site.ts",
    outputDir: "apps/ascii/public/r/themes",
    // ascii palettes carry their full cssVars (theme/light/dark) and the
    // shared base CSS (font-weight utilities, skeleton keyframes, base
    // layer) straight from the themes module — nothing is parsed out of
    // globals.css, the module mirrors it by hand.
    cssVarsExport: "themeCssVars",
    cssExport: "ASCII_THEME_CSS",
    registryDependencyNames: ["button"],
  },
];

// dither-kit charts, self-hosted here instead of the upstream tripwire.sh
// registry (see app/charts/page.tsx) so this repo's theme-aware palette.ts —
// the one that actually reads --chart-1..5 — is what `shadcn add` installs.
// Split mirrors upstream's own core/family structure: shared infra (scales,
// contexts, axes, tooltip, palette) in "core", chart-type-specific canvases
// and composable parts in each family, wired together via registryDependencies
// exactly like the theme items above do for "button".
const DITHER_KIT_REGISTRY = {
  name: "dither-kit",
  dir: "apps/8bit/components/dither-kit",
  outputDir: "apps/8bit/public/r/dither-kit",
  siteUrlModule: "apps/8bit/lib/site.ts",
  hookFiles: new Set(["use-chart-dimensions.ts"]),
  // d3-scale/d3-shape ship their types separately — anything resolved as a
  // dependency here that has a types package also needs it listed as a
  // devDependency, or a plain TS consumer fails to compile on "implicitly
  // has an 'any' type" for the untyped import.
  typesFor: {
    "d3-scale": "@types/d3-scale",
    "d3-shape": "@types/d3-shape",
  },
  core: [
    "lib.ts",
    "palette.ts",
    "scales.ts",
    "polar.ts",
    "dither-paint.ts",
    "use-chart-dimensions.ts",
    "chart-context.tsx",
    "common-context.tsx",
    "series-context.tsx",
    "polar-context.tsx",
    "cartesian-root.tsx",
    "polar-root.tsx",
    "grid.tsx",
    "reference-line.tsx",
    "x-axis.tsx",
    "y-axis.tsx",
    "dot.tsx",
    "legend.tsx",
    "block-legend.tsx",
    "tooltip.tsx",
  ],
  families: [
    {
      name: "area-chart",
      title: "Area & Line Chart",
      description:
        "Composable area/line dither chart, plus Sparkline for the decorative case.",
      files: [
        "area-chart.tsx",
        "area.tsx",
        "cartesian-canvas.tsx",
        "sparkline.tsx",
      ],
    },
    {
      name: "bar-chart",
      title: "Bar Chart",
      description: "Grouped, stacked, or percent-stacked dither bar chart.",
      files: ["bar-chart.tsx", "bar.tsx", "bar-canvas.tsx"],
    },
    {
      name: "pie-chart",
      title: "Pie Chart",
      description: "Donut or full-wedge dither pie chart.",
      files: ["pie-chart.tsx", "pie.tsx", "pie-canvas.tsx"],
    },
    {
      name: "radar-chart",
      title: "Radar Chart",
      description: "Composable dither radar chart.",
      files: [
        "radar-chart.tsx",
        "radar.tsx",
        "radar-canvas.tsx",
        "radar-frame.tsx",
      ],
    },
  ],
};

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
      const selector = child.selector.replace(/\s+/g, " ").trim();
      result[selector] = cssNodeToObject(child);
    } else if (child.type === "atrule") {
      const key = child.params
        ? `@${child.name} ${child.params}`
        : `@${child.name}`;
      result[key] = cssNodeToObject(child);
    }
  }
  return result;
}

// Pulls a component's named `@utility` rules (and any `@keyframes` they rely
// on) out of the shared globals.css, in the same shape theme items use for
// their `css` field.
function extractComponentCss(cssRoot, { keyframes = [], utilities = [] }) {
  const css = {};
  cssRoot.walkAtRules("utility", (rule) => {
    if (utilities.includes(rule.params)) {
      css[`@utility ${rule.params}`] = cssNodeToObject(rule);
    }
  });
  cssRoot.walkAtRules("keyframes", (rule) => {
    if (keyframes.includes(rule.params)) {
      css[`@keyframes ${rule.params}`] = cssNodeToObject(rule);
    }
  });
  return css;
}

// "@/lib/ascii" may be lib/ascii.ts or lib/ascii.tsx — pick whichever
// exists (components are .tsx, pure modules .ts).
function resolveModuleFileName(dir, moduleName) {
  for (const extension of [".tsx", ".ts"]) {
    const candidate = `${moduleName}${extension}`;
    if (fs.existsSync(path.join(REPO_ROOT, dir, candidate))) {
      return candidate;
    }
  }
  throw new Error(`Cannot resolve ${moduleName} in ${dir}`);
}

const isPackageSpecifier = (specifier) =>
  !(specifier.startsWith(".") || specifier.startsWith("@/"));

function findAlias(library, specifier) {
  return library.aliases?.find((alias) => specifier.startsWith(alias.prefix));
}

function buildItem(library, cssRoot, fileName) {
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

  // "@/components/ascii/ascii-box" -> the file under that alias's dir,
  // bundled at the matching path in the consumer's project.
  function resolveAliasedFile(specifier) {
    const alias = findAlias(library, specifier);
    const moduleName = specifier.slice(alias.prefix.length);
    const resolvedName = resolveModuleFileName(alias.dir, moduleName);
    resolveLocalFile(
      `${alias.dir}/${resolvedName}`,
      alias.type,
      `${alias.target}${resolvedName}`
    );
  }

  function addPackageDependency(specifier) {
    const packageName = packageNameFromSpecifier(specifier);
    if (!FRAMEWORK_PACKAGES.has(packageName)) {
      dependencies.add(packageName);
    }
  }

  function collectImports(content) {
    for (const specifier of extractImportSpecifiers(content)) {
      // @/lib/utils is skipped on purpose: shadcn init always scaffolds
      // lib/utils.ts itself, so shipping our own copy through every
      // component's registry item is redundant.
      if (specifier.startsWith("@/components/ui/")) {
        const depName = specifier.replace("@/components/ui/", "");
        resolveLocalFile(
          `${library.uiDir}/${depName}.tsx`,
          "registry:ui",
          `~/components/ui/${depName}.tsx`
        );
      } else if (specifier.startsWith("@/hooks/") && library.hooksDir) {
        const hookName = specifier.replace("@/hooks/", "");
        resolveLocalFile(
          `${library.hooksDir}/${hookName}.ts`,
          "registry:hook",
          `~/hooks/${hookName}.ts`
        );
      } else if (specifier !== "@/lib/utils" && findAlias(library, specifier)) {
        resolveAliasedFile(specifier);
      } else if (isPackageSpecifier(specifier)) {
        addPackageDependency(specifier);
      }
    }
  }

  resolveLocalFile(
    `${library.uiDir}/${fileName}`,
    "registry:ui",
    `~/components/ui/${fileName}`
  );

  for (const depName of library.extraLocalDependencies?.[componentName] ?? []) {
    resolveLocalFile(
      `${library.uiDir}/${depName}.tsx`,
      "registry:ui",
      `~/components/ui/${depName}.tsx`
    );
  }

  const title = titleCase(componentName);
  const utilities = library.componentUtilities?.[componentName];

  return {
    name: `${library.name}/${componentName}`,
    componentName,
    outputDir: library.outputDir,
    type: "registry:ui",
    title,
    description: `${title} component from the ${library.name} UI library.`,
    ...(dependencies.size > 0
      ? { dependencies: [...dependencies].sort() }
      : {}),
    files: [...files.values()],
    ...(utilities ? { css: extractComponentCss(cssRoot, utilities) } : {}),
  };
}

function parseCssFile(relativePath) {
  const cssPath = path.join(REPO_ROOT, relativePath);
  return postcss.parse(fs.readFileSync(cssPath, "utf8"));
}

// dither-kit files import each other by relative specifier ("./cartesian-root")
// rather than an "@/..." alias, and every non-relative specifier is a real npm
// package (there's no local hooks/ui dir to special-case) — so its dependency
// collection only needs the external-package half of collectImports above.
function collectDitherKitDependencies(ditherKitRegistry, fileNames) {
  const dependencies = new Set();
  for (const fileName of fileNames) {
    const absolutePath = path.join(REPO_ROOT, ditherKitRegistry.dir, fileName);
    const content = fs.readFileSync(absolutePath, "utf8");
    for (const specifier of extractImportSpecifiers(content)) {
      if (specifier.startsWith(".")) {
        continue;
      }
      const packageName = packageNameFromSpecifier(specifier);
      if (!FRAMEWORK_PACKAGES.has(packageName)) {
        dependencies.add(packageName);
      }
    }
  }
  return [...dependencies].sort();
}

function devDependenciesFor(ditherKitRegistry, dependencies) {
  const devDependencies = dependencies
    .map((name) => ditherKitRegistry.typesFor[name])
    .filter(Boolean);
  return devDependencies.sort();
}

function ditherKitFileType(ditherKitRegistry, fileName) {
  if (ditherKitRegistry.hookFiles.has(fileName)) {
    return "registry:hook";
  }
  return fileName.endsWith(".tsx") ? "registry:component" : "registry:lib";
}

function ditherKitFiles(ditherKitRegistry, fileNames) {
  return fileNames.map((fileName) => ({
    path: `${ditherKitRegistry.dir}/${fileName}`,
    type: ditherKitFileType(ditherKitRegistry, fileName),
    target: `~/components/dither-kit/${fileName}`,
  }));
}

async function buildDitherKitItems(ditherKitRegistry) {
  const siteUrlModulePath = path.join(
    REPO_ROOT,
    ditherKitRegistry.siteUrlModule
  );
  const { SITE_URL } = await import(pathToFileURL(siteUrlModulePath).href);
  const registryBase = `${SITE_URL}/r/${ditherKitRegistry.outputDir.split("/").at(-1)}`;

  const coreDependencies = collectDitherKitDependencies(
    ditherKitRegistry,
    ditherKitRegistry.core
  );
  const coreItem = {
    dependencies: coreDependencies,
    description:
      "Shared scales, contexts, axes, tooltip, and the theme-aware color palette every dither-kit chart depends on.",
    devDependencies: devDependenciesFor(ditherKitRegistry, coreDependencies),
    files: ditherKitFiles(ditherKitRegistry, ditherKitRegistry.core),
    name: `${ditherKitRegistry.name}/core`,
    slug: "core",
    title: "Dither Kit Core",
    type: "registry:component",
  };

  const familyItems = ditherKitRegistry.families.map((family) => {
    const dependencies = collectDitherKitDependencies(
      ditherKitRegistry,
      family.files
    );
    return {
      dependencies,
      description: family.description,
      devDependencies: devDependenciesFor(ditherKitRegistry, dependencies),
      files: ditherKitFiles(ditherKitRegistry, family.files),
      name: `${ditherKitRegistry.name}/${family.name}`,
      registryDependencies: [`${registryBase}/core.json`],
      slug: family.name,
      title: family.title,
      type: "registry:component",
    };
  });

  const allItem = {
    description:
      "Every dither-kit chart family, plus the shared core, installed together.",
    name: `${ditherKitRegistry.name}/${ditherKitRegistry.name}`,
    registryDependencies: [
      `${registryBase}/core.json`,
      ...ditherKitRegistry.families.map(
        (family) => `${registryBase}/${family.name}.json`
      ),
    ],
    slug: ditherKitRegistry.name,
    title: "All Dither Kit Charts",
    type: "registry:component",
  };

  return [coreItem, ...familyItems, allItem];
}

const builtItems = LIBRARIES.flatMap((library) => {
  const uiDirAbsolute = path.join(REPO_ROOT, library.uiDir);
  const fileNames = fs
    .readdirSync(uiDirAbsolute)
    .filter((name) => name.endsWith(".tsx"))
    .sort();
  const cssRoot = library.utilitiesSource
    ? parseCssFile(library.utilitiesSource)
    : null;
  return fileNames.map((fileName) => buildItem(library, cssRoot, fileName));
});

function buildUtilitiesCss(themeRegistry) {
  const root = parseCssFile(themeRegistry.utilitiesSource);
  const css = {};
  root.walkAtRules("utility", (rule) => {
    if (themeRegistry.utilityNamePattern.test(rule.params)) {
      css[`@utility ${rule.params}`] = cssNodeToObject(rule);
    }
  });
  return css;
}

// Same matching rules as buildUtilitiesCss, but joins their original
// (unparsed) source text instead of converting to the registry-item object
// shape — for contexts that just want to display/copy real CSS.
function buildUtilitiesCssText(themeRegistry) {
  const root = parseCssFile(themeRegistry.utilitiesSource);
  const rules = [];
  root.walkAtRules("utility", (rule) => {
    if (themeRegistry.utilityNamePattern.test(rule.params)) {
      rules.push(rule.toString());
    }
  });
  return rules.join("\n\n");
}

function writeGeneratedModule(relativePath, exportName, value) {
  const absolutePath = path.join(REPO_ROOT, relativePath);
  fs.mkdirSync(path.dirname(absolutePath), { recursive: true });
  const content = `// Auto-generated by scripts/generate-registry.mjs — do not edit by hand.\nexport const ${exportName} = ${JSON.stringify(value)};\n`;
  fs.writeFileSync(absolutePath, content);
  console.log(`Wrote ${relativePath}`);
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

// `pnpm registry:test:charts` (optionally `--test-chart=<family>`, default
// "area-chart"): write a single scratch dither-kit item — core, one chart
// family, or the combined "dither-kit" bundle — with its registryDependencies
// pointed at the local dev server. Mirrors writeTestRegistryItem above but
// for dither-kit instead of themes. Not part of the published registry —
// gitignored.
async function writeTestChartRegistryItem(ditherKitRegistry, slug) {
  const items = await buildDitherKitItems(ditherKitRegistry);
  const item = items.find((candidate) => candidate.slug === slug);
  if (!item) {
    console.error(
      `No dither-kit item named "${slug}". Available: ${items.map((candidate) => candidate.slug).join(", ")}`
    );
    process.exit(1);
  }

  const siteUrlModulePath = path.join(
    REPO_ROOT,
    ditherKitRegistry.siteUrlModule
  );
  const { SITE_URL } = await import(pathToFileURL(siteUrlModulePath).href);

  const compiled = {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name: "test-registry",
    type: item.type,
    title: `${item.title} (local test)`,
    description:
      "Scratch dither-kit item for testing registryDependencies against the local dev server. Not part of the published registry — regenerate with `pnpm registry:test:charts`, don't commit it.",
    ...(item.dependencies ? { dependencies: item.dependencies } : {}),
    ...(item.devDependencies?.length
      ? { devDependencies: item.devDependencies }
      : {}),
    ...(item.registryDependencies
      ? { registryDependencies: item.registryDependencies }
      : {}),
    ...(item.files
      ? {
          files: item.files.map((file) => ({
            path: file.path,
            content: fs.readFileSync(path.join(REPO_ROOT, file.path), "utf8"),
            type: file.type,
            target: file.target,
          })),
        }
      : {}),
  };

  const outPath = path.join(
    REPO_ROOT,
    ditherKitRegistry.outputDir,
    "test-registry.json"
  );
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, `${JSON.stringify(compiled, null, 2)}\n`);
  console.log(`Wrote ${path.relative(REPO_ROOT, outPath)}`);
  console.log(
    `Try: npx shadcn add ${SITE_URL}/r/dither-kit/test-registry.json`
  );
}

if (TEST_CHART_FLAG) {
  await writeTestChartRegistryItem(DITHER_KIT_REGISTRY, TEST_CHART_FAMILY);
  process.exit(0);
}

async function buildThemeItems(themeRegistry) {
  const modulePath = path.join(REPO_ROOT, themeRegistry.themesModule);
  const { THEMES } = await import(pathToFileURL(modulePath).href);
  const siteUrlModulePath = path.join(REPO_ROOT, themeRegistry.siteUrlModule);
  const { SITE_URL } = await import(pathToFileURL(siteUrlModulePath).href);
  const themesModule = await import(pathToFileURL(modulePath).href);
  const css = themeRegistry.cssExport
    ? themesModule[themeRegistry.cssExport]
    : buildUtilitiesCss(themeRegistry);
  const cssVarsFor = themeRegistry.cssVarsExport
    ? themesModule[themeRegistry.cssVarsExport]
    : (theme) => theme.cssVars;
  const registryDependencies = themeRegistry.registryDependencyNames.map(
    (name) => `${SITE_URL}/r/${name}.json`
  );
  if (themeRegistry.manualCssModule) {
    writeGeneratedModule(
      themeRegistry.manualCssModule,
      "PIXEL_UTILITIES_CSS",
      buildUtilitiesCssText(themeRegistry)
    );
  }
  return THEMES.map((theme) => ({
    name: `${themeRegistry.name}/themes/${theme.slug}`,
    slug: theme.slug,
    outputDir: themeRegistry.outputDir,
    type: "registry:style",
    title: theme.title,
    description: theme.description,
    registryDependencies,
    cssVars: cssVarsFor(theme),
    css,
  }));
}

const builtThemeItems = (
  await Promise.all(THEME_REGISTRIES.map(buildThemeItems))
).flat();

const builtDitherKitItems = await buildDitherKitItems(DITHER_KIT_REGISTRY);

const items = [
  ...builtItems.map(({ componentName, outputDir, ...item }) => item),
  // `css` is identical across every theme (it's the shared pixel-corner
  // utility set, not theme-specific data) and large enough to blow past
  // lint's file-size cap when inlined 40+ times, so the manifest omits it
  // the same way it omits `files[].content` for UI items — the full payload
  // still ships in each theme's own public/r/themes/{slug}.json.
  ...builtThemeItems.map(({ slug, outputDir, css, ...item }) => item),
  ...builtDitherKitItems.map(({ slug, ...item }) => item),
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

for (const library of LIBRARIES) {
  fs.mkdirSync(path.join(REPO_ROOT, library.outputDir), { recursive: true });
}

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
    ...(item.css ? { css: item.css } : {}),
  };
  fs.writeFileSync(
    path.join(REPO_ROOT, item.outputDir, `${item.componentName}.json`),
    `${JSON.stringify(compiled, null, 2)}\n`
  );
}

for (const library of LIBRARIES) {
  const count = builtItems.filter(
    (item) => item.outputDir === library.outputDir
  ).length;
  console.log(`Built ${count} item(s) into ${library.outputDir}`);
}

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

for (const themeRegistry of THEME_REGISTRIES) {
  const count = builtThemeItems.filter(
    (item) => item.outputDir === themeRegistry.outputDir
  ).length;
  console.log(`Built ${count} theme(s) into ${themeRegistry.outputDir}`);
}

const DITHER_KIT_OUTPUT_DIR = path.join(
  REPO_ROOT,
  DITHER_KIT_REGISTRY.outputDir
);
fs.mkdirSync(DITHER_KIT_OUTPUT_DIR, { recursive: true });

for (const item of builtDitherKitItems) {
  const compiled = {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name: item.slug,
    type: item.type,
    title: item.title,
    description: item.description,
    ...(item.dependencies ? { dependencies: item.dependencies } : {}),
    ...(item.devDependencies?.length
      ? { devDependencies: item.devDependencies }
      : {}),
    ...(item.registryDependencies
      ? { registryDependencies: item.registryDependencies }
      : {}),
    ...(item.files
      ? {
          files: item.files.map((file) => ({
            path: file.path,
            content: fs.readFileSync(path.join(REPO_ROOT, file.path), "utf8"),
            type: file.type,
            target: file.target,
          })),
        }
      : {}),
  };
  fs.writeFileSync(
    path.join(DITHER_KIT_OUTPUT_DIR, `${item.slug}.json`),
    `${JSON.stringify(compiled, null, 2)}\n`
  );
}

console.log(
  `Built ${builtDitherKitItems.length} item(s) into ${DITHER_KIT_REGISTRY.outputDir}`
);
