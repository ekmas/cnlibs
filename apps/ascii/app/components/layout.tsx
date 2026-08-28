import Link from "next/link";

import { AppSidebar } from "@/components/ascii/app-sidebar";
import { AsciiRule, AsciiVRule } from "@/components/ascii/ascii-box";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function ComponentsLayout({
  children,
}: LayoutProps<"/components">) {
  return (
    <div className="relative min-h-0 flex-1">
      <SidebarProvider>
        <AppSidebar />
        {/* Divider column. The fixed "+" glyphs escape the layout's
            overflow clipping to land on the frame's top/bottom border
            rows; their horizontal position tracks the column. */}
        <div className="flex flex-col">
          <span
            aria-hidden
            className="fixed top-[calc((100dvh-var(--frame-h))/2)] w-[1ch] select-none text-center text-ascii-soft leading-none"
          >
            +
          </span>
          <AsciiVRule tone="soft" className="flex-1" />
          <span
            aria-hidden
            className="fixed bottom-[calc((100dvh-var(--frame-h))/2)] w-[1ch] select-none text-center text-ascii-soft leading-none"
          >
            +
          </span>
        </div>
        <SidebarInset>
          <header className="flex flex-col">
            <div className="flex h-[3lh] items-center gap-[3ch] px-[2ch] font-mono text-sm">
              <nav className="flex items-center gap-[3ch]">
                <Link
                  href="/components"
                  className="text-ascii-soft outline-none hover:text-primary focus-visible:text-primary"
                >
                  Docs
                </Link>
                <Link
                  href="/components"
                  className="text-ascii-soft outline-none hover:text-primary focus-visible:text-primary"
                >
                  Components
                </Link>
                <Link
                  href="#"
                  className="text-ascii-soft outline-none hover:text-primary focus-visible:text-primary"
                >
                  Theme
                </Link>
              </nav>
              <div className="ml-auto flex items-center gap-[2ch]">
                <button
                  type="button"
                  className="select-none text-ascii-comment outline-none hover:text-primary focus-visible:text-primary"
                >
                  [ search ]
                </button>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ascii-soft outline-none hover:text-primary focus-visible:text-primary"
                >
                  Github
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ascii-soft outline-none hover:text-primary focus-visible:text-primary"
                >
                  X
                </a>
              </div>
            </div>
            {/* Bridge 1ch left across the sidebar divider column so the
                junction "+" sits in the same text row as the dashes. */}
            <div aria-hidden className="-ml-[1ch] flex">
              <span className="w-[1ch] shrink-0 select-none bg-background text-center text-ascii-soft">
                +
              </span>
              <AsciiRule className="flex-1" />
            </div>
          </header>
          <div className="flex-1 overflow-y-auto">{children}</div>
        </SidebarInset>
      </SidebarProvider>
      {/* Junctions where the header rule row meets the frame's side
          borders — same text-row geometry as the rule (h-15 offset,
          20px line) over the frame's 1ch border columns. */}
      <span
        aria-hidden
        className="absolute top-[3lh] -left-[1ch] z-10 h-[1lh] w-[1ch] select-none bg-background text-center text-ascii-soft text-sm"
      >
        +
      </span>
      <span
        aria-hidden
        className="absolute top-[3lh] -right-[1ch] z-10 h-[1lh] w-[1ch] select-none bg-background text-center text-ascii-soft text-sm"
      >
        +
      </span>
    </div>
  );
}
