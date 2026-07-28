import Link from "next/link";
import { HomeDecorativeColumns } from "@/components/home-decorative-columns-loader";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex h-[calc(100dvh-50px)] min-h-0 flex-col overflow-hidden bg-background px-rounded-md [--pixel-size:10px]">
      <SiteHeader />
      <main className="relative min-h-0 flex-1 overflow-hidden px-10 py-12">
        {/* Hero — pulled out of the column flow and pinned to the corner so
         * it never fights the columns for width; it just sits on top. */}
        <div className="absolute top-12 left-10 z-10 flex max-w-xs flex-col items-start gap-6 text-left">
          <h1 className="font-medium text-4xl tracking-tight sm:text-5xl">
            8bit.cnlibs.com
          </h1>
          <p className="max-w-md text-muted-foreground">
            Pixel-cornered, retro-styled components for shadcn/ui, built on Base
            UI. Copy the code or install with Shadcn CLI.
          </p>
          <div className="flex flex-wrap items-center justify-start gap-3">
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
