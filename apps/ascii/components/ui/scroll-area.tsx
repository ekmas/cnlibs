"use client";

import { ScrollArea as ScrollAreaPrimitive } from "@base-ui/react/scroll-area";

import { AsciiRule } from "@/components/ascii/ascii-box";
import { cn } from "@/lib/utils";

function ScrollArea({
  className,
  children,
  ...props
}: ScrollAreaPrimitive.Root.Props) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn(
        "group relative overflow-hidden font-mono text-sm",
        className
      )}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className="h-full w-full outline-none"
      >
        <ScrollAreaPrimitive.Content data-slot="scroll-area-content">
          {children}
        </ScrollAreaPrimitive.Content>
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner data-slot="scroll-area-corner" />
    </ScrollAreaPrimitive.Root>
  );
}

function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}: ScrollAreaPrimitive.Scrollbar.Props) {
  return (
    <ScrollAreaPrimitive.Scrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        "relative flex touch-none opacity-0 select-none data-hovering:opacity-100 data-scrolling:opacity-100 group-focus-within:opacity-100",
        orientation === "vertical" && "h-full w-[1ch]",
        orientation === "horizontal" && "h-[1ch] w-full flex-col",
        className
      )}
      {...props}
    >
      <AsciiRule
        tone="soft"
        orientation={orientation === "vertical" ? "vertical" : "horizontal"}
        className="pointer-events-none absolute inset-0 opacity-40"
      />
      <ScrollAreaPrimitive.Thumb
        data-slot="scroll-area-thumb"
        className="relative flex-1 bg-primary/50 group-focus-within:bg-primary"
      />
    </ScrollAreaPrimitive.Scrollbar>
  );
}

export { ScrollArea, ScrollBar };
