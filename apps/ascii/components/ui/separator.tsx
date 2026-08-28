"use client";

import { Separator as SeparatorPrimitive } from "@base-ui/react/separator";

import { AsciiRule } from "@/components/ascii/ascii-box";
import { cn } from "@/lib/utils";

function Separator({
  className,
  orientation = "horizontal",
  ...props
}: SeparatorPrimitive.Props) {
  return (
    <SeparatorPrimitive
      data-slot="separator"
      orientation={orientation}
      className={cn(
        "shrink-0 data-horizontal:h-[1lh] data-horizontal:w-full data-vertical:h-full data-vertical:w-[1ch]",
        className
      )}
      {...props}
    >
      <AsciiRule
        char={orientation === "vertical" ? "|" : "-"}
        orientation={orientation}
        className="h-full w-full"
      />
    </SeparatorPrimitive>
  );
}

export { Separator };
