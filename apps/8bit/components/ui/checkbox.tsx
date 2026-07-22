"use client";

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import { CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";

function Checkbox({ className, ...props }: CheckboxPrimitive.Root.Props) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer flex size-4 shrink-0 items-center justify-center px-rounded-sm px-border-sm [--pixel-size:2px] [--px-border-width:1px] [--px-border-color:var(--input)] shadow-xs transition-shadow outline-none group-has-disabled/field:opacity-50 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:[--px-border-color:var(--ring)] focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:[--px-border-color:var(--destructive)] aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:[--px-border-color:var(--primary)] dark:bg-input/30 dark:aria-invalid:[--px-border-color:color-mix(in_oklab,var(--destructive)_50%,transparent)] dark:aria-invalid:ring-destructive/40 data-checked:[--px-border-color:var(--primary)] data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-none [&>svg]:size-3.5"
      >
        <CheckIcon />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
