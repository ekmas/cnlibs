// The ascii/ui theme registry: each entry here is the canonical source for
// one installable palette. This same data feeds three things:
//   1. The palette rows on /styling (via lib/ascii-theme.ts)
//   2. The individual registry items served at /r/themes/{slug}.json
//      (compiled by scripts/generate-registry.mjs, installable via
//      `shadcn add` into an existing project, or `shadcn init` to scaffold
//      a new one already themed)
//   3. The root registry.json manifest
//
// Palettes are single-mode: a dark palette is dark and a light palette is
// light, there is no paired counterpart. The compiled registry item writes
// the same values to both the :root and .dark buckets so it renders the
// same whichever mode the consumer's app is in.
//
// Kept import-free so scripts/generate-registry.mjs can `import()` it
// straight from source with Node's type stripping.

export type AsciiThemeMode = "light" | "dark";

/** The palette tokens, in the order they're written to CSS. Keys are
 * CSS variable names without the leading "--" (shadcn's cssVars shape). */
export const ASCII_PALETTE_KEYS = [
  "ascii-primary",
  "ascii-soft",
  "ascii-text",
  "ascii-comment",
  "muted-foreground",
  "background",
  "ascii-surface",
  "secondary",
  "ascii-dim",
  "primary-foreground",
  "destructive",
] as const;

export type AsciiPaletteKey = (typeof ASCII_PALETTE_KEYS)[number];

export type AsciiPalette = Record<AsciiPaletteKey, string>;

export interface AsciiThemeRegistryEntry {
  description: string;
  mode: AsciiThemeMode;
  palette: AsciiPalette;
  slug: string;
  title: string;
}

const palette = (
  ascii: [
    primary: string,
    soft: string,
    text: string,
    comment: string,
    muted: string,
    background: string,
    surface: string,
    secondary: string,
    dim: string,
    onPrimary: string,
    destructive: string,
  ]
): AsciiPalette => ({
  "ascii-primary": ascii[0],
  "ascii-soft": ascii[1],
  "ascii-text": ascii[2],
  "ascii-comment": ascii[3],
  "muted-foreground": ascii[4],
  background: ascii[5],
  "ascii-surface": ascii[6],
  secondary: ascii[7],
  "ascii-dim": ascii[8],
  "primary-foreground": ascii[9],
  destructive: ascii[10],
});

