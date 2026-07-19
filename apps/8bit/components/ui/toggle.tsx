"use client";

import { Toggle as TogglePrimitive } from "@base-ui/react/toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const toggleVariants = cva(
  "group/toggle px-rounded-sm [--pixel-size:3px] px-ring inline-flex items-center justify-center gap-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none hover:[--px-bg:var(--muted)] hover:text-foreground disabled:pointer-events-none disabled:opacity-50 aria-invalid:[--px-ring-color:var(--destructive)] aria-pressed:[--px-bg:var(--muted)] [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "[--px-bg:transparent]",
        outline:
          "px-border-sm [--px-border-offset:2px] [--px-bg:transparent] hover:[--px-bg:var(--muted)]",
      },
      size: {
        default:
          "h-9 min-w-9 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        sm: "h-8 min-w-8 px-2.5 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",
        lg: "h-10 min-w-10 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Toggle({
  className,
  variant = "default",
  size = "default",
  ...props
}: TogglePrimitive.Props & VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Toggle, toggleVariants };
