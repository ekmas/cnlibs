"use client";

import { useCallback } from "react";
import { CopyButton } from "@/components/docs/copy-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { type PackageManager, usePackageManager } from "@/lib/package-manager";
import { SITE_URL } from "@/lib/site";

const COMMANDS: Record<PackageManager, (url: string) => string> = {
  pnpm: (url) => `pnpm dlx shadcn@latest add ${url}`,
  npm: (url) => `npx shadcn@latest add ${url}`,
  yarn: (url) => `yarn dlx shadcn@latest add ${url}`,
  bun: (url) => `bunx --bun shadcn@latest add ${url}`,
};

export function InstallTabs({ slug }: { slug: string }) {
  const [packageManager, setPackageManager] = usePackageManager();
  const url = `${SITE_URL}/r/${slug}.json`;
  const handleValueChange = useCallback(
    (value: unknown) => setPackageManager(value as PackageManager),
    [setPackageManager]
  );

  return (
    <Tabs onValueChange={handleValueChange} value={packageManager}>
      <TabsList variant="line">
        {Object.keys(COMMANDS).map((id) => (
          <TabsTrigger key={id} value={id}>
            {id}
          </TabsTrigger>
        ))}
      </TabsList>
      {Object.entries(COMMANDS).map(([id, buildCommand]) => {
        const command = buildCommand(url);
        return (
          <TabsContent key={id} value={id}>
            <div className="mx-0.5 flex items-center justify-between gap-2 overflow-x-auto bg-muted/50 px-border-b-sm px-rounded-b-sm py-1 pr-1 pl-4">
              <code className="whitespace-nowrap font-mono text-sm">
                {command}
              </code>
              <CopyButton value={command} />
            </div>
          </TabsContent>
        );
      })}
    </Tabs>
  );
}
