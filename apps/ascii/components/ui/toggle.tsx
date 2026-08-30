"use client";

import { Toggle as TogglePrimitive } from "@base-ui/react/toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const toggleVariants = cva(
  "group/toggle inline-flex shrink-0 items-center justify-center gap-[1ch] font-mono text-sm whitespace-nowrap text-muted-foreground outline-none select-none hover:text-foreground focus-visible:text-foreground active:translate-y-px disabled:pointer-events-none disabled:opacity-50 data-pressed:font-heading data-pressed:text-primary [&_[data-slot=bracket]]:text-muted-foreground/70 [&_[data-slot=bracket]]:select-none data-pressed:[&_[data-slot=bracket]]:text-primary",
  {
    variants: {
      variant: {
        default: "",
        outline:
          "text-foreground [&_[data-slot=bracket]]:text-ascii-soft hover:text-primary focus-visible:text-primary",
      },
      size: {
        default: "h-8 px-[2ch]",
        sm: "h-7 px-[2ch]",
        lg: "h-9 px-[2ch]",
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
  bracket = true,
  children,
  ...props
}: TogglePrimitive.Props<string> &
  VariantProps<typeof toggleVariants> & { bracket?: boolean }) {
  return (
    <TogglePrimitive
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    >
      {bracket && (
        <span aria-hidden data-slot="bracket">
          [
        </span>
      )}
      {children}
      {bracket && (
        <span aria-hidden data-slot="bracket">
          ]
        </span>
      )}
    </TogglePrimitive>
  );
}

export { Toggle, toggleVariants };
