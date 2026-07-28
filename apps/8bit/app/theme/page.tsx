import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeInstallCommand } from "@/components/theme/theme-install-command";
import { ThemePresetSelect } from "@/components/theme/theme-preset-select";
import { ThemePreview } from "@/components/theme/theme-preview";

export const metadata: Metadata = {
  description:
    "Preview theme presets from the 8bit/ui theme registry and copy the shadcn CLI command to install one.",
  title: "Theme",
};

export default function ThemePage() {
  return (
    <div className="flex h-svh min-h-0 flex-col bg-background px-rounded-md [--pixel-size:0px] sm:h-[calc(100dvh-50px)] sm:[--pixel-size:10px]">
      <SiteHeader />
      <main className="no-scrollbar min-h-0 flex-1 overflow-y-auto">
        <div className="flex flex-col gap-8 py-10">
          <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-4 sm:px-6">
            <header className="flex flex-col gap-2">
              <h1 className="font-medium text-3xl tracking-tight">Theme</h1>
              <p className="text-muted-foreground">
                Pick a theme from the 8bit theme registry to preview it on the
                components below. Your pick is saved and still applied next time
                you load this page — install it with the shadcn CLI to add it to
                your own project, or use it to scaffold a new one.
              </p>
            </header>

            <div className="flex flex-col gap-3">
              <ThemePresetSelect />
              <ThemeInstallCommand />
            </div>
          </div>

          <div className="px-6">
            <ThemePreview />
          </div>
        </div>
        <SiteFooter />
      </main>
    </div>
  );
}
