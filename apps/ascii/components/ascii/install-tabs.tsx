"use client";

import * as React from "react";

import { useAsciiChars } from "@/components/ascii/ascii-theme";
import { CodeBlock } from "@/components/ascii/code-block";
import { bottomBorder, topBorder, vGlyph } from "@/lib/ascii";
import { cn } from "@/lib/utils";

const MANAGERS = [
  {
    id: "pnpm",
    command: (name: string) => `pnpm dlx shadcn@latest add ${name}`,
  },
  { id: "npm", command: (name: string) => `npx shadcn@latest add ${name}` },
  {
    id: "yarn",
    command: (name: string) => `yarn dlx shadcn@latest add ${name}`,
  },
  { id: "bun", command: (name: string) => `bunx shadcn@latest add ${name}` },
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

/** Install command for a component, tabbed per package manager. The
 * tab row sits directly on the snippet: the tabs' bottom border row
 * overlaps the code block's top border. */
function InstallTabs({ component }: { component: string }) {
  const [active, setActive] = React.useState<ManagerId>("pnpm");
  const manager = MANAGERS.find((m) => m.id === active) ?? MANAGERS[0];

  return (
    <div className="w-full max-w-[80ch] font-mono text-sm">
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
      <CodeBlock code={manager.command(component)} />
    </div>
  );
}

export { InstallTabs };
