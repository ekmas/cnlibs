import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-background px-rounded-md [--pixel-size:10px]">
      <SiteHeader />
      <main className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-16 text-center">
        <h1 className="font-medium text-4xl tracking-tight sm:text-5xl">
          8bit
        </h1>
        <p className="max-w-md text-muted-foreground">
          Pixel-cornered, retro-styled components for shadcn/ui, built on Base
          UI. Copy the code or install straight from the registry.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button
            nativeButton={false}
            render={
              <a
                href="https://github.com/ekmas/cnlibs/tree/main/apps/8bit"
                rel="noopener noreferrer"
                target="_blank"
              />
            }
          >
            View on GitHub
          </Button>
          <Button
            nativeButton={false}
            render={
              <a
                href="https://cnlibs.com"
                rel="noopener noreferrer"
                target="_blank"
              />
            }
            variant="outline"
          >
            Back to cnlibs
          </Button>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
