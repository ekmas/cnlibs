import { type AsciiChars, DEFAULT_ASCII_CHARS } from "@/lib/ascii";

/** localStorage key the theme is persisted under. Read by the
 * provider on mount and by the inline boot script in app/layout.tsx
 * so colors and font apply before the first paint. */
export const ASCII_THEME_STORAGE_KEY = "ascii-theme";

/** CSS variable the mono font family is written to (see globals.css
 * — every font-* utility resolves to it). */
export const ASCII_FONT_VAR = "--font-ascii";

/** The color variables every palette sets, in the order they're
 * written to CSS. */
export const ASCII_COLOR_VARIABLES = [
  "--ascii-primary",
  "--ascii-soft",
  "--ascii-text",
  "--ascii-comment",
  "--muted-foreground",
  "--background",
  "--ascii-surface",
  "--secondary",
  "--ascii-dim",
  "--primary-foreground",
  "--destructive",
] as const;

export type AsciiColorVariable = (typeof ASCII_COLOR_VARIABLES)[number];

export type AsciiColors = Record<AsciiColorVariable, string>;

export type AsciiTheme = {
  chars: AsciiChars;
  /** Google Fonts family name, e.g. "JetBrains Mono". `null` keeps
   * the bundled default (IBM Plex Mono). */
  font: string | null;
  colors: AsciiColors;
};

export const DEFAULT_ASCII_COLORS: AsciiColors = {
  "--ascii-primary": "#39ff6a",
  "--ascii-soft": "#8fe6aa",
  "--ascii-text": "#f4fff7",
  "--ascii-comment": "#4a5f52",
  "--muted-foreground": "#6b8577",
  "--background": "#0b0f0c",
  "--ascii-surface": "#0e1512",
  "--secondary": "#13251a",
  "--ascii-dim": "#1e3a28",
  "--primary-foreground": "#05130a",
  "--destructive": "#ffb000",
};

export const DEFAULT_ASCII_THEME: AsciiTheme = {
  chars: DEFAULT_ASCII_CHARS,
  font: null,
  colors: DEFAULT_ASCII_COLORS,
};

export type AsciiColorMode = "light" | "dark";

export type AsciiColorPreset = {
  id: string;
  name: string;
  mode: AsciiColorMode;
  colors: AsciiColors;
};

/** The fixed set of palettes: seven dark, seven light. Colors aren't
 * edited individually — a theme always carries one of these. */
