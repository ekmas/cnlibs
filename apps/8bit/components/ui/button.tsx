import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button px-rounded-md [--pixel-size:4px] inline-flex shrink-0 items-center justify-center text-sm whitespace-nowrap transition-all outline-none select-none px-ring active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "px-border-md [--px-border-offset:2px] [--px-face-offset:2px] [--px-border-color:transparent] [--px-bg:var(--primary)] text-primary-foreground hover:[--px-bg:color-mix(in_oklab,var(--primary)_80%,transparent)] dark:focus-visible:[--px-border-color:var(--ring)] dark:focus-visible:[--px-ring-color:transparent]",
        outline:
          "px-border-md [--px-border-offset:2px] [--px-face-offset:2px] [--px-border-color:var(--border)]! [--px-bg:var(--background)] hover:[--px-bg:var(--border)] hover:text-foreground aria-expanded:[--px-bg:var(--border)] aria-expanded:text-foreground dark:[--px-border-color:var(--input)]! dark:[--px-bg:color-mix(in_oklab,var(--input)_30%,transparent)] dark:hover:[--px-bg:var(--input)] dark:focus-visible:[--px-border-color:var(--ring)] dark:focus-visible:[--px-ring-color:transparent]",
        secondary:
          "px-border-md [--px-border-offset:2px] [--px-face-offset:2px] [--px-border-color:transparent] [--px-bg:var(--secondary)] text-secondary-foreground hover:[--px-bg:color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:[--px-bg:var(--secondary)] aria-expanded:text-secondary-foreground dark:focus-visible:[--px-border-color:var(--ring)] dark:focus-visible:[--px-ring-color:transparent]",
        ghost:
          "px-border-md [--px-border-offset:2px] [--px-face-offset:2px] [--px-border-color:transparent] [--px-bg:var(--background)] hover:[--px-bg:var(--border)] hover:text-foreground aria-expanded:[--px-bg:var(--border)] aria-expanded:text-foreground dark:[--px-bg:color-mix(in_oklab,var(--input)_30%,transparent)] dark:hover:[--px-bg:var(--input)] dark:focus-visible:[--px-border-color:var(--ring)] dark:focus-visible:[--px-ring-color:transparent]",
        destructive:
          "px-border-md [--px-border-offset:2px] [--px-face-offset:2px] [--px-border-color:transparent] [--px-bg:color-mix(in_oklab,var(--destructive)_10%,transparent)] text-destructive hover:[--px-bg:color-mix(in_oklab,var(--destructive)_20%,transparent)] focus-visible:[--px-border-color:color-mix(in_oklab,var(--destructive)_40%,transparent)] focus-visible:[--px-ring-color:transparent] dark:[--px-bg:color-mix(in_oklab,var(--destructive)_20%,transparent)] dark:hover:[--px-bg:color-mix(in_oklab,var(--destructive)_30%,transparent)]",
      },
      size: {
        default: "h-9 gap-1.5 px-4 in-data-[slot=button-group]:rounded-md",
        xs: "h-6 gap-1 [--pixel-size:2px] px-2 text-xs in-data-[slot=button-group]:rounded-md [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1 rounded-[min(var(--radius-md),10px)] px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon]:px-3",
        lg: "h-10 gap-1.5 px-2.5",
        icon: "size-9 [--px-border-color:transparent]",
        "icon-xs":
          "size-6 [--pixel-size:2px] [--px-border-color:transparent] in-data-[slot=button-group]:rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-8 [--px-border-color:transparent] rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-md",
        "icon-lg": "size-10 [--px-border-color:transparent]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      data-variant={variant}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
