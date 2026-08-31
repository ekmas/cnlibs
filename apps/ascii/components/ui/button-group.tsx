import * as React from "react";

import { cn } from "@/lib/utils";

/** Boxed buttons in a row, overlapped by 1ch so adjacent buttons
 * share a single vertical border — drawn like the install tabs: each
 * button's frame takes its label color (dim at rest, foreground on
 * hover, primary when active), and the hovered, focused or pressed
 * button is raised above its neighbours so its whole frame shows. */
function ButtonGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="button-group"
      role="group"
      className={cn(
        "inline-flex items-stretch -space-x-[1ch] font-mono text-sm",
        "[&_[data-slot=frame]]:text-inherit!",
        "[&>[data-slot=button]:hover]:z-10 [&>[data-slot=button]:focus-visible]:z-10",
        "[&>[data-slot=button][aria-pressed=true]]:z-10",
        className
      )}
      {...props}
    />
  );
}

export { ButtonGroup };
