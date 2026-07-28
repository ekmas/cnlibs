"use client";

import { CodeBlock } from "@/components/docs/code-block";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PIXEL_UTILITIES_CSS } from "@/lib/generated/pixel-utilities";
import { SITE_URL } from "@/lib/site";
import { themeCssVarsToText } from "@/lib/theme-css";
import { useThemePreset } from "@/lib/theme-preset";
import { THEMES } from "@/registry/themes";

export function ThemeInstallCommand() {
  const [slug] = useThemePreset();
  const url = `${SITE_URL}/r/themes/${slug}.json`;
  const themeCssVars = THEMES.find((t) => t.slug === slug)?.cssVars ?? {
    dark: {},
    light: {},
  };

  return (
    <Dialog>
      <DialogTrigger render={<Button />}>Install</DialogTrigger>
      <DialogContent className="max-h-[calc(100dvh-2rem)] overflow-y-auto [--px-border-color:transparent] sm:max-w-max">
        <DialogHeader>
          <DialogTitle>Install this theme</DialogTitle>
          <DialogDescription>
            Copy the command for your package manager below.
          </DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="cli">
          <TabsList variant="line">
            <TabsTrigger value="cli">Shadcn CLI</TabsTrigger>
            <TabsTrigger value="manual">Manual</TabsTrigger>
          </TabsList>
          <TabsContent value="cli">
            <div className="flex flex-col gap-4 pt-4">
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
          </TabsContent>
          <TabsContent value="manual">
            <div className="flex flex-col gap-4 pt-4">
              <div className="flex flex-col gap-2">
                <p className="mx-0.5 text-muted-foreground text-sm">
                  Theme colors — paste into your globals.css:
                </p>
                <CodeBlock code={themeCssVarsToText(themeCssVars)} />
              </div>
              <div className="flex flex-col gap-2">
                <p className="mx-0.5 text-muted-foreground text-sm">
                  Pixel-corner utilities:
                </p>
                <CodeBlock code={PIXEL_UTILITIES_CSS} />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
