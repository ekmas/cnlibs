"use client";

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";

import { cn } from "@/lib/utils";

function Checkbox({ className, ...props }: CheckboxPrimitive.Root.Props) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "group/checkbox peer inline-flex shrink-0 items-center font-mono text-sm text-ascii-comment outline-none",
        "after:absolute after:-inset-x-2 after:-inset-y-2 relative",
        "hover:text-primary focus-visible:text-primary",
        "disabled:pointer-events-none disabled:opacity-50",
        "data-checked:text-primary",
        className
      )}
      {...props}
    >
      <span aria-hidden>[</span>
      <span
        aria-hidden
        className="w-[1ch] text-center text-primary opacity-0 group-data-checked/checkbox:opacity-100"
      >
        x
      </span>
      <span aria-hidden>]</span>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
