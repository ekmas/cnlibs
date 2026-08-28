import * as React from "react";

import { cn } from "@/lib/utils";

const markerToneClass = {
  success: "text-primary",
  warning: "text-destructive",
  danger: "text-destructive",
  neutral: "text-ascii-comment",
} as const;

type MarkerTone = keyof typeof markerToneClass;

function Marker({
  tone = "neutral",
  className,
  ...props
}: React.ComponentProps<"span"> & {
  tone?: MarkerTone;
}) {
  return (
    <span
      data-slot="marker"
      aria-hidden
      className={cn(
        "inline-block font-mono select-none",
        markerToneClass[tone],
        className
      )}
      {...props}
    >
      •
    </span>
  );
}

export { Marker };
