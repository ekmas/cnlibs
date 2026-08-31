"use client";

import { Progress as ProgressPrimitive } from "@base-ui/react/progress";
import * as React from "react";

import { hRepeat } from "@/lib/ascii";
import { cn } from "@/lib/utils";

const BAR_WIDTH = 20; // characters between the brackets

function Progress({
  className,
  value,
  max = 100,
  min = 0,
  barWidth = BAR_WIDTH,
  label,
  ...props
}: Omit<ProgressPrimitive.Root.Props, "children"> & {
  barWidth?: number;
  label?: React.ReactNode;
}) {
  const ratio = value === null ? 0 : (value - min) / (max - min);
  const filled = Math.round(Math.min(Math.max(ratio, 0), 1) * barWidth);

  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      value={value}
      max={max}
      min={min}
      className={cn(
        "flex items-center gap-[1ch] font-mono text-sm text-ascii-soft",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Track
        data-slot="progress-track"
        render={<span />}
        className="whitespace-pre select-none"
      >
        {"["}
        <ProgressPrimitive.Indicator
          data-slot="progress-indicator"
          render={<span />}
          className="text-primary"
        >
          {hRepeat(filled, "#")}
        </ProgressPrimitive.Indicator>
        <span aria-hidden className="text-ascii-comment">
          {hRepeat(barWidth - filled, "-")}
        </span>
        {"]"}
      </ProgressPrimitive.Track>
      <ProgressPrimitive.Value
        data-slot="progress-value"
        className="tabular-nums"
      >
        {(formatted) => label ?? formatted}
      </ProgressPrimitive.Value>
    </ProgressPrimitive.Root>
  );
}

export { Progress };
