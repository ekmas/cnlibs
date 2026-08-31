import Link from "next/link";

import type { PagerLink } from "@/lib/docs-pager";

/** "< previous" / "next >" links at the foot of a docs page — a 1ch
 * gap always separates the arrow from the page title. */
function DocsPager({ prev, next }: { prev?: PagerLink; next?: PagerLink }) {
  if (!(prev || next)) {
    return null;
  }
  return (
    <nav
      aria-label="Docs pagination"
      className="flex w-full max-w-[80ch] flex-col font-mono"
    >
      <div className="flex items-center justify-between py-[1lh] text-sm">
        {prev ? (
          <Link
            className="text-ascii-soft outline-none hover:text-primary focus-visible:text-primary"
            href={prev.href}
          >
            {`< ${prev.title}`}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            className="text-ascii-soft outline-none hover:text-primary focus-visible:text-primary"
            href={next.href}
          >
            {`${next.title} >`}
          </Link>
        ) : (
          <span />
        )}
      </div>
    </nav>
  );
}

export { DocsPager };
