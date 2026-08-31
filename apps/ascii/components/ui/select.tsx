"use client";

import { Select as SelectPrimitive } from "@base-ui/react/select";
import * as React from "react";

import {
  AsciiEdge,
  AsciiJunction,
  AsciiRule,
  AsciiSide,
} from "@/components/ascii/ascii-box";
import { cn } from "@/lib/utils";

const Select = SelectPrimitive.Root;

function SelectGroup({ className, ...props }: SelectPrimitive.Group.Props) {
  return (
    <SelectPrimitive.Group
      data-slot="select-group"
      className={cn("scroll-my-1", className)}
      {...props}
    />
  );
}

function SelectValue({ className, ...props }: SelectPrimitive.Value.Props) {
  return (
    <SelectPrimitive.Value
      data-slot="select-value"
      className={cn("flex flex-1 truncate text-left", className)}
      {...props}
    />
  );
}

function SelectTrigger({
  className,
  chWidth = 28,
  children,
  ...props
}: SelectPrimitive.Trigger.Props & {
  chWidth?: number;
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      className={cn(
        "group/select-trigger flex flex-col font-mono text-sm text-primary select-none",
        "focus-visible:[&_.frame-line]:text-primary",
        "disabled:pointer-events-none disabled:opacity-50",
        "data-placeholder:text-muted-foreground",
        className
      )}
      style={{ width: `${chWidth}ch` }}
      {...props}
    >
      <AsciiEdge
        edge="top"
        width={chWidth}
        className="frame-line text-primary/60"
      />
      <span className="flex items-stretch">
        <AsciiSide
          side="left"
          className="frame-line shrink-0 text-primary/60"
        />
        <span className="flex min-w-0 flex-1 items-center gap-[1ch] overflow-hidden pr-[1ch] pl-[3ch] *:data-[slot=select-value]:flex *:data-[slot=select-value]:min-w-0 *:data-[slot=select-value]:flex-1 *:data-[slot=select-value]:items-center">
          {children}
        </span>
        <SelectPrimitive.Icon
          render={
            <span
              aria-hidden
              className="shrink-0 pointer-events-none px-[1ch] text-primary select-none"
            />
          }
        >
          v
        </SelectPrimitive.Icon>
        <AsciiSide
          side="right"
          className="frame-line shrink-0 text-primary/60"
        />
      </span>
      <AsciiEdge
        edge="bottom"
        width={chWidth}
        className="frame-line text-primary/60"
      />
    </SelectPrimitive.Trigger>
  );
}

function SelectContent({
  className,
  children,
  chWidth = 28,
  side = "bottom",
  sideOffset = 4,
  align = "center",
  alignOffset = 0,
  ...props
}: SelectPrimitive.Popup.Props &
  Pick<
    SelectPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  > & { chWidth?: number }) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        alignItemWithTrigger={false}
        className="isolate z-50"
      >
        <SelectPrimitive.Popup
          data-slot="select-content"
          className={cn(
            "relative isolate z-50 max-h-(--available-height) origin-(--transform-origin) overflow-x-hidden overflow-y-auto bg-popover font-mono text-sm text-popover-foreground outline-none",
            className
          )}
          style={{ width: `${chWidth}ch` }}
          {...props}
        >
          <AsciiEdge edge="top" width={chWidth} className="text-primary/60" />
          <SelectScrollUpButton />
          <SelectPrimitive.List>{children}</SelectPrimitive.List>
          <SelectScrollDownButton />
          <AsciiEdge
            edge="bottom"
            width={chWidth}
            className="text-primary/60"
          />
        </SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  );
}

function SelectLabel({
  className,
  ...props
}: SelectPrimitive.GroupLabel.Props) {
  return (
    <div className="flex items-stretch">
      <AsciiSide side="left" className="shrink-0 text-primary/60" />
      <SelectPrimitive.GroupLabel
        data-slot="select-label"
        className={cn(
          "min-w-0 flex-1 px-[1ch] text-sm tracking-[0.06em] text-ascii-comment uppercase",
          className
        )}
        {...props}
      />
      <AsciiSide side="right" className="shrink-0 text-primary/60" />
    </div>
  );
}

function SelectItem({
  className,
  children,
  ...props
}: SelectPrimitive.Item.Props) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "group/select-item flex cursor-default items-stretch outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50",
        className
      )}
      {...props}
    >
      <AsciiSide side="left" className="shrink-0 text-primary/60" />
      {/* Columns: pad, ">" pointer, gap, label — so the label sits at
       * column 4, matching the trigger's pl-[3ch]. "x" lands on the
       * chevron's column (width-3) behind 1ch of right padding. */}
      <span className="flex min-w-0 flex-1 items-center px-[1ch] group-data-highlighted/select-item:text-primary">
        <span
          aria-hidden
          className="w-[1ch] shrink-0 opacity-0 select-none group-data-highlighted/select-item:opacity-100"
        >
          &gt;
        </span>
        <SelectPrimitive.ItemText className="min-w-0 truncate whitespace-nowrap px-[1ch]">
          {children}
        </SelectPrimitive.ItemText>
        <SelectPrimitive.ItemIndicator className="ml-auto w-[1ch] shrink-0 text-primary">
          x
        </SelectPrimitive.ItemIndicator>
      </span>
      <AsciiSide side="right" className="shrink-0 text-primary/60" />
    </SelectPrimitive.Item>
  );
}

function SelectSeparator({
  className,
  ...props
}: SelectPrimitive.Separator.Props) {
  return (
    <div className="flex items-center whitespace-pre text-primary/60 select-none">
      <AsciiJunction className="shrink-0" />
      <SelectPrimitive.Separator
        data-slot="select-separator"
        className={cn("min-w-0 flex-1 overflow-hidden", className)}
        {...props}
      >
        <AsciiRule line="divider" />
      </SelectPrimitive.Separator>
      <AsciiJunction className="shrink-0" />
    </div>
  );
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpArrow>) {
  return (
    <SelectPrimitive.ScrollUpArrow
      data-slot="select-scroll-up-button"
      className={cn(
        "top-0 z-10 flex cursor-default items-center justify-center bg-popover py-[1lh] text-primary",
        className
      )}
      {...props}
    >
      ^
    </SelectPrimitive.ScrollUpArrow>
  );
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownArrow>) {
  return (
    <SelectPrimitive.ScrollDownArrow
      data-slot="select-scroll-down-button"
      className={cn(
        "bottom-0 z-10 flex cursor-default items-center justify-center bg-popover py-[1lh] text-primary",
        className
      )}
      {...props}
    >
      v
    </SelectPrimitive.ScrollDownArrow>
  );
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
