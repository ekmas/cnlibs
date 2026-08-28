import * as React from "react";

import { AsciiEdge, AsciiVRule } from "@/components/ascii/ascii-box";
import { cn } from "@/lib/utils";

function Textarea({
  className,
  chWidth = 34,
  rows = 2,
  ...props
}: React.ComponentProps<"textarea"> & { chWidth?: number }) {
  return (
    <div
      data-slot="textarea-frame"
      className="group/textarea inline-flex flex-col font-mono text-sm text-primary select-none"
      style={{ width: `${chWidth}ch` }}
    >
      <AsciiEdge
        edge="top"
        width={chWidth}
        className="text-primary/60 group-focus-within/textarea:text-primary"
      />
      <div className="relative flex items-stretch">
        {/* Side rules are absolutely positioned so their filler can't set
         * the row's height (the textarea's own `rows` stays in charge). */}
        <AsciiVRule
          side="left"
          className="pointer-events-none absolute inset-y-0 left-0 group-focus-within/textarea:text-primary"
        />
        <textarea
          data-slot="textarea"
          rows={rows}
          className={cn(
            "mx-[2ch] min-w-0 flex-1 resize-none bg-transparent py-0 text-sm text-primary outline-none placeholder:text-muted-foreground disabled:pointer-events-none disabled:opacity-50",
            className
          )}
          {...props}
        />
        <AsciiVRule
          side="right"
          className="pointer-events-none absolute inset-y-0 right-0 group-focus-within/textarea:text-primary"
        />
      </div>
      <AsciiEdge
        edge="bottom"
        width={chWidth}
        className="text-primary/60 group-focus-within/textarea:text-primary"
      />
    </div>
  );
}

export { Textarea };
