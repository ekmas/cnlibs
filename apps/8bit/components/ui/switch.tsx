"use client";

import { Switch as SwitchPrimitive } from "@base-ui/react/switch";

import { cn } from "@/lib/utils";

function Switch({
  className,
  size = "default",
  ...props
}: SwitchPrimitive.Root.Props & {
  size?: "sm" | "default";
}) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      className={cn(
        "peer group/switch relative inline-flex shrink-0 items-center px-rounded-sm px-border-sm [--pixel-size:2px] [--px-border-color:transparent] shadow-xs transition-all outline-none after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:[--px-border-color:var(--ring)] focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:[--px-border-color:var(--destructive)] aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] data-[size=sm]:[--pixel-size:1px] dark:aria-invalid:[--px-border-color:color-mix(in_oklab,var(--destructive)_50%,transparent)] dark:aria-invalid:ring-destructive/40 data-checked:bg-primary data-unchecked:bg-input dark:data-unchecked:bg-input/80 data-disabled:cursor-not-allowed data-disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className="pointer-events-none block px-rounded-sm bg-background ring-0 transition-transform group-data-[size=default]/switch:size-4 group-data-[size=default]/switch:[--pixel-size:2px] group-data-[size=sm]/switch:size-3 group-data-[size=sm]/switch:[--pixel-size:1px] group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] dark:data-checked:bg-primary-foreground group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:data-unchecked:translate-x-0 dark:data-unchecked:bg-foreground"
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
