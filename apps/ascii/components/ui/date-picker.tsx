"use client";

import { Popover as PopoverPrimitive } from "@base-ui/react/popover";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

function formatDate(date: Date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

type DatePickerProps = {
  id?: string;
  className?: string;
  chWidth?: number;
  value?: Date;
  defaultValue?: Date;
  onValueChange?: (date: Date) => void;
  placeholder?: string;
};

function DatePicker({
  id,
  className,
  chWidth = 24,
  value,
  defaultValue,
  onValueChange,
  placeholder = "Select date",
}: DatePickerProps) {
  const [internal, setInternal] = React.useState<Date | undefined>(
    defaultValue
  );
  const [open, setOpen] = React.useState(false);
  const selected = value ?? internal;

  function handleSelect(date: Date) {
    setInternal(date);
    onValueChange?.(date);
    setOpen(false);
  }

  return (
    <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
      <PopoverPrimitive.Trigger
        data-slot="date-picker-trigger"
        render={
          <Button
            id={id}
            variant="outline"
            className={cn("justify-between", className)}
            style={{ width: `${chWidth}ch` }}
          >
            <span className={cn(!selected && "text-muted-foreground")}>
              {selected ? formatDate(selected) : placeholder}
            </span>
          </Button>
        }
      />
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Positioner
          sideOffset={4}
          align="start"
          className="isolate z-50"
        >
          <PopoverPrimitive.Popup
            data-slot="date-picker-content"
            className="origin-(--transform-origin) outline-none"
          >
            <Calendar
              selected={selected}
              defaultMonth={selected}
              onSelect={handleSelect}
            />
          </PopoverPrimitive.Popup>
        </PopoverPrimitive.Positioner>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  );
}

export { DatePicker };
