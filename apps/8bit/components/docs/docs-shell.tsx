import type { ReactNode } from "react";

/** Shared page shell for every docs route (getting-started and component
 * docs alike) — same max-w-6xl/max-w-3xl wrapper and article, so both
 * systems stay pixel-identical instead of hand-copied classNames drifting
 * apart. `toc` renders as a sibling of the article (only component docs
 * pass one, for the sticky "On This Page" sidebar). */
export function DocsShell({
  children,
  toc,
}: {
  children: ReactNode;
  toc?: ReactNode;
}) {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-1 items-start gap-10 px-6 py-10">
      <article className="mx-auto flex w-full min-w-0 max-w-3xl flex-col gap-10">
        {children}
      </article>
      {toc}
    </div>
  );
}
