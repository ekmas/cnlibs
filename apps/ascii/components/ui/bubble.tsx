import * as React from "react";

import { AsciiBox } from "@/components/ascii/ascii-box";
import { cn } from "@/lib/utils";

type BubbleSide = "sent" | "received";

function Bubble({
  className,
  side = "received",
  width = 30,
  ...props
}: Omit<React.ComponentProps<typeof AsciiBox>, "tone"> & {
  side?: BubbleSide;
}) {
  return (
    <AsciiBox
      data-slot="bubble"
      data-side={side}
      width={width}
      padY={0}
      tone={side === "sent" ? "primary" : "soft"}
      className={cn(
        "text-sm",
        side === "sent" ? "ml-auto" : "mr-auto",
        className
      )}
      {...props}
    />
  );
}

export { Bubble };
