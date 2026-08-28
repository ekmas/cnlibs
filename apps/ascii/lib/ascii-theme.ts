import { type AsciiChars, DEFAULT_ASCII_CHARS } from "@/lib/ascii";
import {
  ASCII_PALETTE_KEYS,
  type AsciiPalette,
  type AsciiPaletteKey,
  type AsciiThemeMode,
  THEMES,
} from "@/registry/themes";

/** localStorage key the theme is persisted under. Read by the
 * provider on mount and by the inline boot script in app/layout.tsx
 * so colors and font apply before the first paint. */
export const ASCII_THEME_STORAGE_KEY = "ascii-theme";

/** CSS variable the mono font family is written to (see globals.css
 * — every font-* utility resolves to it). */
export const ASCII_FONT_VAR = "--font-ascii";

/** The color variables every palette sets (CSS variable names, with
 * the leading "--"), derived from the registry's palette keys. */
export const ASCII_COLOR_VARIABLES = ASCII_PALETTE_KEYS.map(
  (key) => `--${key}` as const
);

export type AsciiColorVariable = `--${AsciiPaletteKey}`;

export type AsciiColors = Record<AsciiColorVariable, string>;

export type AsciiTheme = {
  chars: AsciiChars;
  /** Google Fonts family name, e.g. "JetBrains Mono". `null` keeps
   * the bundled default (IBM Plex Mono). */
  font: string | null;
  colors: AsciiColors;
};

export type AsciiColorMode = AsciiThemeMode;

export type AsciiColorPreset = {
  id: string;
  name: string;
  mode: AsciiColorMode;
  colors: AsciiColors;
};

/** A registry palette (keys without "--") as the "--"-prefixed color
 * map the provider writes onto <html>. */
export function paletteToColors(palette: AsciiPalette): AsciiColors {
  const colors: Partial<AsciiColors> = {};
  for (const key of ASCII_PALETTE_KEYS) {
    colors[`--${key}`] = palette[key];
  }
  return colors as AsciiColors;
}

/** The fixed set of palettes — seven dark, seven light — straight from
 * registry/themes.ts. Colors aren't edited individually; a theme always
 * carries one of these. */
export const ASCII_COLOR_PRESETS: AsciiColorPreset[] = THEMES.map((theme) => ({
  id: theme.slug,
  name: theme.slug,
  mode: theme.mode,
  colors: paletteToColors(theme.palette),
}));

const [defaultPreset] = ASCII_COLOR_PRESETS;
if (!defaultPreset) {
  throw new Error("registry/themes.ts must define at least one theme");
}

export const DEFAULT_ASCII_COLORS: AsciiColors = defaultPreset.colors;

export const DEFAULT_ASCII_THEME: AsciiTheme = {
  chars: DEFAULT_ASCII_CHARS,
  font: null,
  colors: DEFAULT_ASCII_COLORS,
};

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
