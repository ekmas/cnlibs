import * as React from "react";

import { cn } from "@/lib/utils";

/** Boxed buttons in a row, overlapped by 1ch so adjacent buttons
 * share a single vertical border. */
function ButtonGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="button-group"
      role="group"
      className={cn(
        "inline-flex items-stretch -space-x-[1ch] font-mono text-sm",
        className
      )}
      {...props}
    />
  );
}

export { ButtonGroup };
