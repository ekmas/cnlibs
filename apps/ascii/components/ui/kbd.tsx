import * as React from "react";

import { cn } from "@/lib/utils";

function Kbd({ className, children, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="kbd"
      className={cn(
        "inline-flex items-center font-mono text-sm text-ascii-comment select-none [&_[data-slot=bracket]]:text-ascii-comment/70",
        className
      )}
      {...props}
    >
      <span aria-hidden data-slot="bracket">
        [
      </span>
      {children}
      <span aria-hidden data-slot="bracket">
        ]
      </span>
    </span>
  );
}

export { Kbd };
