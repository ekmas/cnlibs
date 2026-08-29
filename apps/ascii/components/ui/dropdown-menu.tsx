"use client";

import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import * as React from "react";

import {
  AsciiEdge,
  AsciiJunction,
  AsciiRule,
  AsciiSide,
} from "@/components/ascii/ascii-box";
import { cn } from "@/lib/utils";

function DropdownMenu({ ...props }: MenuPrimitive.Root.Props) {
  return <MenuPrimitive.Root data-slot="dropdown-menu" {...props} />;
}

function DropdownMenuTrigger({ ...props }: MenuPrimitive.Trigger.Props) {
  return <MenuPrimitive.Trigger data-slot="dropdown-menu-trigger" {...props} />;
}

function DropdownMenuPortal({ ...props }: MenuPrimitive.Portal.Props) {
  return <MenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />;
}

function DropdownMenuContent({
  className,
  children,
  chWidth = 26,
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
    <DropdownMenuPortal>
      <MenuPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        className="isolate z-50"
      >
        <MenuPrimitive.Popup
          data-slot="dropdown-menu-content"
          className={cn(
            "relative isolate z-50 origin-(--transform-origin) bg-popover font-mono text-sm text-popover-foreground outline-none",
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
    </DropdownMenuPortal>
  );
}

function DropdownMenuGroup({ ...props }: MenuPrimitive.Group.Props) {
  return <MenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />;
}

function DropdownMenuGroupLabel({
  className,
  ...props
}: MenuPrimitive.GroupLabel.Props) {
  return (
    <div className="flex items-stretch">
      <AsciiSide side="left" className="shrink-0 text-primary/60" />
      <MenuPrimitive.GroupLabel
        data-slot="dropdown-menu-group-label"
        className={cn(
          "min-w-0 flex-1 px-[2ch] text-sm tracking-[0.06em] text-ascii-comment uppercase",
          className
        )}
        {...props}
      />
      <AsciiSide side="right" className="shrink-0 text-primary/60" />
    </div>
  );
}

function DropdownMenuItem({
  className,
  children,
  variant = "default",
  ...props
}: MenuPrimitive.Item.Props & {
  variant?: "default" | "destructive";
}) {
  return (
    <MenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-variant={variant}
      className={cn(
        "group/dropdown-menu-item flex cursor-default items-stretch outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50",
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
            : "group-data-highlighted/dropdown-menu-item:text-primary"
        )}
      >
        <span
          aria-hidden
          className="w-[1ch] shrink-0 opacity-0 group-data-highlighted/dropdown-menu-item:opacity-100"
        >
          [
        </span>
        <span className="flex min-w-0 flex-1 items-center">{children}</span>
        <span
          aria-hidden
          className="w-[1ch] shrink-0 text-right opacity-0 group-data-highlighted/dropdown-menu-item:opacity-100"
        >
          ]
        </span>
      </span>
      <AsciiSide side="right" className="shrink-0 text-primary/60" />
    </MenuPrimitive.Item>
  );
}

function DropdownMenuSeparator({
  className,
  ...props
}: MenuPrimitive.Separator.Props) {
  return (
    <div className="flex items-center whitespace-pre text-primary/60 select-none">
      <AsciiJunction className="shrink-0" />
      <MenuPrimitive.Separator
        data-slot="dropdown-menu-separator"
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuGroupLabel,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
};
