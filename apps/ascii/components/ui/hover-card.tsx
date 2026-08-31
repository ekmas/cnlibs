"use client";

import { PreviewCard as PreviewCardPrimitive } from "@base-ui/react/preview-card";
import * as React from "react";

import { AsciiBox } from "@/components/ascii/ascii-box";
import { cn } from "@/lib/utils";

function HoverCard({ ...props }: PreviewCardPrimitive.Root.Props) {
  return <PreviewCardPrimitive.Root data-slot="hover-card" {...props} />;
}

function HoverCardTrigger({
  className,
  ...props
}: PreviewCardPrimitive.Trigger.Props) {
  return (
    <PreviewCardPrimitive.Trigger
      data-slot="hover-card-trigger"
      className={cn(
        "text-primary underline decoration-dotted underline-offset-4 outline-none hover:text-ascii-soft focus-visible:text-ascii-soft",
        className
      )}
      {...props}
    />
  );
}

function HoverCardPortal({ ...props }: PreviewCardPrimitive.Portal.Props) {
  return (
    <PreviewCardPrimitive.Portal data-slot="hover-card-portal" {...props} />
  );
}

function HoverCardContent({
  className,
  chWidth = 28,
  side = "bottom",
  sideOffset = 8,
  align = "start",
  alignOffset = 0,
  children,
  ...props
}: Omit<PreviewCardPrimitive.Popup.Props, "className"> &
  Pick<
    PreviewCardPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  > & { chWidth?: number; className?: string }) {
  return (
    <HoverCardPortal>
      <PreviewCardPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        className="isolate z-50"
      >
        <PreviewCardPrimitive.Popup
          data-slot="hover-card-content"
          className="z-50 origin-(--transform-origin)"
          {...props}
        >
          <AsciiBox
            width={chWidth}
            tone="primary"
            padY={0}
            bg="bg-popover"
            className={cn("text-popover-foreground", className)}
            contentClassName="flex flex-col"
          >
            {children}
          </AsciiBox>
        </PreviewCardPrimitive.Popup>
      </PreviewCardPrimitive.Positioner>
    </HoverCardPortal>
  );
}

export { HoverCard, HoverCardContent, HoverCardPortal, HoverCardTrigger };
