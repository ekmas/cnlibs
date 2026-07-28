import Link from "next/link";
import { HomeDecorativeColumns } from "@/components/home-decorative-columns-loader";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex h-svh min-h-0 flex-col overflow-y-auto bg-background px-rounded-md [--pixel-size:0px] sm:h-[calc(100dvh-50px)] lg:overflow-hidden sm:[--pixel-size:10px]">
      <SiteHeader />
      <main className="lg:items-[unset] lg:justify-[unset] relative flex min-h-[calc(100svh-56px-65px)] items-center justify-center overflow-y-auto px-4 py-12 sm:min-h-[calc(100dvh-50px-56px-69px)] sm:px-10 lg:block lg:overflow-hidden">
        {/* Hero — pulled out of the column flow and pinned to the corner so
         * it never fights the columns for width on lg+; it just sits on top.
         * Below lg the decorative columns are hidden (see
         * HomeDecorativeColumns), so this is free to become the only
         * content, and this container scrolls instead of clipping it on
         * short viewports. */}
        <div className="static top-12 left-10 z-10 flex max-w-xs flex-col items-center gap-6 bg-background text-center lg:absolute lg:items-start lg:pr-4 lg:pb-10 lg:text-left">
          <h1 className="font-medium text-3xl tracking-tight sm:text-5xl">
            8bit.cnlibs.com
          </h1>
          <p className="max-w-md text-muted-foreground">
            Pixel-cornered, retro-styled components for shadcn/ui, built on Base
            UI. Copy the code or install with Shadcn CLI.
          </p>
          <div className="flex flex-wrap items-center justify-start gap-1 sm:gap-3">
            <Button nativeButton={false} render={<Link href="/docs" />}>
              Get started
            </Button>
            <Button
              nativeButton={false}
              render={
                <a
                  href="https://github.com/ekmas/cnlibs/tree/main/apps/8bit"
                  rel="noopener noreferrer"
                  target="_blank"
                />
              }
              variant="outline"
            >
              View on GitHub
            </Button>
          </div>
        </div>

        <HomeDecorativeColumns />
      </main>
      <SiteFooter />
    </div>
  );
}
