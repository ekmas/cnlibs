import { CodeBlock } from "@/components/ascii/code-block";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { ComponentDocSection } from "@/content/components/types";
import { slugify } from "@/lib/slug";

/** One example on a component page: Preview / Code tabs, optionally
 * under a "## title" heading with a one-line description. The first
 * example on a page renders without the heading as the hero preview. */
function VariantSection({
  variant,
  showHeader = true,
}: {
  variant: ComponentDocSection;
  showHeader?: boolean;
}) {
  const id = slugify(variant.title);

  return (
    <section className="flex flex-col gap-[1lh]" id={id}>
      {showHeader && (
        <div className="flex flex-col">
          <h2
            className="scroll-mt-[1lh] font-heading text-ascii-comment text-sm uppercase tracking-[0.08em]"
            data-title={variant.title}
            id={id}
          >
            {`## ${variant.title}`}
          </h2>
          {variant.description && (
            <p className="max-w-[80ch] text-ascii-soft text-sm">
              {variant.description}
            </p>
          )}
        </div>
      )}
      <Tabs
        className="w-full max-w-[80ch]"
        defaultValue="preview"
        variant="boxed"
      >
        <TabsList>
          <TabsTrigger value="preview">preview</TabsTrigger>
          <TabsTrigger value="code">code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview">
          <div className="flex min-h-[3lh] flex-col justify-center gap-[1lh] overflow-x-auto">
            {variant.preview}
          </div>
        </TabsContent>
        <TabsContent frame={false} value="code">
          {variant.code ? (
            <CodeBlock className="max-w-none" code={variant.code} />
          ) : (
            <CodeBlock className="max-w-none" code="// code coming soon" />
          )}
        </TabsContent>
      </Tabs>
    </section>
  );
}

export { VariantSection };
