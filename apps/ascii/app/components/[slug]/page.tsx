import { notFound } from "next/navigation";
import { DocSection } from "@/components/ascii/component-docs";
import { ComponentHeader } from "@/components/ascii/component-header";
import { InstallTabs } from "@/components/ascii/install-tabs";
import { componentDocs } from "@/content/components";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(componentDocs).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/components/[slug]">) {
  const { slug } = await params;
  const doc = componentDocs[slug];
  return { title: doc ? `${doc.title} — ASCII UI` : "ASCII UI" };
}

export default async function ComponentPage({
  params,
}: PageProps<"/components/[slug]">) {
  const { slug } = await params;
  const doc = componentDocs[slug];

  if (!doc) {
    notFound();
  }

  return (
    <div className="flex max-w-4xl flex-col gap-[2lh] px-[2ch] py-[1lh]">
      <ComponentHeader description={doc.description} title={doc.title} />

      <DocSection title="install">
        <InstallTabs item={slug} />
      </DocSection>

      {doc.sections.map((section) => (
        <DocSection
          code={section.code}
          key={section.title}
          title={section.title}
        >
          {section.preview}
        </DocSection>
      ))}
    </div>
  );
}
