"use client";

import { Slider as SliderPrimitive } from "@base-ui/react/slider";

import { AsciiRule } from "@/components/ascii/ascii-box";
import { cn } from "@/lib/utils";

const TRACK_WIDTH = 24; // ch

function Slider({
  className,
  chWidth = TRACK_WIDTH,
  ...props
}: SliderPrimitive.Root.Props & { chWidth?: number }) {
  return (
    <SliderPrimitive.Root
      data-slot="slider"
      className={cn(
        "group/slider inline-flex font-mono text-sm text-primary select-none",
        "data-disabled:pointer-events-none data-disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Control className="flex items-center gap-[1ch] py-[1lh]">
        <span aria-hidden className="text-primary/60">
          [
        </span>
        <SliderPrimitive.Track
          data-slot="slider-track"
          className="shrink-0 outline-none"
          style={{ width: `${chWidth}ch` }}
        >
          <AsciiRule
            tone="soft"
            className="pointer-events-none absolute inset-0"
          />
          <SliderPrimitive.Indicator
            data-slot="slider-indicator"
            className="overflow-hidden text-nowrap whitespace-pre text-primary/70"
          >
            {"-".repeat(400)}
          </SliderPrimitive.Indicator>
          <SliderPrimitive.Thumb
            data-slot="slider-thumb"
            className="bg-background text-primary outline-none focus-visible:text-primary"
          >
            o
          </SliderPrimitive.Thumb>
        </SliderPrimitive.Track>
        <span aria-hidden className="text-primary/60">
          ]
        </span>
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  );
}

export { Slider };
