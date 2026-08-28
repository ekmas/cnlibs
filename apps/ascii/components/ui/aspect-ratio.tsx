import * as React from "react";

import { cn } from "@/lib/utils";

function AspectRatio({
  ratio = 16 / 9,
  className,
  style,
  ...props
}: React.ComponentProps<"div"> & { ratio?: number }) {
  return (
    <div
      data-slot="aspect-ratio"
      className={cn("relative w-full overflow-hidden", className)}
      style={{ aspectRatio: ratio, ...style }}
      {...props}
    />
  );
}

export { AspectRatio };
