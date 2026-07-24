"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useThemePreset } from "@/lib/theme-preset";
import { THEME_COLOR_KEYS, THEMES } from "@/registry/themes";

/**
 * Applies the selected /theme preset to the whole app by setting CSS custom
 * properties directly on <html>: plain style.setProperty calls in an
 * effect, no data-attribute/stylesheet indirection needed. The selection
 * itself is already persisted to localStorage by useThemePreset, so this
 * just re-applies on every load and on every change.
 */
export function ThemePresetSync() {
  const [slug] = useThemePreset();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    const root = document.documentElement;
    const preset = THEMES.find((theme) => theme.slug === slug);

    if (!preset) {
      for (const key of THEME_COLOR_KEYS) {
        root.style.removeProperty(`--${key}`);
      }
      root.style.removeProperty("--radius");
      return;
    }

    const colors = preset.cssVars[resolvedTheme === "dark" ? "dark" : "light"];
    for (const key of THEME_COLOR_KEYS) {
      const value = colors[key];
      if (value) {
        root.style.setProperty(`--${key}`, value);
      }
    }
    const radius = preset.cssVars.theme?.radius;
    if (radius) {
      root.style.setProperty("--radius", radius);
    }
  }, [slug, resolvedTheme, mounted]);

  return null;
}
