import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "group/badge px-rounded-sm [--pixel-size:2px] px-ring inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:[--px-ring-color:var(--destructive)] [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default:
          "[--px-bg:var(--primary)] text-primary-foreground [a]:hover:[--px-bg:color-mix(in_oklab,var(--primary)_80%,transparent)]",
        secondary:
          "[--px-bg:var(--secondary)] text-secondary-foreground [a]:hover:[--px-bg:color-mix(in_oklch,var(--secondary),var(--foreground)_5%)]",
        destructive:
          "[--px-bg:color-mix(in_oklab,var(--destructive)_10%,transparent)] text-destructive [--px-ring-color:color-mix(in_oklab,var(--destructive)_40%,transparent)] [a]:hover:[--px-bg:color-mix(in_oklab,var(--destructive)_20%,transparent)] dark:[--px-bg:color-mix(in_oklab,var(--destructive)_20%,transparent)] dark:[a]:hover:[--px-bg:color-mix(in_oklab,var(--destructive)_30%,transparent)]",
        outline:
          "px-border-sm [--px-bg:transparent] text-foreground [a]:hover:[--px-bg:var(--muted)] [a]:hover:text-muted-foreground",
        ghost:
          "[--px-bg:transparent] hover:[--px-bg:var(--muted)] hover:text-muted-foreground dark:hover:[--px-bg:color-mix(in_oklab,var(--muted)_50%,transparent)]",
        link: "text-primary underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  });
}

export { Badge, badgeVariants };
