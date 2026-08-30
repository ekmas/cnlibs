import { notFound } from "next/navigation";

import { DocsPageView } from "@/components/ascii/docs-page";
import { docsNav, getDocsEntry } from "@/content/docs/manifest";

export const dynamicParams = false;

export function generateStaticParams() {
  return docsNav
    .filter((entry) => entry.slug !== "")
    .map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: PageProps<"/docs/[slug]">) {
  const { slug } = await params;
  const entry = getDocsEntry(slug);
  return {
    title: entry ? `${entry.title} — ascii` : "ascii",
    description: entry?.description,
  };
}

export default async function DocsSlugPage({
  params,
}: PageProps<"/docs/[slug]">) {
  const { slug } = await params;
  const entry = getDocsEntry(slug);

  if (!entry || entry.slug === "") {
    notFound();
  }

  const { default: Page } = await import(`@/content/docs/${entry.file}.mdx`);

  return (
    <DocsPageView entry={entry}>
      <Page />
    </DocsPageView>
  );
}
