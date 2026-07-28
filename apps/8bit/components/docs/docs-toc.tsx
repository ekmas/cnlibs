"use client";

import { ExternalLinkIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface TocItem {
  id: string;
  title: string;
}

const ISSUE_URL = "https://github.com/ekmas/cnlibs/issues/new";

/** Active-item indicator: an 8-bit dot centered on the rail, matching
 * DocsSidebar's ActiveDot. */
function ActiveDot() {
  return (
    <span
      aria-hidden
      className="absolute top-1/2 -left-4 z-10 size-2.5 shrink-0 -translate-x-1/2 -translate-y-1/2 bg-primary px-rounded-sm [--pixel-size:2px]"
    />
  );
}

export function DocsToc({ items, title }: { items: TocItem[]; title: string }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => element !== null);

    if (headings.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0% -70% 0%" }
    );

    for (const heading of headings) {
      observer.observe(heading);
    }

    return () => observer.disconnect();
  }, [items]);

  const issueUrl = `${ISSUE_URL}?${new URLSearchParams({
    title: `${title} component`,
  })}`;

  return (
    <nav className="code-scrollbar flex h-full flex-col gap-4 overflow-y-auto text-sm">
      <div className="flex flex-col gap-2 pl-2">
        <p className="font-medium text-base text-muted-foreground tracking-wide">
          On This Page
        </p>
        <ul className="flex flex-col gap-1.5 border-border border-l pl-4">
          {items.map((item) => (
            <li className="relative" key={item.id}>
              {activeId === item.id && <ActiveDot />}
              <a
                className={cn(
                  "text-muted-foreground transition-colors hover:text-foreground",
                  activeId === item.id && "font-medium text-foreground"
                )}
                href={`#${item.id}`}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <Button
        className="w-full shrink-0"
        nativeButton={false}
        render={<a href={issueUrl} rel="noopener noreferrer" target="_blank" />}
        size="sm"
        variant="outline"
      >
        Report an issue
        <ExternalLinkIcon data-icon="inline-end" />
      </Button>
    </nav>
  );
}
