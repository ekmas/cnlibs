"use client";

import * as React from "react";

import { type AsciiChars, DEFAULT_ASCII_CHARS } from "@/lib/ascii";

/** The glyph set every framed component draws its edges from. The
 * default value means components work with no provider at all — they
 * render the classic "+", "-" and "|" frame. */
const AsciiCharsContext = React.createContext<AsciiChars>(DEFAULT_ASCII_CHARS);

/** Supplies a fixed glyph set to every component beneath it — the
 * static entry point for a project that wants, say, "<|>" edges without
 * the styling page's localStorage-backed AsciiThemeProvider. Any key
 * left out keeps its default. */
function AsciiCharsProvider({
  chars,
  children,
}: {
  chars: Partial<AsciiChars>;
  children: React.ReactNode;
}) {
  const value = React.useMemo<AsciiChars>(
    () => ({ ...DEFAULT_ASCII_CHARS, ...chars }),
    [chars]
  );
  return (
    <AsciiCharsContext.Provider value={value}>
      {children}
    </AsciiCharsContext.Provider>
  );
}

/** The active border glyph set. */
function useAsciiChars(): AsciiChars {
  return React.useContext(AsciiCharsContext);
}

export { AsciiCharsContext, AsciiCharsProvider, useAsciiChars };
