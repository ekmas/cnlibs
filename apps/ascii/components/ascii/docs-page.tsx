import type * as React from "react";

import { ComponentHeader } from "@/components/ascii/component-header";
import { DocsPager } from "@/components/ascii/docs-pager";
import { OnThisPage } from "@/components/ascii/on-this-page";
import { type DocsNavEntry, docsHref } from "@/content/docs/manifest";
import { getPager } from "@/lib/docs-pager";

/** Renders a getting-started page: header from the manifest entry,
 * the MDX body, prev/next. Markdown elements are styled by the root
 * mdx-components.tsx. */
function DocsPageView({
  entry,
  children,
}: {
  entry: DocsNavEntry;
  children: React.ReactNode;
}) {
  const { prev, next } = getPager(docsHref(entry.slug));

  return (
    <div className="flex items-start gap-[4ch] px-[2ch]">
      <div className="flex min-w-0 max-w-4xl flex-1 flex-col py-[1lh]">
        <ComponentHeader description={entry.description} title={entry.title} />
        <div className="flex flex-col gap-[2lh]">
          <article
            className="flex flex-col gap-[1lh] overflow-x-auto"
            id="docs-article"
          >
            {children}
          </article>
          <DocsPager next={next} prev={prev} />
        </div>
      </div>
      <OnThisPage articleId="docs-article" />
    </div>
  );
}

export { DocsPageView };
