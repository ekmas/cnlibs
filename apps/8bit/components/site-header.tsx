"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { DocsSearch } from "@/components/docs/docs-search";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  {
    href: "/docs",
    isActive: (pathname: string) => pathname === "/docs",
    label: "Docs",
  },
  {
    href: "/docs/accordion",
    isActive: (pathname: string) => pathname.startsWith("/docs/"),
    label: "Components",
  },
  {
    href: "/theme",
    isActive: (pathname: string) => pathname === "/theme",
    label: "Theme",
  },
  {
    href: "/charts",
    isActive: (pathname: string) => pathname === "/charts",
    label: "Charts",
  },
];

const EXTERNAL_LINKS = [
  { href: "https://cnlibs.com", label: "cnlibs" },
  {
    href: "https://github.com/ekmas/cnlibs/tree/main/apps/8bit",
    label: "GitHub",
  },
  { href: "https://x.com/ekmas", label: "X" },
];

export function SiteHeader({
  leading,
  className,
}: {
  leading?: ReactNode;
  className?: string;
}) {
  const pathname = usePathname();

  return (
    <header
      className={cn(
        "flex h-14 w-full shrink-0 items-center gap-4 border-b bg-background px-4 sm:px-6",
        className
      )}
    >
      {leading}
      <Link className="font-medium tracking-tight" href="/">
        8bit
      </Link>
      <nav className="flex items-center gap-4 text-sm">
        {NAV_LINKS.map((link) => (
          <Link
            className={cn(
              "text-muted-foreground transition-colors hover:text-foreground",
              link.isActive(pathname) && "text-foreground"
            )}
            href={link.href}
            key={link.label}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <DocsSearch />
      <nav className="hidden items-center gap-4 text-muted-foreground text-sm sm:flex">
        {EXTERNAL_LINKS.map((link) => (
          <a
            className="transition-colors hover:text-foreground"
            href={link.href}
            key={link.label}
            rel="noopener noreferrer"
            target="_blank"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <ThemeToggle />
    </header>
  );
}
