import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemePresetSync } from "@/components/theme-preset-sync";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toast";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

import localFont from "next/font/local";

const myFont = localFont({
  src: "../public/GeistPixel.ttf",
  variable: "--font-pixel",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "8bit/ui",
    template: "%s · 8bit/ui",
  },
  description: "8-bit styled shadcn/ui components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
        myFont.variable
      )}
      lang="en"
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider attribute="class" disableTransitionOnChange enableSystem>
          <ThemePresetSync />
          <TooltipProvider>
            <div className="flex flex-1">
              <div className="flex min-w-0 flex-1 flex-col">{children}</div>
            </div>
          </TooltipProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