export const ASCII_COLOR_PRESETS: AsciiColorPreset[] = [
  {
    id: "phosphor",
    name: "phosphor",
    mode: "dark",
    colors: DEFAULT_ASCII_COLORS,
  },
  {
    id: "amber",
    name: "amber",
    mode: "dark",
    colors: {
      "--ascii-primary": "#ffb000",
      "--ascii-soft": "#e6c27a",
      "--ascii-text": "#fff7e6",
      "--ascii-comment": "#6b5a33",
      "--muted-foreground": "#8a7a52",
      "--background": "#0f0c06",
      "--ascii-surface": "#161108",
      "--secondary": "#26200f",
      "--ascii-dim": "#3a2f14",
      "--primary-foreground": "#1a1200",
      "--destructive": "#ff5f5f",
    },
  },
  {
    id: "ice",
    name: "ice",
    mode: "dark",
    colors: {
      "--ascii-primary": "#5ee0ff",
      "--ascii-soft": "#9ad8e6",
      "--ascii-text": "#f0fbff",
      "--ascii-comment": "#3f5d66",
      "--muted-foreground": "#5f8590",
      "--background": "#070c0f",
      "--ascii-surface": "#0c1418",
      "--secondary": "#112028",
      "--ascii-dim": "#193640",
      "--primary-foreground": "#00121a",
      "--destructive": "#ffb000",
    },
  },
  {
    id: "magenta",
    name: "magenta",
    mode: "dark",
    colors: {
      "--ascii-primary": "#ff5ecf",
      "--ascii-soft": "#e6a3d4",
      "--ascii-text": "#fff2fb",
      "--ascii-comment": "#6a3d5c",
      "--muted-foreground": "#8f5f80",
      "--background": "#0f070c",
      "--ascii-surface": "#170b12",
      "--secondary": "#26101e",
      "--ascii-dim": "#3f1a33",
      "--primary-foreground": "#1a0012",
      "--destructive": "#ffb000",
    },
  },
  {
    id: "violet",
    name: "violet",
    mode: "dark",
    colors: {
      "--ascii-primary": "#a78bfa",
      "--ascii-soft": "#c4b5fd",
      "--ascii-text": "#f5f3ff",
      "--ascii-comment": "#524a70",
      "--muted-foreground": "#7a7099",
      "--background": "#0b0912",
      "--ascii-surface": "#120f1c",
      "--secondary": "#1d1830",
      "--ascii-dim": "#2e2650",
      "--primary-foreground": "#0e0620",
      "--destructive": "#fb7185",
    },
  },
  {
    id: "ember",
    name: "ember",
    mode: "dark",
    colors: {
      "--ascii-primary": "#ff6a3d",
      "--ascii-soft": "#e6a08a",
      "--ascii-text": "#fff4f0",
      "--ascii-comment": "#66463a",
      "--muted-foreground": "#8c6a5c",
      "--background": "#100907",
      "--ascii-surface": "#180e0b",
      "--secondary": "#281713",
      "--ascii-dim": "#40241c",
      "--primary-foreground": "#1a0800",
      "--destructive": "#ffd23f",
    },
  },
  {
    id: "mono",
    name: "mono",
    mode: "dark",
    colors: {
      "--ascii-primary": "#f2f2f2",
      "--ascii-soft": "#b8b8b8",
      "--ascii-text": "#ffffff",
      "--ascii-comment": "#5c5c5c",
      "--muted-foreground": "#7a7a7a",
      "--background": "#0a0a0a",
      "--ascii-surface": "#111111",
      "--secondary": "#1c1c1c",
      "--ascii-dim": "#2e2e2e",
      "--primary-foreground": "#0a0a0a",
      "--destructive": "#ff6b6b",
    },
  },
  {
    id: "paper",
    name: "paper",
    mode: "light",
    colors: {
      "--ascii-primary": "#1f5f3a",
      "--ascii-soft": "#3f6b52",
      "--ascii-text": "#141a16",
      "--ascii-comment": "#8a9a90",
      "--muted-foreground": "#6f7f75",
      "--background": "#f6f4ec",
      "--ascii-surface": "#fbfaf5",
      "--secondary": "#e6e9e2",
      "--ascii-dim": "#c9d2cc",
      "--primary-foreground": "#f6f4ec",
      "--destructive": "#b4530a",
    },
  },
  {
    id: "daylight",
    name: "daylight",
    mode: "light",
    colors: {
      "--ascii-primary": "#1d4ed8",
      "--ascii-soft": "#3b5b9a",
      "--ascii-text": "#0f172a",
      "--ascii-comment": "#8a94a8",
      "--muted-foreground": "#64748b",
      "--background": "#f5f7fb",
      "--ascii-surface": "#ffffff",
      "--secondary": "#e6ebf5",
      "--ascii-dim": "#c7d0e0",
      "--primary-foreground": "#ffffff",
      "--destructive": "#c2410c",
    },
  },
  {
    id: "sepia",
    name: "sepia",
    mode: "light",
    colors: {
      "--ascii-primary": "#8a4b1f",
      "--ascii-soft": "#8c6b4f",
      "--ascii-text": "#2b1d12",
      "--ascii-comment": "#a8927c",
      "--muted-foreground": "#8a7460",
      "--background": "#f4ecdf",
      "--ascii-surface": "#faf5ec",
      "--secondary": "#ebe0cd",
      "--ascii-dim": "#d6c6ad",
      "--primary-foreground": "#faf5ec",
      "--destructive": "#a11f1f",
    },
  },
  {
    id: "slate",
    name: "slate",
    mode: "light",
    colors: {
      "--ascii-primary": "#334155",
      "--ascii-soft": "#526075",
      "--ascii-text": "#0f172a",
      "--ascii-comment": "#94a3b8",
      "--muted-foreground": "#64748b",
      "--background": "#f1f5f9",
      "--ascii-surface": "#ffffff",
      "--secondary": "#e2e8f0",
      "--ascii-dim": "#cbd5e1",
      "--primary-foreground": "#ffffff",
      "--destructive": "#b91c1c",
    },
  },
  {
    id: "mint",
    name: "mint",
    mode: "light",
    colors: {
      "--ascii-primary": "#0f766e",
      "--ascii-soft": "#3d7f79",
      "--ascii-text": "#052e2b",
      "--ascii-comment": "#7fa39f",
      "--muted-foreground": "#5f8581",
      "--background": "#effaf7",
      "--ascii-surface": "#ffffff",
      "--secondary": "#d9f0eb",
      "--ascii-dim": "#b7dcd5",
      "--primary-foreground": "#ffffff",
      "--destructive": "#c2410c",
    },
  },
  {
    id: "lavender",
    name: "lavender",
    mode: "light",
    colors: {
      "--ascii-primary": "#6d28d9",
      "--ascii-soft": "#7c5cb0",
      "--ascii-text": "#1e1233",
      "--ascii-comment": "#9d92b8",
      "--muted-foreground": "#7b6f99",
      "--background": "#f6f3fc",
      "--ascii-surface": "#fdfcff",
      "--secondary": "#ebe4f7",
      "--ascii-dim": "#d4c8ea",
      "--primary-foreground": "#fdfcff",
      "--destructive": "#be123c",
    },
  },
  {
    id: "ink",
    name: "ink",
    mode: "light",
    colors: {
      "--ascii-primary": "#111111",
      "--ascii-soft": "#444444",
      "--ascii-text": "#000000",
      "--ascii-comment": "#8c8c8c",
      "--muted-foreground": "#666666",
      "--background": "#ffffff",
      "--ascii-surface": "#fafafa",
      "--secondary": "#eeeeee",
      "--ascii-dim": "#d4d4d4",
      "--primary-foreground": "#ffffff",
      "--destructive": "#c81e1e",
    },
  },
];

