import type { Metadata } from "next";
import Link from "next/link";
import { CopyMarkdownButton } from "@/components/docs/copy-markdown-button";
import { DocsPager } from "@/components/docs/docs-pager";
import { docsNav } from "@/content/docs/manifest";
import { buildDocsIndexMarkdown, getDocsPager } from "@/lib/docs";

export const metadata: Metadata = {
  description: "Documentation for the 8bit component library.",
  title: "Docs",
};

export default function DocsIndexPage() {
  const { next, prev } = getDocsPager("/docs");
  const markdown = buildDocsIndexMarkdown();

  return (
    <article className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-6 py-10">
      <header className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="font-medium text-3xl tracking-tight">Introduction</h1>
          <p className="text-muted-foreground">
            8bit is a collection of pixel-cornered, retro-styled components for
            shadcn/ui, built on Base UI. Pick a component from the sidebar to
            see its documentation and examples.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <CopyMarkdownButton markdown={markdown} />
        </div>
      </header>
      <section className="flex flex-col gap-3">
        <h2 className="font-medium text-muted-foreground text-sm">
          Components
        </h2>
        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {docsNav.map((doc) => (
            <li key={doc.slug}>
              <Link
                className="text-sm underline-offset-4 hover:underline"
                href={`/docs/${doc.slug}`}
              >
                {doc.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <DocsPager next={next} prev={prev} />
    </article>
  );
}
