import type { Metadata } from "next";
import Link from "next/link";
import { DocsPager } from "@/components/docs/docs-pager";
import { DocsShell } from "@/components/docs/docs-shell";
import { docsNav } from "@/content/docs/manifest";
import { getDocsPager } from "@/lib/docs";

const TITLE = "Components";
const DESCRIPTION = "Every component in the 8bit registry.";

export const metadata: Metadata = {
  description: DESCRIPTION,
  title: TITLE,
};

export default function DocsComponentsPage() {
  const { next, prev } = getDocsPager("/docs/components");

  return (
    <DocsShell>
      <header className="flex flex-col gap-2">
        <h1 className="font-medium text-3xl tracking-tight">{TITLE}</h1>
        <p className="text-base text-muted-foreground leading-relaxed">
          {DESCRIPTION}
        </p>
      </header>
      <section className="flex flex-col gap-3">
        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {docsNav.map((doc) => (
            <li key={doc.slug}>
              <Link
                className="px-underline text-base"
                href={`/docs/${doc.slug}`}
              >
                {doc.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <DocsPager next={next} prev={prev} />
    </DocsShell>
  );
}
