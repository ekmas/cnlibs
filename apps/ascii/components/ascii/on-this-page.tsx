"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

type TocItem = { id: string; title: string };

/** The "on this page" list beside a docs page. It reads the rendered
 * `h2[id]` headings out of the article after mount (so it works for
 * MDX and component pages alike) and tracks the one in view. */
function OnThisPage({ articleId }: { articleId: string }) {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const article = document.getElementById(articleId);
    if (!article) {
      return;
    }
    const headings = [...article.querySelectorAll<HTMLElement>("h2[id]")];
    setItems(
      headings.map((heading) => ({
        id: heading.id,
        title: heading.dataset.title ?? heading.textContent ?? heading.id,
      }))
    );
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
      { rootMargin: "0% 0% -70% 0%" }
    );
    for (const heading of headings) {
      observer.observe(heading);
    }
    return () => observer.disconnect();
  }, [articleId]);

  if (items.length === 0) {
    return null;
  }

  return (
    <nav
      aria-label="On this page"
      className="sticky top-0 hidden w-[32ch] shrink-0 flex-col self-start py-[1lh] font-mono text-sm xl:flex"
    >
      <span className="text-ascii-comment uppercase tracking-[0.08em]">
        On this page
      </span>
      <ul className="mt-[1lh] flex flex-col">
        {items.map((item) => {
          const active = item.id === activeId;
          return (
            <li className="flex gap-[1ch]" key={item.id}>
              <span
                aria-hidden
                className={cn(
                  "w-[1ch] shrink-0 select-none text-primary",
                  active ? "opacity-100" : "opacity-0"
                )}
              >
                &gt;
              </span>
              <a
                className={cn(
                  "min-w-0 truncate outline-none hover:text-primary focus-visible:text-primary",
                  active ? "text-primary" : "text-ascii-soft"
                )}
                href={`#${item.id}`}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export { OnThisPage };
