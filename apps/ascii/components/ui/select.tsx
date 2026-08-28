"use client";

import { Select as SelectPrimitive } from "@base-ui/react/select";
import * as React from "react";

import { bottomBorder, topBorder } from "@/lib/ascii";
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
      <span aria-hidden className="frame-line whitespace-pre text-primary/60">
        {topBorder(chWidth)}
      </span>
      <span className="flex items-stretch">
        <span aria-hidden className="frame-line shrink-0 text-primary/60">
          |
        </span>
        <span className="flex min-w-0 flex-1 items-center gap-[1ch] overflow-hidden px-[2ch] *:data-[slot=select-value]:flex *:data-[slot=select-value]:min-w-0 *:data-[slot=select-value]:flex-1 *:data-[slot=select-value]:items-center">
          {children}
        </span>
        <SelectPrimitive.Icon
          render={
            <span
              aria-hidden
              className="shrink-0 pointer-events-none px-[2ch] text-primary select-none"
            />
          }
        >
          v
        </SelectPrimitive.Icon>
        <span aria-hidden className="frame-line shrink-0 text-primary/60">
          |
        </span>
      </span>
      <span aria-hidden className="frame-line whitespace-pre text-primary/60">
        {bottomBorder(chWidth)}
      </span>
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
          <span aria-hidden className="block whitespace-pre text-primary/60">
            {topBorder(chWidth)}
          </span>
          <SelectScrollUpButton />
          <SelectPrimitive.List>{children}</SelectPrimitive.List>
          <SelectScrollDownButton />
          <span aria-hidden className="block whitespace-pre text-primary/60">
            {bottomBorder(chWidth)}
          </span>
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
      <span aria-hidden className="shrink-0 text-primary/60">
        |
      </span>
      <SelectPrimitive.GroupLabel
        data-slot="select-label"
        className={cn(
          "min-w-0 flex-1 px-[2ch] py-[1lh] text-sm tracking-[0.06em] text-ascii-comment uppercase",
          className
        )}
        {...props}
      />
      <span aria-hidden className="shrink-0 text-primary/60">
        |
      </span>
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
      <span aria-hidden className="shrink-0 text-primary/60">
        |
      </span>
      <span className="flex min-w-0 flex-1 items-center px-[1ch] group-data-highlighted/select-item:text-primary">
        <span
          aria-hidden
          className="w-[1ch] shrink-0 opacity-0 select-none group-data-highlighted/select-item:opacity-100"
        >
          [
        </span>
        <SelectPrimitive.ItemText className="min-w-0 truncate whitespace-nowrap px-[1ch]">
          {children}
        </SelectPrimitive.ItemText>
        <span
          aria-hidden
          className="w-[1ch] shrink-0 opacity-0 select-none group-data-highlighted/select-item:opacity-100"
        >
          ]
        </span>
        <SelectPrimitive.ItemIndicator className="ml-auto w-[1ch] shrink-0 pr-[1ch] text-primary">
          x
        </SelectPrimitive.ItemIndicator>
      </span>
      <span aria-hidden className="shrink-0 text-primary/60">
        |
      </span>
    </SelectPrimitive.Item>
  );
}

function SelectSeparator({
  className,
  ...props
}: SelectPrimitive.Separator.Props) {
  return (
    <div className="flex items-center whitespace-pre text-primary/60 select-none">
      <span aria-hidden className="shrink-0">
        +
      </span>
      <SelectPrimitive.Separator
        data-slot="select-separator"
        className={cn("min-w-0 flex-1 overflow-hidden", className)}
        {...props}
      >
        <span aria-hidden>{"-".repeat(200)}</span>
      </SelectPrimitive.Separator>
      <span aria-hidden className="shrink-0">
        +
      </span>
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
