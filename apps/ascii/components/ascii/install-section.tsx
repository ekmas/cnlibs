import { CodeBlock } from "@/components/ascii/code-block";
import { InstallTabs } from "@/components/ascii/install-tabs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

/** The Installation section: install through the shadcn CLI (with a
 * package-manager strip) or copy the component's source by hand. */
function InstallSection({
  slug,
  manualCode,
}: {
  slug: string;
  manualCode: string | null;
}) {
  return (
    <Tabs className="w-full max-w-[80ch]" defaultValue="cli" variant="boxed">
      <TabsList>
        <TabsTrigger value="cli">shadcn cli</TabsTrigger>
        <TabsTrigger value="manual">manual</TabsTrigger>
      </TabsList>
      {/* The package-manager strip is a boxed strip of its own, so this
       * tab's content starts one row down to let the outer strip close
       * instead of overlapping the inner strip's top border. */}
      <TabsContent className="pt-[1lh]" frame={false} value="cli">
        <InstallTabs className="max-w-none" item={slug} />
      </TabsContent>
      <TabsContent frame={false} value="manual">
        <CodeBlock
          className="max-w-none"
          code={manualCode ?? "// component source not available"}
        />
      </TabsContent>
    </Tabs>
  );
}

export { InstallSection };
