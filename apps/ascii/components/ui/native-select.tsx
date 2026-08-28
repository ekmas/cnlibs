import * as React from "react";

import { AsciiEdge, AsciiSide } from "@/components/ascii/ascii-box";
import { cn } from "@/lib/utils";

function NativeSelect({
  className,
  chWidth = 28,
  children,
  ...props
}: React.ComponentProps<"select"> & { chWidth?: number }) {
  return (
    <div
      data-slot="native-select-frame"
      className="group/native-select inline-flex flex-col font-mono text-sm text-primary select-none"
      style={{ width: `${chWidth}ch` }}
    >
      <AsciiEdge
        edge="top"
        width={chWidth}
        className="text-primary/60 group-focus-within/native-select:text-primary"
      />
      <div className="flex items-stretch">
        <AsciiSide
          side="left"
          className="shrink-0 text-primary/60 group-focus-within/native-select:text-primary"
        />
        <select
          data-slot="native-select"
          className={cn(
            "min-w-0 flex-1 appearance-none bg-transparent px-[2ch] text-sm text-primary outline-none disabled:pointer-events-none disabled:opacity-50",
            "[&>option]:bg-popover [&>option]:text-foreground",
            className
          )}
          {...props}
        >
          {children}
        </select>
        <span
          aria-hidden
          className="shrink-0 px-[2ch] text-primary select-none"
        >
          v
        </span>
        <AsciiSide
          side="right"
          className="shrink-0 text-primary/60 group-focus-within/native-select:text-primary"
        />
      </div>
      <AsciiEdge
        edge="bottom"
        width={chWidth}
        className="text-primary/60 group-focus-within/native-select:text-primary"
      />
    </div>
  );
}

export { NativeSelect };