/** The preset a color set belongs to, if any. */
export function findColorPreset(colors: AsciiColors) {
  return ASCII_COLOR_PRESETS.find((preset) =>
    ASCII_COLOR_VARIABLES.every(
      (variable) =>
        preset.colors[variable].toLowerCase() === colors[variable].toLowerCase()
    )
  );
}

export type AsciiCharsPreset = {
  id: string;
  name: string;
  chars: AsciiChars;
};

export const ASCII_CHARS_PRESETS: AsciiCharsPreset[] = [
  { id: "classic", name: "classic", chars: DEFAULT_ASCII_CHARS },
  {
    id: "double",
    name: "double",
    chars: {
      top: "=",
      bottom: "=",
      left: "‖",
      right: "‖",
      divider: "=",
      junction: "#",
    },
  },
  {
    id: "box",
    name: "box drawing",
    chars: {
      top: "─",
      bottom: "─",
      left: "│",
      right: "│",
      divider: "─",
      junction: "┼",
    },
  },
  {
    id: "dots",
    name: "dots",
    chars: {
      top: "·",
      bottom: "·",
      left: ":",
      right: ":",
      divider: "·",
      junction: "o",
    },
  },
  {
    id: "arrows",
    name: "arrows",
    chars: {
      top: "<|>",
      bottom: "<|>",
      left: "^|v",
      right: "^|v",
      divider: "-=",
      junction: "*",
    },
  },
  {
    id: "waves",
    name: "waves",
    chars: {
      top: "~",
      bottom: "~",
      left: "(",
      right: ")",
      divider: "~-",
      junction: "@",
    },
  },
];

/** Monospace families available on Google Fonts, with the weights
 * each one ships (the loader only requests weights that exist). */
