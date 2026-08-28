"use client";

import * as React from "react";

import { AsciiCharsContext } from "@/components/ascii/ascii-chars";
import type { AsciiChars } from "@/lib/ascii";
import {
  ASCII_FONT_VAR,
  ASCII_THEME_STORAGE_KEY,
  type AsciiColors,
  type AsciiTheme,
  DEFAULT_ASCII_THEME,
  fontFamilyValue,
  GOOGLE_MONO_FONTS,
  googleFontUrl,
  normalizeAsciiTheme,
} from "@/lib/ascii-theme";

const FONT_LINK_ID = "ascii-google-font";

type AsciiThemeContextValue = {
  theme: AsciiTheme;
  /** True once the persisted theme has been read on the client. */
  hydrated: boolean;
  setTheme: (
    update: AsciiTheme | ((previous: AsciiTheme) => AsciiTheme)
  ) => void;
  setChars: (chars: Partial<AsciiChars>) => void;
  setColors: (colors: Partial<AsciiColors>) => void;
  setFont: (font: string | null) => void;
  reset: () => void;
};

const AsciiThemeContext = React.createContext<AsciiThemeContextValue>({
  theme: DEFAULT_ASCII_THEME,
  hydrated: false,
  setTheme: () => undefined,
  setChars: () => undefined,
  setColors: () => undefined,
  setFont: () => undefined,
  reset: () => undefined,
});

function readStoredTheme(): AsciiTheme | null {
  try {
    const raw = window.localStorage.getItem(ASCII_THEME_STORAGE_KEY);
    if (!raw) {
      return null;
    }
    return normalizeAsciiTheme(JSON.parse(raw));
  } catch {
    return null;
  }
}

function writeStoredTheme(theme: AsciiTheme) {
  try {
    window.localStorage.setItem(ASCII_THEME_STORAGE_KEY, JSON.stringify(theme));
  } catch {
    // storage unavailable — the theme still applies for this session
  }
}

/** Writes the color tokens onto <html> as inline custom properties so
 * they override the :root values from globals.css. */
function applyColors(colors: AsciiColors) {
  const root = document.documentElement;
  for (const [variable, value] of Object.entries(colors)) {
    root.style.setProperty(variable, value);
  }
}

/** Loads a Google Font by injecting (or swapping) one stylesheet link.
 * Curated families request the weights they ship; a free-typed family
 * is first tried with 400/700 and, if Google rejects that, retried as
 * a plain regular-only request that any family accepts. */
function applyFont(font: string | null) {
  const root = document.documentElement;
  const existing = document.getElementById(FONT_LINK_ID);

  if (!font) {
    existing?.remove();
    root.style.removeProperty(ASCII_FONT_VAR);
    return;
  }

  const known = GOOGLE_MONO_FONTS.find(
    (entry) => entry.family.toLowerCase() === font.toLowerCase()
  );
  const family = known?.family ?? font;
  const primaryUrl = googleFontUrl(family, known?.weights ?? [400, 700]);

  if (existing?.getAttribute("data-family") !== family) {
    existing?.remove();
    const link = document.createElement("link");
    link.id = FONT_LINK_ID;
    link.rel = "stylesheet";
    link.href = primaryUrl;
    link.setAttribute("data-family", family);
    if (!known) {
      link.onerror = () => {
        link.onerror = null;
        link.href = googleFontUrl(family);
      };
    }
    document.head.appendChild(link);
  }

  root.style.setProperty(ASCII_FONT_VAR, fontFamilyValue(family));
}

function AsciiThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] =
    React.useState<AsciiTheme>(DEFAULT_ASCII_THEME);
  const [hydrated, setHydrated] = React.useState(false);

  // The server renders the defaults; the persisted theme is picked up
  // after hydration so markup matches. Colors and font are also set
  // pre-paint by the boot script in app/layout.tsx, so only the border
  // glyphs can briefly show their defaults.
  React.useEffect(() => {
    const stored = readStoredTheme();
    if (stored) {
      setThemeState(stored);
    }
    setHydrated(true);
  }, []);

  React.useEffect(() => {
    if (!hydrated) {
      return;
    }
    applyColors(theme.colors);
    applyFont(theme.font);
    writeStoredTheme(theme);
  }, [theme, hydrated]);

  const setTheme = React.useCallback<AsciiThemeContextValue["setTheme"]>(
    (update) => {
      setThemeState((previous) =>
        normalizeAsciiTheme(
          typeof update === "function" ? update(previous) : update
        )
      );
    },
    []
  );

  const value = React.useMemo<AsciiThemeContextValue>(
    () => ({
      theme,
      hydrated,
      setTheme,
      setChars: (chars) =>
        setTheme((previous) => ({
          ...previous,
          chars: { ...previous.chars, ...chars },
        })),
      setColors: (colors) =>
        setTheme((previous) => ({
          ...previous,
          colors: { ...previous.colors, ...colors },
        })),
      setFont: (font) => setTheme((previous) => ({ ...previous, font })),
      reset: () => setTheme(DEFAULT_ASCII_THEME),
    }),
    [theme, hydrated, setTheme]
  );

  return (
    <AsciiThemeContext.Provider value={value}>
      <AsciiCharsContext.Provider value={theme.chars}>
        {children}
      </AsciiCharsContext.Provider>
    </AsciiThemeContext.Provider>
  );
}

function useAsciiTheme() {
  return React.useContext(AsciiThemeContext);
}

export { AsciiThemeProvider, useAsciiTheme };
