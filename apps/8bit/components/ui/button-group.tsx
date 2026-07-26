import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const buttonGroupVariants = cva(
  "flex w-fit items-stretch *:focus-visible:relative *:focus-visible:z-10 has-[>[data-slot=button-group]]:gap-2 [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>[data-slot=input-wrapper]]:flex-1 [&>[data-slot][data-variant=outline]]:[--px-border-color:var(--border)] dark:[&>[data-slot][data-variant=outline]]:[--px-border-color:var(--input)] [&>[data-slot]]:[--px-border-offset:0px]! [&>[data-slot]]:[--px-face-offset:0px]! [&>[data-slot]:focus-visible]:[--px-border-color:var(--ring)]! [&>[data-slot]:focus-visible]:[--px-ring-color:transparent]!",
  {
    variants: {
      orientation: {
        // Middle items lose their pixel shape and get a square border frame
        // with the shared (leading) edge omitted so adjacent frames never
        // double up; the first/last items keep staircase corners on their
        // outer edge only. On focus-visible the open frame is swapped for its
        // closed counterpart so the ring border surrounds all four sides.
        horizontal:
          "[&>[data-slot]]:[--px-shape:none]! [&>[data-slot]]:[clip-path:none]! [&>[data-slot]]:px-border-h-mid! [&>[data-slot]:first-child]:px-rounded-l-md! [&>[data-slot]:first-child]:px-border-l-md! [&>[data-slot]:not(:has(~[data-slot]))]:px-rounded-r-md! [&>[data-slot]:not(:has(~[data-slot]))]:px-border-h-end! [&>[data-slot]:first-child:not(:has(~[data-slot]))]:px-rounded-md! [&>[data-slot]:first-child:not(:has(~[data-slot]))]:px-border-md! [&>[data-slot]:focus-visible]:px-border-square! [&>[data-slot]:first-child:focus-visible]:px-border-l-md! [&>[data-slot]:not(:has(~[data-slot])):focus-visible]:px-border-r-md! [&>[data-slot]:first-child:not(:has(~[data-slot])):focus-visible]:px-border-md!",
        vertical:
          "flex-col [&>[data-slot]]:[--px-shape:none]! [&>[data-slot]]:[clip-path:none]! [&>[data-slot]]:px-border-v-mid! [&>[data-slot]:first-child]:px-rounded-t-md! [&>[data-slot]:first-child]:px-border-t-md! [&>[data-slot]:not(:has(~[data-slot]))]:px-rounded-b-md! [&>[data-slot]:not(:has(~[data-slot]))]:px-border-v-end! [&>[data-slot]:first-child:not(:has(~[data-slot]))]:px-rounded-md! [&>[data-slot]:first-child:not(:has(~[data-slot]))]:px-border-md! [&>[data-slot]:focus-visible]:px-border-square! [&>[data-slot]:first-child:focus-visible]:px-border-t-md! [&>[data-slot]:not(:has(~[data-slot])):focus-visible]:px-border-b-md! [&>[data-slot]:first-child:not(:has(~[data-slot])):focus-visible]:px-border-md!",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  }
);

function ButtonGroup({
  className,
  orientation,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof buttonGroupVariants>) {
  return (
    <div
      role="group"
      data-slot="button-group"
      data-orientation={orientation}
      className={cn(buttonGroupVariants({ orientation }), className)}
      {...props}
    />
  );
}

function ButtonGroupText({
  className,
  render,
  ...props
}: useRender.ComponentProps<"div">) {
  return useRender({
    defaultTagName: "div",
    props: mergeProps<"div">(
      {
        className: cn(
          "flex items-center gap-2 px-rounded-md px-border-md [--pixel-size:4px] [--px-border-color:var(--input)] bg-muted px-2.5 text-sm [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
          className
        ),
      },
      props
    ),
    render,
    state: {
      slot: "button-group-text",
    },
  });
}

function ButtonGroupSeparator({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="button-group-separator"
      orientation={orientation}
      className={cn(
        "relative self-stretch bg-input data-horizontal:mx-px data-horizontal:w-auto data-vertical:my-px data-vertical:h-auto",
        className
      )}
      {...props}
    />
  );
}

export {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
  buttonGroupVariants,
};
