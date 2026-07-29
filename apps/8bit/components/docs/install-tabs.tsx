"use client";

import { useCallback } from "react";
import { CopyButton } from "@/components/docs/copy-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { type PackageManager, usePackageManager } from "@/lib/package-manager";
import { cn } from "@/lib/utils";

const RUNNERS: Record<PackageManager, (bin: string) => string> = {
  pnpm: (bin) => `pnpm dlx ${bin}`,
  npm: (bin) => `npx ${bin}`,
  yarn: (bin) => `yarn dlx ${bin}`,
  bun: (bin) => `bunx --bun ${bin}`,
};

const RUNNER_IDS = Object.keys(RUNNERS) as PackageManager[];
const LAST_RUNNER_INDEX = RUNNER_IDS.length - 1;

const COMPACT_TRIGGER_CLASSNAME =
  "group-data-[variant=line]/tabs-list:py-1 group-data-[variant=line]/tabs-list:text-sm sm:group-data-[variant=line]/tabs-list:text-xs group-data-[variant=line]/tabs-list:[--pixel-size:3px]";

export function InstallTabs({
  url,
  subcommand = "add",
  unrounded = false,
  compact = false,
}: {
  url: string;
  subcommand?: "add" | "init";
  /** True when these tabs sit nested under another tab (e.g. the "Shadcn
   * CLI" tab in InstallSection) — none of the four triggers round, not even
   * the outer first/last ones, since the outer tab strip already owns the
   * card's top corners. */
  unrounded?: boolean;
  /** Shrinks the trigger padding/text/pixel-size, for tighter spots like the
   * theme install dialog where two of these strips stack in one popup. */
  compact?: boolean;
}) {
  const [packageManager, setPackageManager] = usePackageManager();
  const handleValueChange = useCallback(
    (value: unknown) => setPackageManager(value as PackageManager),
    [setPackageManager]
  );

  return (
    <Tabs onValueChange={handleValueChange} value={packageManager}>
      <TabsList variant="line">
        {RUNNER_IDS.map((id, index) => (
          <TabsTrigger
            className={cn(
              compact
                ? COMPACT_TRIGGER_CLASSNAME
                : "group-data-[variant=line]/tabs-list:text-xs sm:group-data-[variant=line]/tabs-list:text-sm"
            )}
            key={id}
            unrounded={
              unrounded || (index !== 0 && index !== LAST_RUNNER_INDEX)
            }
            value={id}
          >
            {id}
          </TabsTrigger>
        ))}
      </TabsList>
      {Object.entries(RUNNERS).map(([id, runWith]) => {
        const command = runWith(`shadcn@latest ${subcommand} ${url}`);
        return (
          <TabsContent key={id} value={id}>
            <div className="mx-0.5 flex items-center gap-2 bg-muted/50 px-border-b-md px-rounded-b-md py-1 pr-1 pl-4 [--pixel-size:4px]">
              <code
                className={cn(
                  "min-w-0 flex-1 overflow-x-auto whitespace-nowrap font-mono text-sm",
                  compact && "text-xs"
                )}
              >
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
