import { ExternalLinkIcon } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocsPager } from "@/components/docs/docs-pager";
import { DocsToc } from "@/components/docs/docs-toc";
import { InstallSection } from "@/components/docs/install-section";
import { UsageSection } from "@/components/docs/usage-section";
import { VariantSection } from "@/components/docs/variant-section";
import { Button } from "@/components/ui/button";
import { docsNav } from "@/content/docs/manifest";
import { docs } from "@/content/docs/registry";
import { getComponentSource, getDocsPager } from "@/lib/docs";

interface DocPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return docsNav.map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({
  params,
}: DocPageProps): Promise<Metadata> {
  const { slug } = await params;
  const load = docs[slug];
  if (!load) {
    return {};
  }
  const doc = await load();
  return { description: doc.description, title: doc.title };
}

export default async function DocPage({ params }: DocPageProps) {
  const { slug } = await params;
  const load = docs[slug];
  if (!load) {
    notFound();
  }
  const doc = await load();
  const { next, prev } = getDocsPager(`/docs/${slug}`);
  const manualCode = await getComponentSource(slug);
  const [firstVariant, ...restVariants] = doc.variants;
  const usageCode = firstVariant?.code;
  const tocItems = [
    { id: "installation", title: "Installation" },
    ...(usageCode ? [{ id: "usage", title: "Usage" }] : []),
    ...restVariants.map((variant) => ({
      id: variant.id,
      title: variant.title,
    })),
  ];

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-1 items-start gap-10 px-6 py-10">
      <article className="mx-auto flex w-full min-w-0 max-w-3xl flex-col gap-10">
        <header className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="font-medium text-3xl tracking-tight">{doc.title}</h1>
            <p className="text-muted-foreground">{doc.description}</p>
          </div>
          {doc.links?.shadcn ? (
            <div className="flex flex-wrap items-center gap-2">
              <Button
                nativeButton={false}
                render={
                  <a
                    href={doc.links.shadcn}
                    rel="noopener noreferrer"
                    target="_blank"
                  />
                }
                size="sm"
                variant="outline"
              >
                shadcn/ui docs
                <ExternalLinkIcon data-icon="inline-end" />
              </Button>
            </div>
          ) : null}
        </header>
        {firstVariant ? (
          <VariantSection showHeader={false} variant={firstVariant} />
        ) : null}
        <section className="flex scroll-mt-20 flex-col gap-3" id="installation">
          <h2 className="font-medium text-xl tracking-tight">Installation</h2>
          <InstallSection manualCode={manualCode} slug={slug} />
        </section>
        {usageCode ? <UsageSection code={usageCode} /> : null}
        {restVariants.map((variant) => (
          <VariantSection key={variant.id} variant={variant} />
        ))}
        <DocsPager next={next} prev={prev} />
      </article>
      {tocItems.length > 1 ? (
        <aside className="sticky top-24 hidden w-48 shrink-0 xl:block">
          <DocsToc items={tocItems} />
        </aside>
      ) : null}
    </div>
  );
}
