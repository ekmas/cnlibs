"use client";

import { Switch as SwitchPrimitive } from "@base-ui/react/switch";

import { cn } from "@/lib/utils";

/* Static "(o  )" / "(  o)" — the state swaps the glyphs, nothing
 * animates. */
function Switch({ className, ...props }: SwitchPrimitive.Root.Props) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "group/switch peer inline-flex shrink-0 items-center font-mono text-sm whitespace-pre text-ascii-comment outline-none select-none",
        "hover:text-primary focus-visible:text-primary",
        "data-checked:text-primary",
        "data-disabled:pointer-events-none data-disabled:opacity-50",
        className
      )}
      {...props}
    >
      <span aria-hidden className="group-data-checked/switch:hidden">
        {"(o  )"}
      </span>
      <span aria-hidden className="hidden group-data-checked/switch:inline">
        {"(  o)"}
      </span>
    </SwitchPrimitive.Root>
  );
}

export { Switch };