export const THEMES: AsciiThemeRegistryEntry[] = [
  {
    slug: "phosphor",
    title: "Phosphor",
    description: "The default ascii/ui palette: green phosphor on black.",
    mode: "dark",
    palette: palette([
      "#39ff6a",
      "#8fe6aa",
      "#f4fff7",
      "#4a5f52",
      "#6b8577",
      "#0b0f0c",
      "#0e1512",
      "#13251a",
      "#1e3a28",
      "#05130a",
      "#ffb000",
    ]),
  },
  {
    slug: "amber",
    title: "Amber",
    description: "Warm amber monitor glow.",
    mode: "dark",
    palette: palette([
      "#ffb000",
      "#e6c27a",
      "#fff7e6",
      "#6b5a33",
      "#8a7a52",
      "#0f0c06",
      "#161108",
      "#26200f",
      "#3a2f14",
      "#1a1200",
      "#ff5f5f",
    ]),
  },
  {
    slug: "ice",
    title: "Ice",
    description: "Cool cyan on near-black.",
    mode: "dark",
    palette: palette([
      "#5ee0ff",
      "#9ad8e6",
      "#f0fbff",
      "#3f5d66",
      "#5f8590",
      "#070c0f",
      "#0c1418",
      "#112028",
      "#193640",
      "#00121a",
      "#ffb000",
    ]),
  },
  {
    slug: "magenta",
    title: "Magenta",
    description: "Hot pink on dark plum.",
    mode: "dark",
    palette: palette([
      "#ff5ecf",
      "#e6a3d4",
      "#fff2fb",
      "#6a3d5c",
      "#8f5f80",
      "#0f070c",
      "#170b12",
      "#26101e",
      "#3f1a33",
      "#1a0012",
      "#ffb000",
    ]),
  },
  {
    slug: "violet",
    title: "Violet",
    description: "Soft violet on deep indigo.",
    mode: "dark",
    palette: palette([
      "#a78bfa",
      "#c4b5fd",
      "#f5f3ff",
      "#524a70",
      "#7a7099",
      "#0b0912",
      "#120f1c",
      "#1d1830",
      "#2e2650",
      "#0e0620",
      "#fb7185",
    ]),
  },
  {
    slug: "ember",
    title: "Ember",
    description: "Burnt orange on charcoal.",
    mode: "dark",
    palette: palette([
      "#ff6a3d",
      "#e6a08a",
      "#fff4f0",
      "#66463a",
      "#8c6a5c",
      "#100907",
      "#180e0b",
      "#281713",
      "#40241c",
      "#1a0800",
      "#ffd23f",
    ]),
  },
  {
    slug: "mono",
    title: "Mono",
    description: "Plain white on black.",
    mode: "dark",
    palette: palette([
      "#f2f2f2",
      "#b8b8b8",
      "#ffffff",
      "#5c5c5c",
      "#7a7a7a",
      "#0a0a0a",
      "#111111",
      "#1c1c1c",
      "#2e2e2e",
      "#0a0a0a",
      "#ff6b6b",
    ]),
  },
  {
    slug: "paper",
    title: "Paper",
    description: "Forest green on warm paper.",
    mode: "light",
    palette: palette([
      "#1f5f3a",
      "#3f6b52",
      "#141a16",
      "#8a9a90",
      "#6f7f75",
      "#f6f4ec",
      "#fbfaf5",
      "#e6e9e2",
      "#c9d2cc",
      "#f6f4ec",
      "#b4530a",
    ]),
  },
  {
    slug: "daylight",
    title: "Daylight",
    description: "Royal blue on cool white.",
    mode: "light",
    palette: palette([
      "#1d4ed8",
      "#3b5b9a",
      "#0f172a",
      "#8a94a8",
      "#64748b",
      "#f5f7fb",
      "#ffffff",
      "#e6ebf5",
      "#c7d0e0",
      "#ffffff",
      "#c2410c",
    ]),
  },
  {
    slug: "sepia",
    title: "Sepia",
    description: "Rust brown on aged parchment.",
    mode: "light",
    palette: palette([
      "#8a4b1f",
      "#8c6b4f",
      "#2b1d12",
      "#a8927c",
      "#8a7460",
      "#f4ecdf",
      "#faf5ec",
      "#ebe0cd",
      "#d6c6ad",
      "#faf5ec",
      "#a11f1f",
    ]),
  },
  {
    slug: "slate",
    title: "Slate",
    description: "Slate grey-blue on off-white.",
    mode: "light",
    palette: palette([
      "#334155",
      "#526075",
      "#0f172a",
      "#94a3b8",
      "#64748b",
      "#f1f5f9",
      "#ffffff",
      "#e2e8f0",
      "#cbd5e1",
      "#ffffff",
      "#b91c1c",
    ]),
  },
  {
    slug: "mint",
    title: "Mint",
    description: "Teal on mint white.",
    mode: "light",
    palette: palette([
      "#0f766e",
      "#3d7f79",
      "#052e2b",
      "#7fa39f",
      "#5f8581",
      "#effaf7",
      "#ffffff",
      "#d9f0eb",
      "#b7dcd5",
      "#ffffff",
      "#c2410c",
    ]),
  },
  {
    slug: "lavender",
    title: "Lavender",
    description: "Deep purple on lavender white.",
    mode: "light",
    palette: palette([
      "#6d28d9",
      "#7c5cb0",
      "#1e1233",
      "#9d92b8",
      "#7b6f99",
      "#f6f3fc",
      "#fdfcff",
      "#ebe4f7",
      "#d4c8ea",
      "#fdfcff",
      "#be123c",
    ]),
  },
  {
    slug: "ink",
    title: "Ink",
    description: "Black ink on white.",
    mode: "light",
    palette: palette([
      "#111111",
      "#444444",
      "#000000",
      "#8c8c8c",
      "#666666",
      "#ffffff",
      "#fafafa",
      "#eeeeee",
      "#d4d4d4",
      "#ffffff",
      "#c81e1e",
    ]),
  },
];

/** The :root variables every palette shares — the derived shadcn tokens
 * that alias the palette, the type-weight dials and the font hook.
 * Mirrors the non-palette part of app/globals.css `:root`. */
