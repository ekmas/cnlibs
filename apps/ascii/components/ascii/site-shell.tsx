import Link from "next/link";

import { AppSidebar } from "@/components/ascii/app-sidebar";
import {
  AsciiJunction,
  AsciiRule,
  AsciiVRule,
} from "@/components/ascii/ascii-box";
import { Brand } from "@/components/ascii/brand";
import { SearchButton } from "@/components/ascii/search";
import { SiteFooter } from "@/components/ascii/site-footer";
import { Button } from "@/components/ui/button";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

const NAV = [
  { href: "/docs", label: "Docs" },
  { href: "/components", label: "Components" },
  { href: "/styling", label: "Styling" },
] as const;

/** The docs chrome shared by every page under the root frame: the
 * component sidebar, its divider column, and the header row with the
 * site nav. Pages render inside the scrolling inset. */
function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-0 flex-1">
      <SidebarProvider>
        {/* Below lg the sidebar and its divider go away entirely; the
            brand moves into the top bar and every nav destination stays
            reachable through the search palette's Navigation group. */}
        <div className="hidden lg:contents">
          <AppSidebar />
          {/* Divider column. The fixed junction glyphs escape the layout's
              overflow clipping to land on the frame's top/bottom border
              rows; their horizontal position tracks the column. */}
          <div className="flex flex-col">
            <AsciiJunction className="fixed top-[calc((100dvh-var(--frame-h))/2)] w-[1ch] text-center text-ascii-soft leading-none" />
            <AsciiVRule tone="soft" side="right" className="flex-1" />
            <AsciiJunction className="fixed bottom-[calc((100dvh-var(--frame-h))/2)] w-[1ch] text-center text-ascii-soft leading-none" />
          </div>
        </div>
        <SidebarInset>
          <header className="flex flex-col">
            <div className="flex h-[3lh] items-center gap-[3ch] px-[2ch] font-mono text-sm">
              <Brand className="lg:hidden" />
              <nav className="hidden items-center gap-[4ch] lg:flex">
                {NAV.map((item) => (
                  <Button
                    key={item.label}
                    className="self-center"
                    nativeButton={false}
                    render={<Link href={item.href} />}
                    variant="link"
                  >
                    {item.label}
                  </Button>
                ))}
              </nav>
              <div className="ml-auto flex items-center gap-[4ch]">
                <SearchButton />
                <Button
                  className="self-center max-xl:hidden"
                  nativeButton={false}
                  render={
                    <a
                      href="https://github.com/ekmas/cnlibs"
                      rel="noopener noreferrer"
                      target="_blank"
                    />
                  }
                  variant="link"
                >
                  Github
                </Button>
                <Button
                  className="self-center max-xl:hidden"
                  nativeButton={false}
                  render={
                    <a
                      href="https://x.com/samuelbreznjak"
                      rel="noopener noreferrer"
                      target="_blank"
                    />
                  }
                  variant="link"
                >
                  X
                </Button>
              </div>
            </div>
            {/* Bridge 1ch left across the sidebar divider column so the
                junction sits in the same text row as the rule. */}
            <div aria-hidden className="-ml-[1ch] flex">
              <AsciiJunction className="w-[1ch] shrink-0 bg-background text-center text-ascii-soft" />
              <AsciiRule className="flex-1" />
            </div>
          </header>
          <div className="flex flex-1 flex-col overflow-y-auto">
            <div className="flex-1">{children}</div>
            <SiteFooter className="mt-[2lh]" />
          </div>
        </SidebarInset>
      </SidebarProvider>
      {/* Junctions where the header rule row meets the frame's side
          borders — same text-row geometry as the rule (h-15 offset,
          20px line) over the frame's 1ch border columns. */}
      <AsciiJunction className="absolute top-[3lh] -left-[1ch] z-10 h-[1lh] w-[1ch] bg-background text-center text-ascii-soft text-sm" />
      <AsciiJunction className="absolute top-[3lh] -right-[1ch] z-10 h-[1lh] w-[1ch] bg-background text-center text-ascii-soft text-sm" />
    </div>
  );
}

export { SiteShell };
