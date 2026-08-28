import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import {
  AsciiJunction,
  AsciiRule,
  AsciiSide,
} from "@/components/ascii/ascii-box";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button w-fit shrink-0 self-start font-mono text-sm whitespace-nowrap outline-none select-none active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_[data-slot=frame]]:select-none",
  {
    variants: {
      variant: {
        default:
          "text-primary [&_[data-slot=frame]]:text-primary/60 hover:[&_[data-slot=frame]]:text-primary focus-visible:[&_[data-slot=frame]]:text-primary",
        secondary:
          "text-secondary-foreground [&_[data-slot=frame]]:text-secondary-foreground/60 hover:[&_[data-slot=frame]]:text-secondary-foreground focus-visible:[&_[data-slot=frame]]:text-secondary-foreground",
        outline:
          "text-foreground hover:text-primary focus-visible:text-primary [&_[data-slot=frame]]:text-muted-foreground hover:[&_[data-slot=frame]]:text-primary focus-visible:[&_[data-slot=frame]]:text-primary",
        ghost:
          "text-muted-foreground hover:text-foreground focus-visible:text-foreground [&_[data-slot=frame]]:text-muted-foreground/50 hover:[&_[data-slot=frame]]:text-foreground/70 focus-visible:[&_[data-slot=frame]]:text-foreground/70",
        destructive:
          "text-destructive [&_[data-slot=frame]]:text-destructive/60 hover:[&_[data-slot=frame]]:text-destructive focus-visible:[&_[data-slot=frame]]:text-destructive",
        link: "text-primary [&_[data-slot=frame]]:text-primary/60 hover:[&_[data-slot=frame]]:text-primary focus-visible:[&_[data-slot=frame]]:text-primary",
      },
      size: {
        default: "[&_[data-slot=label]]:px-[1ch]",
        icon: "[&_[data-slot=label]]:px-[1ch]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

/** A "+----+" border row pinned to the button's top or bottom edge —
 * absolutely positioned so its dash filler can't widen the button. */
function ButtonBorder({ edge }: { edge: "top" | "bottom" }) {
  return (
    <span
      aria-hidden
      data-slot="frame"
      className={cn(
        "absolute inset-x-0 flex",
        edge === "top" ? "top-0" : "bottom-0"
      )}
    >
      <AsciiJunction />
      <AsciiRule line={edge} className="min-w-0 flex-1" />
      <AsciiJunction />
    </span>
  );
}

function Button({
  className,
  variant = "default",
  size = "default",
  children,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  const boxed = variant !== "link";

  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(
        buttonVariants({ variant, size }),
        boxed
          ? "relative inline-flex items-center py-[1lh]"
          : "inline-flex items-center gap-[1ch]",
        className
      )}
      {...props}
    >
      {boxed ? (
        <>
          <ButtonBorder edge="top" />
          <AsciiSide side="left" data-slot="frame" />
          <span
            data-slot="label"
            className="flex min-w-0 flex-1 items-center justify-center gap-[1ch]"
          >
            {children}
          </span>
          <AsciiSide side="right" data-slot="frame" />
          <ButtonBorder edge="bottom" />
        </>
      ) : (
        <>
          <span aria-hidden data-slot="frame">
            <span className="group-hover/button:hidden group-focus-visible/button:hidden">
              #
            </span>
            <span className="hidden group-hover/button:inline group-focus-visible/button:inline">
              {">"}
            </span>
          </span>
          {children}
        </>
      )}
    </ButtonPrimitive>
  );
}

export { Button, buttonVariants };
