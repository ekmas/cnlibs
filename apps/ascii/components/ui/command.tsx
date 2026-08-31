"use client";

import { Combobox as ComboboxPrimitive } from "@base-ui/react/combobox";
import * as React from "react";

import {
  AsciiBoxContext,
  AsciiJunction,
  AsciiRule,
} from "@/components/ascii/ascii-box";
import { cn } from "@/lib/utils";

type CommandOption = {
  value: string;
  label: string;
  hint?: string;
  onSelect?: () => void;
};

type CommandGroupData = {
  group: string;
  items: CommandOption[];
};

function Command({
  groups,
  onValueChange,
  placeholder = "Type a command or search...",
  emptyMessage = "No matching commands.",
  filter,
  className,
}: {
  groups: CommandGroupData[];
  onValueChange?: (item: CommandOption) => void;
  placeholder?: string;
  emptyMessage?: string;
  /** Custom query matcher — defaults to matching the item's label. */
  filter?: (item: CommandOption, query: string) => boolean;
  className?: string;
}) {
  return (
    <div data-slot="command" className={cn("flex flex-col", className)}>
      <ComboboxPrimitive.Root
        inline
        open
        items={groups}
        filter={filter}
        itemToStringLabel={(item: CommandOption) => item.label}
        onValueChange={(item: CommandOption | null) => {
          if (!item) return;
          item.onSelect?.();
          onValueChange?.(item);
        }}
      >
        <CommandInput placeholder={placeholder} />
        <CommandList emptyMessage={emptyMessage} />
      </ComboboxPrimitive.Root>
    </div>
  );
}

function CommandInput({ className, ...props }: ComboboxPrimitive.Input.Props) {
  return (
    <div
      data-slot="command-input"
      className="group/command-input flex items-stretch text-sm text-primary"
    >
      <span aria-hidden className="shrink-0 select-none text-ascii-comment">
        {"> "}
      </span>
      <ComboboxPrimitive.Input
        autoFocus
        className={cn(
          "min-w-0 flex-1 bg-transparent text-sm text-primary outline-none placeholder:text-muted-foreground",
          className
        )}
        {...props}
      />
    </div>
  );
}

function CommandList({
  className,
  emptyMessage = "No matching commands.",
}: {
  className?: string;
  emptyMessage?: string;
}) {
  const { bg } = React.useContext(AsciiBoxContext);

  return (
    <div className={cn("-mx-[2ch] flex flex-col", className)}>
      {/* Repaints the surface above a surrounding box's "|" rules so the
       * intersection cells show only the "+" glyphs. */}
      <div
        aria-hidden
        className={cn(
          "relative z-10 flex items-center whitespace-pre text-primary/60 select-none",
          bg
        )}
      >
        <AsciiJunction className="shrink-0" />
        <AsciiRule line="divider" className="min-w-0 flex-1" />
        <AsciiJunction className="shrink-0" />
      </div>
      <div
        data-slot="command-list"
        className="flex max-h-72 flex-col overflow-y-auto outline-none"
      >
        <ComboboxPrimitive.Empty className="px-[2ch] text-ascii-comment empty:hidden">
          {emptyMessage}
        </ComboboxPrimitive.Empty>
        {/* Each group renders its own leading separator; the first
         * visible group's is hidden so it only shows between groups. */}
        <ComboboxPrimitive.List className="[&>*:first-child_[data-slot=command-separator]]:hidden">
          {(group: CommandGroupData) => (
            <ComboboxPrimitive.Group key={group.group} items={group.items}>
              <CommandSeparator />
              <CommandGroupLabel>{group.group}</CommandGroupLabel>
              <ComboboxPrimitive.Collection>
                {(item: CommandOption) => (
                  <CommandItem key={item.value} value={item}>
                    {item.label}
                    {item.hint && (
                      <span className="ml-auto shrink-0 text-ascii-comment">
                        {item.hint}
                      </span>
                    )}
                  </CommandItem>
                )}
              </ComboboxPrimitive.Collection>
            </ComboboxPrimitive.Group>
          )}
        </ComboboxPrimitive.List>
      </div>
    </div>
  );
}

/** A "+----+" divider between command groups. Spans out to a
 * surrounding box's border columns and repaints the surface there,
 * so the intersections show only the "+" glyphs. */
function CommandSeparator({ className }: { className?: string }) {
  const { bg } = React.useContext(AsciiBoxContext);

  return (
    <div
      aria-hidden
      data-slot="command-separator"
      className={cn(
        "relative z-10 flex items-center whitespace-pre text-primary/60 select-none",
        bg,
        className
      )}
    >
      <AsciiJunction className="shrink-0" />
      <AsciiRule line="divider" className="min-w-0 flex-1" />
      <AsciiJunction className="shrink-0" />
    </div>
  );
}

function CommandGroupLabel({
  className,
  ...props
}: ComboboxPrimitive.GroupLabel.Props) {
  return (
    <ComboboxPrimitive.GroupLabel
      data-slot="command-group-label"
      className={cn(
        "mb-[1lh] px-[2ch] text-ascii-comment uppercase tracking-[0.06em]",
        className
      )}
      {...props}
    />
  );
}

function CommandItem({
  className,
  children,
  ...props
}: ComboboxPrimitive.Item.Props) {
  return (
    <ComboboxPrimitive.Item
      data-slot="command-item"
      className={cn(
        "group/command-item mx-[1ch] flex cursor-default items-center gap-[1ch] pr-[2ch] pl-[1ch] text-ascii-soft outline-hidden select-none",
        "data-highlighted:text-primary",
        "data-disabled:pointer-events-none data-disabled:opacity-50",
        className
      )}
      {...props}
    >
      {/* Reserved 1ch pointer column so items don't shift when the
       * ">" appears on hover/keyboard highlight. */}
      <span
        aria-hidden
        className="w-[1ch] shrink-0 select-none opacity-0 group-data-highlighted/command-item:opacity-100"
      >
        &gt;
      </span>
      {children}
    </ComboboxPrimitive.Item>
  );
}

export type { CommandGroupData, CommandOption };
export {
  Command,
  CommandGroupLabel,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
};
