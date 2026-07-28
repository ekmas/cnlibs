import { CodeBlock } from "@/components/docs/code-block";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { DocVariant } from "@/content/docs/registry";

export function VariantSection({
  showHeader = true,
  variant,
}: {
  showHeader?: boolean;
  variant: DocVariant;
}) {
  return (
    <section className="flex scroll-mt-20 flex-col gap-3" id={variant.id}>
      {showHeader ? (
        <>
          <h2 className="font-heading font-weight-heading text-xl tracking-tight">
            {variant.title}
          </h2>
          {variant.description ? (
            <p className="text-muted-foreground text-sm">
              {variant.description}
            </p>
          ) : null}
        </>
      ) : null}
      <Tabs defaultValue="preview">
        <TabsList variant="line">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview">
          <div className="mx-0.5 flex min-h-36 flex-wrap items-center justify-center gap-4 overflow-x-auto p-6 px-border-b-md px-rounded-b-md [--pixel-size:5px] sm:p-10">
            {variant.preview ?? (
              <span className="text-muted-foreground text-sm">
                Example coming soon
              </span>
            )}
          </div>
        </TabsContent>
        <TabsContent value="code">
          {variant.code ? (
            <CodeBlock code={variant.code} roundedTop={false} />
          ) : (
            <div className="mx-0.5 flex min-h-36 items-center justify-center p-10 px-border-b-md px-rounded-b-md [--pixel-size:5px]">
              <span className="text-muted-foreground text-sm">
                Code coming soon
              </span>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </section>
  );
}
