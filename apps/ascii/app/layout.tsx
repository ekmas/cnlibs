import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import {
  AsciiJunction,
  AsciiRule,
  AsciiVRule,
} from "@/components/ascii/ascii-box";
import { AsciiThemeProvider } from "@/components/ascii/ascii-theme";
import { SiteUrlProvider } from "@/components/ascii/site-url";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ASCII_FONT_VAR, ASCII_THEME_STORAGE_KEY } from "@/lib/ascii-theme";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "ascii — shadcn component library",
  description:
    "A shadcn/ui component library recreated as a monospace, ASCII-bordered terminal aesthetic.",
};

/* Applies the persisted theme's colors and font before first paint so
 * a customised palette doesn't flash the defaults. Mirrors the
 * provider's applyColors/applyFont in components/ascii/ascii-theme.tsx
 * (kept dependency-free and tiny since it runs inline, blocking). */
const themeBootScript = `(function(){try{var t=JSON.parse(localStorage.getItem(${JSON.stringify(ASCII_THEME_STORAGE_KEY)}));if(!t)return;var r=document.documentElement;if(t.colors)for(var k in t.colors)if(/^--[a-z-]+$/.test(k)&&typeof t.colors[k]==="string")r.style.setProperty(k,t.colors[k]);if(typeof t.font==="string"&&t.font.trim()){var f=t.font.trim().replace(/"/g,"");r.style.setProperty(${JSON.stringify(ASCII_FONT_VAR)},'"'+f+'", ui-monospace, monospace')}}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  /* suppressHydrationWarning: the boot script above sets the persisted
   * palette's custom properties as an inline style on <html> before
   * React runs, so the server markup (no style) never matches — that
   * is the intended pre-paint theme, not a bug. Only <html>'s own
   * attributes are suppressed; children still hydrate strictly. */
  return (
    <html
      className={`${ibmPlexMono.variable} h-full antialiased`}
      lang="en"
      suppressHydrationWarning
    >
      <head>
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: static, build-time string — see themeBootScript */}
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body className="flex h-dvh items-center justify-center overflow-hidden bg-background">
        <AsciiThemeProvider>
          <div className="flex h-(--frame-h) w-[calc(100dvw-20ch)] max-w-[208ch] flex-col overflow-hidden font-mono text-primary/60 [--frame-h:min(calc(100dvh-20ch),108ch)]">
            <div aria-hidden className="flex shrink-0 select-none leading-none">
              <AsciiJunction />
              <AsciiRule line="top" tone="soft" className="flex-1" />
              <AsciiJunction />
            </div>
            <div className="relative min-h-0 flex-1">
              <AsciiVRule
                tone="soft"
                side="left"
                className="absolute inset-y-0 left-0"
              />
              <div className="flex h-full min-w-0 flex-col overflow-hidden px-[1ch] text-foreground">
                <SiteUrlProvider value={SITE_URL}>
                  <TooltipProvider>{children}</TooltipProvider>
                </SiteUrlProvider>
              </div>
              <AsciiVRule
                tone="soft"
                side="right"
                className="absolute inset-y-0 right-0"
              />
            </div>
            <div aria-hidden className="flex shrink-0 select-none leading-none">
              <AsciiJunction />
              <AsciiRule line="bottom" tone="soft" className="flex-1" />
              <AsciiJunction />
            </div>
          </div>
        </AsciiThemeProvider>
      </body>
    </html>
  );
}