export const GOOGLE_MONO_FONTS: { family: string; weights: number[] }[] = [
  { family: "IBM Plex Mono", weights: [400, 500, 700] },
  { family: "JetBrains Mono", weights: [400, 500, 700] },
  { family: "Fira Code", weights: [400, 500, 700] },
  { family: "Fira Mono", weights: [400, 500, 700] },
  { family: "Source Code Pro", weights: [400, 500, 700] },
  { family: "Roboto Mono", weights: [400, 500, 700] },
  { family: "Space Mono", weights: [400, 700] },
  { family: "Ubuntu Mono", weights: [400, 700] },
  { family: "Ubuntu Sans Mono", weights: [400, 500, 700] },
  { family: "Inconsolata", weights: [400, 500, 700] },
  { family: "DM Mono", weights: [400, 500] },
  { family: "Geist Mono", weights: [400, 500, 700] },
  { family: "Red Hat Mono", weights: [400, 500, 700] },
  { family: "Overpass Mono", weights: [400, 500, 700] },
  { family: "Noto Sans Mono", weights: [400, 500, 700] },
  { family: "Azeret Mono", weights: [400, 500, 700] },
  { family: "Martian Mono", weights: [400, 500, 700] },
  { family: "Chivo Mono", weights: [400, 500, 700] },
  { family: "Spline Sans Mono", weights: [400, 500, 700] },
  { family: "Sometype Mono", weights: [400, 500, 700] },
  { family: "Kode Mono", weights: [400, 500, 700] },
  { family: "Victor Mono", weights: [400, 500, 700] },
  { family: "Courier Prime", weights: [400, 700] },
  { family: "Anonymous Pro", weights: [400, 700] },
  { family: "Cousine", weights: [400, 700] },
  { family: "B612 Mono", weights: [400, 700] },
  { family: "Nanum Gothic Coding", weights: [400, 700] },
  { family: "PT Mono", weights: [400] },
  { family: "Share Tech Mono", weights: [400] },
  { family: "Fragment Mono", weights: [400] },
  { family: "Oxygen Mono", weights: [400] },
  { family: "Cutive Mono", weights: [400] },
  { family: "Nova Mono", weights: [400] },
  { family: "Syne Mono", weights: [400] },
  { family: "Xanh Mono", weights: [400] },
  { family: "VT323", weights: [400] },
  { family: "Major Mono Display", weights: [400] },
];

export const DEFAULT_FONT_FAMILY = "IBM Plex Mono";

/** Google Fonts CSS URL for a family. `weights` narrows the request
 * to weights the font actually has (the API rejects unknown ones);
 * omit it for a plain regular-only request that works for any family. */
export function googleFontUrl(family: string, weights?: number[]) {
  const name = encodeURIComponent(family.trim()).replace(/%20/g, "+");
  const spec =
    weights && weights.length > 0 ? `${name}:wght@${weights.join(";")}` : name;
  return `https://fonts.googleapis.com/css2?family=${spec}&display=swap`;
}

/** The `font-family` value written to the CSS variable. */
export function fontFamilyValue(family: string) {
  return `"${family.trim().replace(/"/g, "")}", ui-monospace, monospace`;
}

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

function normalizeChars(input: unknown, target: AsciiChars) {
  if (!isRecord(input)) {
    return;
  }
  const keys = Object.keys(DEFAULT_ASCII_CHARS) as (keyof AsciiChars)[];
  for (const key of keys) {
    const value = input[key];
    if (typeof value === "string" && value.length > 0) {
      target[key] = key === "junction" ? value.slice(0, 1) : value;
    }
  }
}

function normalizeColors(input: unknown, target: AsciiColors) {
  if (!isRecord(input)) {
    return;
  }
  for (const variable of ASCII_COLOR_VARIABLES) {
    const value = input[variable];
    if (typeof value === "string" && value.length > 0) {
      target[variable] = value;
    }
  }
}

/** Merges a parsed (untrusted) stored theme onto the defaults, keeping
 * only well-formed entries so a stale or hand-edited payload can't
 * break rendering. */
export function normalizeAsciiTheme(input: unknown): AsciiTheme {
  const theme: AsciiTheme = {
    chars: { ...DEFAULT_ASCII_CHARS },
    font: null,
    colors: { ...DEFAULT_ASCII_COLORS },
  };
  if (!isRecord(input)) {
    return theme;
  }
  normalizeChars(input.chars, theme.chars);
  normalizeColors(input.colors, theme.colors);
  if (typeof input.font === "string" && input.font.trim().length > 0) {
    theme.font = input.font.trim();
  }
  return theme;
}

export function isDefaultAsciiTheme(theme: AsciiTheme) {
  return JSON.stringify(theme) === JSON.stringify(DEFAULT_ASCII_THEME);
}
