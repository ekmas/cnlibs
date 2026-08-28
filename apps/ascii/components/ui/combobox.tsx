"use client";

import { Combobox as ComboboxPrimitive } from "@base-ui/react/combobox";
import * as React from "react";

import { bottomBorder, topBorder } from "@/lib/ascii";
import { cn } from "@/lib/utils";

/** The popup anchors to the whole trigger frame (like Select), not
 * the inner input. */
const ComboboxAnchorContext =
  React.createContext<React.RefObject<HTMLDivElement | null> | null>(null);

/** Opens on click like a select, then filters as you type. */
function Combobox<ItemValue>(props: ComboboxPrimitive.Root.Props<ItemValue>) {
  const anchorRef = React.useRef<HTMLDivElement>(null);
  return (
    <ComboboxAnchorContext.Provider value={anchorRef}>
      <ComboboxPrimitive.Root openOnInputClick {...props} />
    </ComboboxAnchorContext.Provider>
  );
}

function ComboboxTrigger({
  className,
  chWidth = 28,
  children,
  ...props
}: React.ComponentProps<"div"> & { chWidth?: number }) {
  const anchorRef = React.useContext(ComboboxAnchorContext);
  return (
    <div
      ref={anchorRef ?? undefined}
      data-slot="combobox-trigger"
      className={cn(
        "group/combobox flex flex-col font-mono text-sm text-primary select-none",
        "focus-within:[&_.frame-line]:text-primary",
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
        {children}
        <span aria-hidden className="frame-line shrink-0 text-primary/60">
          |
        </span>
      </span>
      <span aria-hidden className="frame-line whitespace-pre text-primary/60">
        {bottomBorder(chWidth)}
      </span>
    </div>
  );
}

function ComboboxInput({ className, ...props }: ComboboxPrimitive.Input.Props) {
  return (
    <ComboboxPrimitive.Input
      data-slot="combobox-input"
      className={cn(
        "min-w-0 flex-1 bg-transparent px-[2ch] text-sm text-primary outline-none placeholder:text-muted-foreground disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

function ComboboxIcon({
  className,
  ...props
}: ComboboxPrimitive.Trigger.Props) {
  return (
    <ComboboxPrimitive.Trigger
      data-slot="combobox-icon"
      aria-label="Open list"
      className={cn(
        "shrink-0 px-[2ch] text-primary outline-none select-none hover:text-primary/70 focus-visible:text-primary/70",
        className
      )}
      {...props}
    >
      v
    </ComboboxPrimitive.Trigger>
  );
}

function ComboboxContent({
  className,
  children,
  chWidth = 28,
  side = "bottom",
  sideOffset = 4,
  align = "center",
  alignOffset = 0,
  ...props
}: Omit<ComboboxPrimitive.Popup.Props, "children"> &
  Pick<
    ComboboxPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  > &
  ComboboxPrimitive.List.Props & { chWidth?: number }) {
  const anchorRef = React.useContext(ComboboxAnchorContext);
  return (
    <ComboboxPrimitive.Portal>
      <ComboboxPrimitive.Positioner
        anchor={anchorRef ?? undefined}
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        className="isolate z-50"
      >
        <ComboboxPrimitive.Popup
          data-slot="combobox-content"
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
          <ComboboxPrimitive.List>{children}</ComboboxPrimitive.List>
          <span aria-hidden className="block whitespace-pre text-primary/60">
            {bottomBorder(chWidth)}
          </span>
        </ComboboxPrimitive.Popup>
      </ComboboxPrimitive.Positioner>
    </ComboboxPrimitive.Portal>
  );
}

function ComboboxItem({
  className,
  children,
  ...props
}: ComboboxPrimitive.Item.Props) {
  return (
    <ComboboxPrimitive.Item
      data-slot="combobox-item"
      className={cn(
        "group/combobox-item flex cursor-default items-stretch outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50",
        className
      )}
      {...props}
    >
      <span aria-hidden className="shrink-0 text-primary/60">
        |
      </span>
      <span className="flex min-w-0 flex-1 items-center px-[1ch] group-data-highlighted/combobox-item:text-primary">
        <span
          aria-hidden
          className="w-[1ch] shrink-0 opacity-0 select-none group-data-highlighted/combobox-item:opacity-100"
        >
          [
        </span>
        <span className="min-w-0 truncate whitespace-nowrap px-[1ch]">
          {children}
        </span>
        <span
          aria-hidden
          className="w-[1ch] shrink-0 opacity-0 select-none group-data-highlighted/combobox-item:opacity-100"
        >
          ]
        </span>
        <ComboboxPrimitive.ItemIndicator className="ml-auto w-[1ch] shrink-0 pr-[1ch] text-primary">
          x
        </ComboboxPrimitive.ItemIndicator>
      </span>
      <span aria-hidden className="shrink-0 text-primary/60">
        |
      </span>
    </ComboboxPrimitive.Item>
  );
}

export {
  Combobox,
  ComboboxContent,
  ComboboxIcon,
  ComboboxInput,
  ComboboxItem,
  ComboboxTrigger,
};
