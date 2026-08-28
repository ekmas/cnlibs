"use client";

import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu";
import * as React from "react";

import { bottomBorder, topBorder } from "@/lib/ascii";
import { cn } from "@/lib/utils";

function ContextMenu({ ...props }: ContextMenuPrimitive.Root.Props) {
  return <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />;
}

function ContextMenuTrigger({
  className,
  ...props
}: ContextMenuPrimitive.Trigger.Props) {
  return (
    <ContextMenuPrimitive.Trigger
      data-slot="context-menu-trigger"
      className={className}
      {...props}
    />
  );
}

function ContextMenuPortal({ ...props }: ContextMenuPrimitive.Portal.Props) {
  return (
    <ContextMenuPrimitive.Portal data-slot="context-menu-portal" {...props} />
  );
}

function ContextMenuContent({
  className,
  children,
  chWidth = 26,
  align = "start",
  alignOffset = 0,
  sideOffset = 2,
  ...props
}: Omit<ContextMenuPrimitive.Popup.Props, "className"> &
  Pick<
    ContextMenuPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  > & { chWidth?: number; className?: string }) {
  return (
    <ContextMenuPortal>
      <ContextMenuPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className="isolate z-50"
      >
        <ContextMenuPrimitive.Popup
          data-slot="context-menu-content"
          className={cn(
            "relative isolate z-50 origin-(--transform-origin) bg-popover font-mono text-sm text-popover-foreground",
            className
          )}
          style={{ width: `${chWidth}ch` }}
          {...props}
        >
          <span aria-hidden className="block whitespace-pre text-primary/60">
            {topBorder(chWidth)}
          </span>
          {children}
          <span aria-hidden className="block whitespace-pre text-primary/60">
            {bottomBorder(chWidth)}
          </span>
        </ContextMenuPrimitive.Popup>
      </ContextMenuPrimitive.Positioner>
    </ContextMenuPortal>
  );
}

function ContextMenuItem({
  className,
  children,
  variant = "default",
  ...props
}: ContextMenuPrimitive.Item.Props & {
  variant?: "default" | "destructive";
}) {
  return (
    <ContextMenuPrimitive.Item
      data-slot="context-menu-item"
      data-variant={variant}
      className={cn(
        "group/context-menu-item flex cursor-default items-stretch outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50",
        className
      )}
      {...props}
    >
      <span aria-hidden className="shrink-0 text-primary/60">
        |
      </span>
      <span
        className={cn(
          "flex min-w-0 flex-1 items-center px-[1ch]",
          variant === "destructive"
            ? "text-destructive"
            : "group-data-highlighted/context-menu-item:text-primary"
        )}
      >
        <span
          aria-hidden
          className="w-[1ch] shrink-0 opacity-0 group-data-highlighted/context-menu-item:opacity-100"
        >
          [
        </span>
        <span className="flex min-w-0 flex-1 items-center">{children}</span>
        <span
          aria-hidden
          className="w-[1ch] shrink-0 text-right opacity-0 group-data-highlighted/context-menu-item:opacity-100"
        >
          ]
        </span>
      </span>
      <span aria-hidden className="shrink-0 text-primary/60">
        |
      </span>
    </ContextMenuPrimitive.Item>
  );
}

function ContextMenuSeparator({
  className,
  ...props
}: ContextMenuPrimitive.Separator.Props) {
  return (
    <div className="flex items-center whitespace-pre text-primary/60 select-none">
      <span aria-hidden className="shrink-0">
        +
      </span>
      <ContextMenuPrimitive.Separator
        data-slot="context-menu-separator"
        className={cn("min-w-0 flex-1 overflow-hidden", className)}
        {...props}
      >
        <span aria-hidden>{"-".repeat(200)}</span>
      </ContextMenuPrimitive.Separator>
      <span aria-hidden className="shrink-0">
        +
      </span>
    </div>
  );
}

export {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuPortal,
  ContextMenuSeparator,
  ContextMenuTrigger,
};
