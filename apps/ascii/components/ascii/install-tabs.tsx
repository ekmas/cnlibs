"use client";

import * as React from "react";

import { useAsciiChars } from "@/components/ascii/ascii-chars";
import { CodeBlock } from "@/components/ascii/code-block";
import { useSiteUrl } from "@/components/ascii/site-url";
import { bottomBorder, topBorder, vGlyph } from "@/lib/ascii";
import { cn } from "@/lib/utils";

const MANAGERS = [
  { id: "pnpm", run: (bin: string) => `pnpm dlx ${bin}` },
  { id: "npm", run: (bin: string) => `npx ${bin}` },
  { id: "yarn", run: (bin: string) => `yarn dlx ${bin}` },
  { id: "bun", run: (bin: string) => `bunx --bun ${bin}` },
] as const;

type ManagerId = (typeof MANAGERS)[number]["id"];

/** One boxed tab, drawn like a 3-row button. Its bottom border lands
 * on the code block's top border via the parent's -mb-[1lh]. */
function InstallTab({
  id,
  active,
  onSelect,
}: {
  id: string;
  active: boolean;
  onSelect: () => void;
}) {
  const chars = useAsciiChars();
  const width = id.length + 4;
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onSelect}
      className={cn(
        "-ml-[1ch] flex select-none flex-col whitespace-pre outline-none first:ml-0",
        active
          ? "z-10 text-primary"
          : "text-ascii-comment hover:text-foreground focus-visible:text-foreground"
      )}
    >
      <span aria-hidden>{topBorder(width, undefined, chars)}</span>
      <span>{`${vGlyph(chars.left)} ${id} ${vGlyph(chars.right)}`}</span>
      <span aria-hidden>{bottomBorder(width, chars)}</span>
    </button>
  );
}

/** Install command for a registry item, tabbed per package manager.
 * `item` is the path under /r — "button", "themes/phosphor". The tab
 * row sits directly on the snippet: the tabs' bottom border row
 * overlaps the code block's top border. */
function InstallTabs({
  item,
  subcommand = "add",
  className,
}: {
  item: string;
  subcommand?: "add" | "init";
  className?: string;
}) {
  const siteUrl = useSiteUrl();
  const [active, setActive] = React.useState<ManagerId>("pnpm");
  const manager = MANAGERS.find((m) => m.id === active) ?? MANAGERS[0];
  const command = manager.run(
    `shadcn@latest ${subcommand} ${siteUrl}/r/${item}.json`
  );

  return (
    <div className={cn("w-full max-w-[80ch] font-mono text-sm", className)}>
      <div role="tablist" className="relative z-10 -mb-[1lh] flex w-fit">
        {MANAGERS.map((m) => (
          <InstallTab
            key={m.id}
            id={m.id}
            active={m.id === active}
            onSelect={() => setActive(m.id)}
          />
        ))}
      </div>
      <CodeBlock code={command} className="max-w-none" />
    </div>
  );
}

export { InstallTabs };
