"use client";

import { InstallTabs } from "@/components/docs/install-tabs";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SITE_URL } from "@/lib/site";
import { useThemePreset } from "@/lib/theme-preset";

export function ThemeInstallCommand() {
  const [slug] = useThemePreset();
  const url = `${SITE_URL}/r/themes/${slug}.json`;

  return (
    <Dialog>
      <DialogTrigger render={<Button />}>Copy</DialogTrigger>
      <DialogContent className="sm:max-w-max">
        <DialogHeader>
          <DialogTitle>Install this theme</DialogTitle>
          <DialogDescription>
            Copy the command for your package manager below.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="mx-0.5 text-muted-foreground text-sm">
              Scaffold a new project already themed:
            </p>
            <InstallTabs compact subcommand="init" unrounded url={url} />
          </div>
          <div className="flex flex-col gap-2">
            <p className="mx-0.5 text-muted-foreground text-sm">
              Or add to an existing project:
            </p>
            <InstallTabs compact subcommand="add" unrounded url={url} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
