import Link from "next/link";

import { cn } from "@/lib/utils";

/** "ascii.cnlibs.com" — the site name, a home link plus the cnlibs
 * link. Lives in the sidebar header on wide screens and in the top bar
 * once the sidebar is hidden. */
function Brand({ className }: { className?: string }) {
  return (
    <div className={cn("font-heading text-sm tracking-[0.08em]", className)}>
      <Link className="text-primary" href="/">
        ascii
      </Link>
      <span className="text-ascii-comment">.</span>
      <a
        className="font-base text-ascii-soft"
        href="https://cnlibs.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        cnlibs.com
      </a>
    </div>
  );
}

export { Brand };
