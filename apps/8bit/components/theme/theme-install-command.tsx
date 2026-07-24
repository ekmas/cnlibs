"use client";

import { InstallTabs } from "@/components/docs/install-tabs";
import { SITE_URL } from "@/lib/site";
import { DEFAULT_THEME_PRESET, useThemePreset } from "@/lib/theme-preset";

export function ThemeInstallCommand() {
  const [slug] = useThemePreset();

  if (slug === DEFAULT_THEME_PRESET) {
    return (
      <p className="mx-0.5 text-muted-foreground text-sm">
        The default theme ships with every 8bit/ui install — nothing to add.
      </p>
    );
  }

  const url = `${SITE_URL}/r/themes/${slug}.json`;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <p className="mx-0.5 text-muted-foreground text-sm">
          Add to an existing project:
        </p>
        <InstallTabs subcommand="add" url={url} />
      </div>
      <div className="flex flex-col gap-2">
        <p className="mx-0.5 text-muted-foreground text-sm">
          Or scaffold a new project already themed:
        </p>
        <InstallTabs subcommand="init" url={url} />
      </div>
    </div>
  );
}
