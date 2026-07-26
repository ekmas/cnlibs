import { CodeBlock } from "@/components/docs/code-block";
import { InstallTabs } from "@/components/docs/install-tabs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SITE_URL } from "@/lib/site";

export function InstallSection({
  manualCode,
  slug,
}: {
  manualCode: string | null;
  slug: string;
}) {
  return (
    <Tabs defaultValue="cli">
      <TabsList variant="line">
        <TabsTrigger value="cli">Shadcn CLI</TabsTrigger>
        <TabsTrigger value="manual">Manual</TabsTrigger>
      </TabsList>
      <TabsContent value="cli">
        <InstallTabs unrounded url={`${SITE_URL}/r/${slug}.json`} />
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
