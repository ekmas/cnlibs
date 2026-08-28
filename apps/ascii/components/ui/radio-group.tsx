"use client";

import { Radio as RadioPrimitive } from "@base-ui/react/radio";
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group";

import { cn } from "@/lib/utils";

function RadioGroup({ className, ...props }: RadioGroupPrimitive.Props) {
  return (
    <RadioGroupPrimitive
      data-slot="radio-group"
      className={cn("flex flex-col font-mono text-sm", className)}
      {...props}
    />
  );
}

function RadioGroupItem({ className, ...props }: RadioPrimitive.Root.Props) {
  return (
    <RadioPrimitive.Root
      data-slot="radio-group-item"
      className={cn(
        "peer inline-flex shrink-0 items-center font-mono text-sm text-ascii-comment outline-none",
        "hover:text-primary focus-visible:text-primary",
        "disabled:pointer-events-none disabled:opacity-50",
        "data-checked:text-primary",
        className
      )}
      {...props}
    >
      <span aria-hidden>(</span>
      <RadioPrimitive.Indicator
        keepMounted
        className="w-[1ch] text-center text-primary opacity-0 data-checked:opacity-100"
      >
        •
      </RadioPrimitive.Indicator>
      <span aria-hidden>)</span>
    </RadioPrimitive.Root>
  );
}

export { RadioGroup, RadioGroupItem };