export const ASCII_BASE_CSS_VARS: Record<string, string> = {
  foreground: "var(--ascii-text)",
  card: "var(--ascii-surface)",
  "card-foreground": "var(--ascii-text)",
  popover: "var(--ascii-surface)",
  "popover-foreground": "var(--ascii-text)",
  primary: "var(--ascii-primary)",
  "secondary-foreground": "var(--ascii-soft)",
  "accent-foreground": "var(--ascii-text)",
  border: "var(--ascii-dim)",
  input: "var(--ascii-dim)",
  ring: "var(--ascii-primary)",
  "font-weight-heading": "700",
  "font-weight-base": "400",
  // The mono family. Falls back to IBM Plex Mono if the consumer wires
  // it up through next/font with variable "--font-ibm-plex-mono".
  "font-ascii":
    'var(--font-ibm-plex-mono, "IBM Plex Mono", ui-monospace, monospace)',
  "ascii-glow":
    "0 0 8px color-mix(in srgb, var(--ascii-primary) 35%, transparent)",
};

/** The `@theme inline` block: maps the tokens onto Tailwind utilities,
 * pins the type scale the ASCII grid is built on, and kills the
 * rounded-* scale. Mirrors app/globals.css `@theme inline`. */
export const ASCII_THEME_INLINE_VARS: Record<string, string> = {
  "text-sm": "16px",
  "text-sm--line-height": "22px",
  "color-background": "var(--background)",
  "color-foreground": "var(--foreground)",
  "font-sans": "var(--font-ascii)",
  "font-mono": "var(--font-ascii)",
  "font-heading": "var(--font-sans)",
  "color-sidebar-ring": "var(--ring)",
  "color-sidebar-border": "var(--border)",
  "color-sidebar-accent-foreground": "var(--accent-foreground)",
  "color-sidebar-accent": "var(--secondary)",
  "color-sidebar-primary-foreground": "var(--primary-foreground)",
  "color-sidebar-primary": "var(--primary)",
  "color-sidebar-foreground": "var(--ascii-soft)",
  "color-sidebar": "var(--background)",
  "color-ring": "var(--ring)",
  "color-input": "var(--input)",
  "color-border": "var(--border)",
  "color-destructive": "var(--destructive)",
  "color-accent-foreground": "var(--accent-foreground)",
  "color-muted-foreground": "var(--muted-foreground)",
  "color-secondary-foreground": "var(--secondary-foreground)",
  "color-secondary": "var(--secondary)",
  "color-primary-foreground": "var(--primary-foreground)",
  "color-primary": "var(--primary)",
  "color-popover-foreground": "var(--popover-foreground)",
  "color-popover": "var(--popover)",
  "color-card-foreground": "var(--card-foreground)",
  "color-card": "var(--card)",
  "color-ascii-comment": "var(--ascii-comment)",
  "color-ascii-soft": "var(--ascii-soft)",
  "animate-skeleton": "skeleton 2s steps(1, end) infinite",
  "radius-*": "initial",
};

/** Extra CSS shipped with every theme item: the two font-weight
 * utilities, the skeleton keyframes and the base layer (type size,
 * selection color, hidden scrollbars). Shape is the registry-item `css`
 * field. Mirrors the rest of app/globals.css. */
export const ASCII_THEME_CSS: Record<string, unknown> = {
  "@utility font-weight-heading": {
    "font-weight": "var(--font-weight-heading)",
  },
  "@utility font-weight-base": {
    "font-weight": "var(--font-weight-base)",
  },
  "@utility no-scrollbar": {
    "-ms-overflow-style": "none",
    "scrollbar-width": "none",
    "&::-webkit-scrollbar": { display: "none" },
  },
  "@keyframes skeleton": {
    "0%": { opacity: "0" },
    "33.33%": { opacity: "0.5" },
    "66.66%": { opacity: "1" },
    "100%": { opacity: "1" },
  },
  "@layer base": {
    "*": {
      "border-color": "var(--border)",
      "outline-color": "color-mix(in oklab, var(--ring) 50%, transparent)",
      "-ms-overflow-style": "none",
      "scrollbar-width": "none",
    },
    "*::-webkit-scrollbar": { display: "none" },
    html: { "font-family": "var(--font-ascii)" },
    body: {
      "font-weight": "var(--font-weight-base)",
      "background-color": "var(--background)",
      color: "var(--foreground)",
      "font-size": "var(--text-sm)",
      "line-height": "var(--text-sm--line-height)",
    },
    "::selection": {
      color: "var(--primary-foreground)",
      background: "var(--primary)",
    },
  },
};

/** A theme's full shadcn `cssVars` (theme/light/dark buckets). */
export function themeCssVars(theme: AsciiThemeRegistryEntry) {
  const vars = { ...theme.palette, ...ASCII_BASE_CSS_VARS };
  return { theme: ASCII_THEME_INLINE_VARS, light: vars, dark: vars };
}
