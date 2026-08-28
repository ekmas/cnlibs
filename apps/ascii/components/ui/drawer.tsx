"use client";

import { Drawer as DrawerPrimitive } from "@base-ui/react/drawer";
import * as React from "react";

import { AsciiRule, AsciiVRule } from "@/components/ascii/ascii-box";
import { cn } from "@/lib/utils";

function Drawer({ ...props }: DrawerPrimitive.Root.Props) {
  return <DrawerPrimitive.Root data-slot="drawer" {...props} />;
}

function DrawerTrigger({ ...props }: DrawerPrimitive.Trigger.Props) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />;
}

function DrawerPortal({ ...props }: DrawerPrimitive.Portal.Props) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />;
}

function DrawerClose({ ...props }: DrawerPrimitive.Close.Props) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />;
}

function DrawerOverlay({
  className,
  ...props
}: DrawerPrimitive.Backdrop.Props) {
  return (
    <DrawerPrimitive.Backdrop
      data-slot="drawer-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-black/10 supports-backdrop-filter:backdrop-blur-xs",
        className
      )}
      {...props}
    />
  );
}

function DrawerContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: DrawerPrimitive.Popup.Props & { showCloseButton?: boolean }) {
  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerPrimitive.Viewport
        data-slot="drawer-viewport"
        className="fixed inset-0 z-50"
      >
        <DrawerPrimitive.Popup
          data-slot="drawer-content"
          className={cn(
            "group fixed z-50 flex flex-col bg-popover bg-clip-padding font-mono text-sm text-popover-foreground shadow-lg",
            "data-[swipe-direction=down]:inset-x-0 data-[swipe-direction=down]:bottom-0 data-[swipe-direction=down]:h-auto",
            "data-[swipe-direction=up]:inset-x-0 data-[swipe-direction=up]:top-0 data-[swipe-direction=up]:h-auto",
            "data-[swipe-direction=left]:inset-y-0 data-[swipe-direction=left]:left-0 data-[swipe-direction=left]:h-full data-[swipe-direction=left]:w-3/4 data-[swipe-direction=left]:sm:max-w-sm",
            "data-[swipe-direction=right]:inset-y-0 data-[swipe-direction=right]:right-0 data-[swipe-direction=right]:h-full data-[swipe-direction=right]:w-3/4 data-[swipe-direction=right]:sm:max-w-sm",
            className
          )}
          {...props}
        >
          <AsciiRule
            orientation="horizontal"
            className="pointer-events-none absolute inset-x-0 top-0 hidden group-data-[swipe-direction=down]:block"
          />
          <AsciiRule
            orientation="horizontal"
            className="pointer-events-none absolute inset-x-0 bottom-0 hidden group-data-[swipe-direction=up]:block"
          />
          <AsciiVRule className="pointer-events-none absolute inset-y-0 right-0 hidden group-data-[swipe-direction=left]:block" />
          <AsciiVRule className="pointer-events-none absolute inset-y-0 left-0 hidden group-data-[swipe-direction=right]:block" />
          {children}
          {showCloseButton && (
            <DrawerPrimitive.Close
              data-slot="drawer-close"
              aria-label="Close"
              className="absolute top-[1lh] right-[2ch] font-mono text-muted-foreground outline-none select-none hover:text-foreground focus-visible:text-foreground"
            >
              [x]
            </DrawerPrimitive.Close>
          )}
        </DrawerPrimitive.Popup>
      </DrawerPrimitive.Viewport>
    </DrawerPortal>
  );
}

function DrawerHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-header"
      className={cn("flex flex-col px-[2ch] py-[1lh]", className)}
      {...props}
    />
  );
}

function DrawerFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn("mt-auto flex flex-col px-[2ch] py-[1lh]", className)}
      {...props}
    />
  );
}

function DrawerTitle({ className, ...props }: DrawerPrimitive.Title.Props) {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn(
        "font-heading text-sm font-weight-heading text-foreground",
        className
      )}
      {...props}
    />
  );
}

function DrawerDescription({
  className,
  ...props
}: DrawerPrimitive.Description.Props) {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn("mt-[1lh] text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

export {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
};
