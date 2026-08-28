import * as React from "react";

import { bottomBorder, topBorder } from "@/lib/ascii";
import { cn } from "@/lib/utils";

/** A column of "|" characters clipped to the textarea's height —
 * absolutely positioned so its 60-line filler can't set the row's
 * height (the textarea's own `rows` attribute stays in charge). */
function TextareaRule({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-y-0 w-[1ch] overflow-hidden text-primary/60 select-none",
        className
      )}
    >
      <pre className="m-0 font-mono">{"|\n".repeat(60)}</pre>
    </span>
  );
}

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
      <div
        aria-hidden
        className="whitespace-pre text-primary/60 group-focus-within/textarea:text-primary"
      >
        {topBorder(chWidth)}
      </div>
      <div className="relative flex items-stretch">
        <TextareaRule className="left-0 group-focus-within/textarea:text-primary" />
        <textarea
          data-slot="textarea"
          rows={rows}
          className={cn(
            "mx-[2ch] min-w-0 flex-1 resize-none bg-transparent py-0 text-sm text-primary outline-none placeholder:text-muted-foreground disabled:pointer-events-none disabled:opacity-50",
            className
          )}
          {...props}
        />
        <TextareaRule className="right-0 group-focus-within/textarea:text-primary" />
      </div>
      <div
        aria-hidden
        className="whitespace-pre text-primary/60 group-focus-within/textarea:text-primary"
      >
        {bottomBorder(chWidth)}
      </div>
    </div>
  );
}

export { Textarea };
