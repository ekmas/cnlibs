import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import { AsciiRule, AsciiVRule } from "@/components/ascii/ascii-box";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "ASCII UI — shadcn component library",
  description:
    "A shadcn/ui component library recreated as a monospace, ASCII-bordered terminal aesthetic.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${ibmPlexMono.variable} h-full antialiased`}>
      <body className="flex h-dvh items-center justify-center overflow-hidden bg-background">
        <div className="flex h-(--frame-h) w-[calc(100dvw-20ch)] max-w-[208ch] flex-col overflow-hidden font-mono text-primary/60 [--frame-h:min(calc(100dvh-20ch),108ch)]">
          <div aria-hidden className="flex shrink-0 select-none leading-none">
            <span>+</span>
            <AsciiRule tone="soft" className="flex-1" />
            <span>+</span>
          </div>
          <div className="relative min-h-0 flex-1">
            <AsciiVRule tone="soft" className="absolute inset-y-0 left-0" />
            <div className="flex h-full min-w-0 flex-col overflow-hidden px-[1ch] text-foreground">
              <TooltipProvider>{children}</TooltipProvider>
            </div>
            <AsciiVRule tone="soft" className="absolute inset-y-0 right-0" />
          </div>
          <div aria-hidden className="flex shrink-0 select-none leading-none">
            <span>+</span>
            <AsciiRule tone="soft" className="flex-1" />
            <span>+</span>
          </div>
        </div>
      </body>
    </html>
  );
}
