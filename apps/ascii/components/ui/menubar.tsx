"use client";

import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import { Menubar as MenubarPrimitive } from "@base-ui/react/menubar";
import * as React from "react";

import {
  AsciiEdge,
  AsciiJunction,
  AsciiRule,
  AsciiSide,
} from "@/components/ascii/ascii-box";
import { cn } from "@/lib/utils";

function Menubar({ className, children, ...props }: MenubarPrimitive.Props) {
  const items = React.Children.toArray(children).filter(Boolean);

  return (
    <div className="inline-flex w-fit items-center gap-[1ch] text-sm text-ascii-comment select-none">
      <span aria-hidden>[</span>
      <MenubarPrimitive
        data-slot="menubar"
        className={cn("inline-flex items-center gap-[1ch]", className)}
        {...props}
      >
        {items.map((child, i) => (
          <React.Fragment key={i}>
            {i > 0 && (
              <span aria-hidden className="text-ascii-comment">
                |
              </span>
            )}
            {child}
          </React.Fragment>
        ))}
      </MenubarPrimitive>
      <span aria-hidden>]</span>
    </div>
  );
}

function MenubarMenu({ ...props }: MenuPrimitive.Root.Props) {
  return <MenuPrimitive.Root data-slot="menubar-menu" {...props} />;
}

function MenubarTrigger({ className, ...props }: MenuPrimitive.Trigger.Props) {
  return (
    <MenuPrimitive.Trigger
      data-slot="menubar-trigger"
      className={cn(
        "inline-flex items-center whitespace-nowrap text-ascii-comment uppercase outline-none",
        "hover:text-foreground",
        "focus-visible:text-primary",
        "data-popup-open:font-weight-heading data-popup-open:text-primary",
        className
      )}
      {...props}
    />
  );
}

function MenubarPortal({ ...props }: MenuPrimitive.Portal.Props) {
  return <MenuPrimitive.Portal data-slot="menubar-portal" {...props} />;
}

function MenubarContent({
  className,
  children,
  chWidth = 22,
  side = "bottom",
  sideOffset = 4,
  align = "start",
  alignOffset = 0,
  ...props
}: Omit<MenuPrimitive.Popup.Props, "className"> &
  Pick<
    MenuPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  > & { chWidth?: number; className?: string }) {
  return (
    <MenubarPortal>
      <MenuPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        className="isolate z-50"
      >
        <MenuPrimitive.Popup
          data-slot="menubar-content"
          className={cn(
            "relative isolate z-50 origin-(--transform-origin) bg-popover font-mono text-sm text-popover-foreground",
            className
          )}
          style={{ width: `${chWidth}ch` }}
          {...props}
        >
          <AsciiEdge edge="top" width={chWidth} className="text-primary/60" />
          {children}
          <AsciiEdge
            edge="bottom"
            width={chWidth}
            className="text-primary/60"
          />
        </MenuPrimitive.Popup>
      </MenuPrimitive.Positioner>
    </MenubarPortal>
  );
}

function MenubarItem({
  className,
  children,
  variant = "default",
  ...props
}: MenuPrimitive.Item.Props & {
  variant?: "default" | "destructive";
}) {
  return (
    <MenuPrimitive.Item
      data-slot="menubar-item"
      data-variant={variant}
      className={cn(
        "group/menubar-item flex cursor-default items-stretch outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50",
        className
      )}
      {...props}
    >
      <AsciiSide side="left" className="shrink-0 text-primary/60" />
      <span
        className={cn(
          "flex min-w-0 flex-1 items-center px-[1ch]",
          variant === "destructive"
            ? "text-destructive"
            : "group-data-highlighted/menubar-item:text-primary"
        )}
      >
        {/* Columns: pad, ">" pointer, gap, label — same as Select items. */}
        <span
          aria-hidden
          className="w-[1ch] shrink-0 opacity-0 group-data-highlighted/menubar-item:opacity-100"
        >
          &gt;
        </span>
        <span className="flex min-w-0 flex-1 items-center px-[1ch]">
          {children}
        </span>
      </span>
      <AsciiSide side="right" className="shrink-0 text-primary/60" />
    </MenuPrimitive.Item>
  );
}

function MenubarSeparator({
  className,
  ...props
}: MenuPrimitive.Separator.Props) {
  return (
    <div className="flex items-center whitespace-pre text-primary/60 select-none">
      <AsciiJunction className="shrink-0" />
      <MenuPrimitive.Separator
        data-slot="menubar-separator"
        className={cn("min-w-0 flex-1 overflow-hidden", className)}
        {...props}
      >
        <AsciiRule line="divider" />
      </MenuPrimitive.Separator>
      <AsciiJunction className="shrink-0" />
    </div>
  );
}

export {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarPortal,
  MenubarSeparator,
  MenubarTrigger,
};
