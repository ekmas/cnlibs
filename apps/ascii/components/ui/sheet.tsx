"use client";

import { Dialog as SheetPrimitive } from "@base-ui/react/dialog";
import * as React from "react";

import { AsciiRule, AsciiVRule } from "@/components/ascii/ascii-box";
import { cn } from "@/lib/utils";

function Sheet({ ...props }: SheetPrimitive.Root.Props) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
}

function SheetTrigger({ ...props }: SheetPrimitive.Trigger.Props) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

function SheetClose({ ...props }: SheetPrimitive.Close.Props) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

function SheetPortal({ ...props }: SheetPrimitive.Portal.Props) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}

function SheetOverlay({ className, ...props }: SheetPrimitive.Backdrop.Props) {
  return (
    <SheetPrimitive.Backdrop
      data-slot="sheet-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-black/10 supports-backdrop-filter:backdrop-blur-xs",
        className
      )}
      {...props}
    />
  );
}

function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}: SheetPrimitive.Popup.Props & {
  side?: "top" | "right" | "bottom" | "left";
  showCloseButton?: boolean;
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Popup
        data-slot="sheet-content"
        data-side={side}
        className={cn(
          "group fixed z-50 flex flex-col bg-popover bg-clip-padding font-mono text-sm text-popover-foreground shadow-lg data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm",
          className
        )}
        {...props}
      >
        <AsciiRule
          orientation="horizontal"
          className="pointer-events-none absolute inset-x-0 top-0 hidden group-data-[side=bottom]:block"
        />
        <AsciiRule
          orientation="horizontal"
          className="pointer-events-none absolute inset-x-0 bottom-0 hidden group-data-[side=top]:block"
        />
        <AsciiVRule className="pointer-events-none absolute inset-y-0 right-0 hidden group-data-[side=left]:block" />
        <AsciiVRule className="pointer-events-none absolute inset-y-0 left-0 hidden group-data-[side=right]:block" />
        {children}
        {showCloseButton && (
          <SheetPrimitive.Close
            data-slot="sheet-close"
            aria-label="Close"
            className="absolute top-[1lh] right-[2ch] font-mono text-muted-foreground outline-none select-none hover:text-foreground focus-visible:text-foreground"
          >
            [x]
          </SheetPrimitive.Close>
        )}
      </SheetPrimitive.Popup>
    </SheetPortal>
  );
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col px-[2ch] py-[1lh]", className)}
      {...props}
    />
  );
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col px-[2ch] py-[1lh]", className)}
      {...props}
    />
  );
}

function SheetTitle({ className, ...props }: SheetPrimitive.Title.Props) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("font-heading text-sm text-foreground", className)}
      {...props}
    />
  );
}

function SheetDescription({
  className,
  ...props
}: SheetPrimitive.Description.Props) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("mt-[1lh] text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
};
