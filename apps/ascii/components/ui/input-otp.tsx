"use client";

import { OTPField as OTPFieldPrimitive } from "@base-ui/react/otp-field";
import * as React from "react";

import { AsciiEdge, AsciiSide } from "@/components/ascii/ascii-box";
import { cn } from "@/lib/utils";

const SLOT_WIDTH = 5; // ch — "|" + 1ch pad + 1 char + 1ch pad + "|"

function InputOTP({
  className,
  length = 6,
  value: valueProp,
  defaultValue,
  onValueChange,
  ...props
}: OTPFieldPrimitive.Root.Props) {
  const [uncontrolledValue, setUncontrolledValue] = React.useState(
    defaultValue ?? ""
  );
  const value = valueProp ?? uncontrolledValue;
  const [allSelected, setAllSelected] = React.useState(false);
  const rootRef = React.useRef<HTMLDivElement>(null);

  const setValue = (
    next: string,
    details: Parameters<NonNullable<typeof onValueChange>>[1]
  ) => {
    if (valueProp === undefined) setUncontrolledValue(next);
    onValueChange?.(next, details);
  };

  return (
    <OTPFieldPrimitive.Root
      ref={rootRef}
      data-slot="input-otp"
      data-all-selected={allSelected || undefined}
      length={length}
      value={value}
      onValueChange={(next, details) => {
        setAllSelected(false);
        setValue(next, details);
      }}
      className={cn(
        "inline-flex items-stretch -space-x-[1ch] font-mono text-sm text-primary select-none",
        className
      )}
      {...props}
      onKeyDownCapture={(event) => {
        if (
          (event.ctrlKey || event.metaKey) &&
          event.key.toLowerCase() === "a"
        ) {
          event.preventDefault();
          event.stopPropagation();
          setAllSelected(true);
        } else if (
          allSelected &&
          (event.key === "Delete" || event.key === "Backspace")
        ) {
          event.preventDefault();
          event.stopPropagation();
          setAllSelected(false);
          setValue("", undefined as never);
          rootRef.current?.querySelector("input")?.focus();
        } else if (allSelected) {
          setAllSelected(false);
        }
      }}
    />
  );
}

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<typeof OTPFieldPrimitive.Input> & { index: number }) {
  return (
    <div
      data-slot="input-otp-slot"
      className="group/otp-slot inline-flex flex-col"
      style={{ width: `${SLOT_WIDTH}ch` }}
    >
      <AsciiEdge
        edge="top"
        width={SLOT_WIDTH}
        className="text-primary/60 group-focus-within/otp-slot:text-primary"
      />
      <div className="flex items-stretch">
        <AsciiSide
          side="left"
          className="shrink-0 text-primary/60 group-focus-within/otp-slot:text-primary"
        />
        <OTPFieldPrimitive.Input
          aria-label={index === 0 ? undefined : `Character ${index + 1}`}
          data-slot="input-otp-input"
          className={cn(
            "min-w-0 flex-1 bg-transparent px-[1ch] text-center text-sm text-primary outline-none disabled:pointer-events-none disabled:opacity-50",
            "in-data-all-selected:bg-primary in-data-all-selected:text-primary-foreground",
            className
          )}
          {...props}
        />
        <AsciiSide
          side="right"
          className="shrink-0 text-primary/60 group-focus-within/otp-slot:text-primary"
        />
      </div>
      <AsciiEdge
        edge="bottom"
        width={SLOT_WIDTH}
        className="text-primary/60 group-focus-within/otp-slot:text-primary"
      />
    </div>
  );
}

export { InputOTP, InputOTPSlot };
