"use client";

import { RotateCcwIcon } from "lucide-react";
import { useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DEFAULT_THEME_PRESET, useThemePreset } from "@/lib/theme-preset";
import { THEMES } from "@/registry/themes";

export function ThemePresetSelect() {
  const [slug, setSlug] = useThemePreset();
  const handleValueChange = useCallback(
    (value: unknown) => setSlug(value as string),
    [setSlug]
  );
  const handleReset = useCallback(
    () => setSlug(DEFAULT_THEME_PRESET),
    [setSlug]
  );
  const isDefault = slug === DEFAULT_THEME_PRESET;

  return (
    <div className="flex items-center gap-2">
      <Select onValueChange={handleValueChange} value={slug}>
        <SelectTrigger className="w-56">
          <SelectValue placeholder="Select a theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={DEFAULT_THEME_PRESET}>Default (8bit)</SelectItem>
          {THEMES.map((theme) => (
            <SelectItem key={theme.slug} value={theme.slug}>
              {theme.title}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button
        disabled={isDefault}
        onClick={handleReset}
        size="sm"
        variant="outline"
      >
        <RotateCcwIcon />
        Reset to normal
      </Button>
    </div>
  );
}
