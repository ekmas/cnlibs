import { notFound } from "next/navigation";
import { CodeBlock } from "@/components/ascii/code-block";
import { DocsPager } from "@/components/ascii/docs-pager";
import { InstallSection } from "@/components/ascii/install-section";
import { OnThisPage } from "@/components/ascii/on-this-page";
import { UsageSection } from "@/components/ascii/usage-section";
import { VariantSection } from "@/components/ascii/variant-section";
import { componentDocs } from "@/content/components";
import { getComponentSource, usageImports } from "@/lib/docs";
import { getPager } from "@/lib/docs-pager";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(componentDocs).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/components/[slug]">) {
  const { slug } = await params;
  const doc = componentDocs[slug];
  return { title: doc ? `${doc.title} — ascii` : "ascii" };
}

export default async function ComponentPage({
  params,
}: PageProps<"/components/[slug]">) {
  const { slug } = await params;
  const doc = componentDocs[slug];

  if (!doc) {
    notFound();
  }

  const { prev, next } = getPager(`/components/${slug}`);
  const [hero, ...variants] = doc.sections;
  const manualCode = await getComponentSource(slug);
  const usageCode = hero?.code ?? null;
  const imports = usageCode ? await usageImports(usageCode) : null;

  return (
    <div className="flex items-start gap-[4ch] px-[2ch]">
      <div className="flex min-w-0 max-w-4xl flex-1 flex-col py-[1lh]">
        <header className="flex flex-col">
          <h1 className="mb-[1lh] font-heading text-primary text-sm tracking-tight">
            {doc.title}
          </h1>
          <p className="max-w-2xl text-ascii-soft text-sm">{doc.description}</p>
          {doc.links?.shadcn ? (
            <a
              className="text-ascii-comment text-sm outline-none hover:text-primary focus-visible:text-primary"
              href={doc.links.shadcn}
              rel="noopener noreferrer"
              target="_blank"
            >
              {"[ shadcn/ui docs ]"}
            </a>
          ) : null}
        </header>

        <div className="flex flex-col gap-[2lh] pt-[1lh]" id="docs-article">
          {hero ? <VariantSection showHeader={false} variant={hero} /> : null}

          <section className="flex flex-col gap-[1lh]" id="installation">
            <h2
              className="scroll-mt-[1lh] font-heading text-ascii-comment text-sm uppercase tracking-[0.08em]"
              data-title="installation"
              id="installation"
            >
              ## installation
            </h2>
            <InstallSection manualCode={manualCode} slug={slug} />
          </section>

          {doc.setup ? (
            <section className="flex flex-col gap-[1lh]" id="setup">
              <h2
                className="scroll-mt-[1lh] font-heading text-ascii-comment text-sm uppercase tracking-[0.08em]"
                data-title="setup"
                id="setup"
              >
                ## setup
              </h2>
              <p className="max-w-[80ch] text-ascii-soft text-sm">
                {doc.setup.description}
              </p>
              <CodeBlock code={doc.setup.code} />
            </section>
          ) : null}

          {usageCode ? (
            <UsageSection imports={imports} snippet={usageCode} />
          ) : null}

          {variants.map((variant) => (
            <VariantSection key={variant.title} variant={variant} />
          ))}

          <DocsPager next={next} prev={prev} />
        </div>
      </div>
      <OnThisPage articleId="docs-article" />
    </div>
  );
}
