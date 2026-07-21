import { CodeBlock } from "@/components/docs/code-block";
import { InstallTabs } from "@/components/docs/install-tabs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function InstallSection({
  manualCode,
  slug,
}: {
  manualCode: string | null;
  slug: string;
}) {
  return (
    <Tabs className="gap-0" defaultValue="cli">
      <TabsList className="group-data-horizontal/tabs:w-full" variant="line">
        <TabsTrigger
          className="py-2 text-base group-data-[variant=line]/tabs-list:[--pixel-size:5px]"
          value="cli"
        >
          Shadcn CLI
        </TabsTrigger>
        <TabsTrigger
          className="py-2 text-base group-data-[variant=line]/tabs-list:[--pixel-size:5px]"
          value="manual"
        >
          Manual
        </TabsTrigger>
      </TabsList>
      <TabsContent value="cli">
        <InstallTabs slug={slug} />
      </TabsContent>
      <TabsContent value="manual">
        {manualCode ? (
          <CodeBlock code={manualCode} roundedTop={false} />
        ) : (
          <p className="mx-0.5 text-muted-foreground text-sm">
            Component source not available.
          </p>
        )}
      </TabsContent>
    </Tabs>
  );
}
