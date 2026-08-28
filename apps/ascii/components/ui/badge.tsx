import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-[0.5ch] overflow-hidden px-[2ch] font-mono text-sm tracking-[0.04em] whitespace-nowrap uppercase [&_[data-slot=bracket]]:select-none",
  {
    variants: {
      variant: {
        default: "text-primary [&_[data-slot=bracket]]:text-primary/70",
        secondary:
          "text-secondary-foreground [&_[data-slot=bracket]]:text-secondary-foreground/70",
        destructive:
          "text-destructive [&_[data-slot=bracket]]:text-destructive/70",
        outline:
          "text-foreground [&_[data-slot=bracket]]:text-muted-foreground",
        ghost:
          "text-muted-foreground [&_[data-slot=bracket]]:text-muted-foreground/60",
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
  children,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
        children: (
          <>
            <span aria-hidden data-slot="bracket">
              [
            </span>
            {children}
            <span aria-hidden data-slot="bracket">
              ]
            </span>
          </>
        ),
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
