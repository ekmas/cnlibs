"use client";

import { Input as InputPrimitive } from "@base-ui/react/input";
import * as React from "react";

import { bottomBorder, topBorder } from "@/lib/ascii";
import { cn } from "@/lib/utils";

function Input({
  className,
  type,
  chWidth = 34,
  onInput,
  ref,
  ...props
}: React.ComponentProps<"input"> & { chWidth?: number }) {
  const isPassword = type === "password";
  const isNumber = type === "number";
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const [maskLength, setMaskLength] = React.useState(
    () => String(props.value ?? props.defaultValue ?? "").length
  );
  // Controlled inputs derive the mask from the value prop directly.
  const maskedLength =
    props.value != null ? String(props.value).length : maskLength;

  const step = (direction: "up" | "down") => {
    const el = inputRef.current;
    if (!el || el.disabled || el.readOnly) return;
    if (direction === "up") el.stepUp();
    else el.stepDown();
    // stepUp/stepDown don't fire events; notify React listeners.
    el.dispatchEvent(new Event("input", { bubbles: true }));
    el.focus();
  };

  /* The frame's right corners double as steppers on number inputs: the
   * corner "+" is swapped for a "<" / ">" rotated to point up / down. */
  const borderRow = (edge: "top" | "bottom") => {
    const row = edge === "top" ? topBorder(chWidth) : bottomBorder(chWidth);
    if (!isNumber) {
      return (
        <div
          aria-hidden
          className="whitespace-pre text-primary/60 group-focus-within/input:text-primary"
        >
          {row}
        </div>
      );
    }
    return (
      <div className="flex whitespace-pre text-primary/60 group-focus-within/input:text-primary">
        <span aria-hidden className="min-w-0 flex-1 overflow-hidden">
          {row.slice(0, -1)}
        </span>
        <button
          type="button"
          tabIndex={-1}
          aria-label={edge === "top" ? "Increase value" : "Decrease value"}
          onClick={() => step(edge === "top" ? "up" : "down")}
          className="w-[1ch] shrink-0 outline-none select-none hover:text-primary focus-visible:text-primary"
        >
          <span aria-hidden className="inline-block rotate-90">
            {edge === "top" ? "<" : ">"}
          </span>
        </button>
      </div>
    );
  };

  return (
    <div
      data-slot="input-frame"
      className="group/input inline-flex flex-col font-mono text-sm text-primary select-none"
      style={{ width: `${chWidth}ch` }}
    >
      {borderRow("top")}
      <div className="flex items-stretch">
        <span
          aria-hidden
          className="shrink-0 text-primary/60 group-focus-within/input:text-primary"
        >
          |
        </span>
        {/* The 1ch gap lives on the wrapper, not the input: inputs scroll
         * overflowing text underneath their own padding, which would show
         * glyphs bleeding through next to the border. */}
        <div className="relative mx-[1ch] flex min-w-0 flex-1 items-stretch">
          <InputPrimitive
            type={type}
            data-slot="input"
            ref={(node: HTMLInputElement | null) => {
              inputRef.current = node;
              if (typeof ref === "function") ref(node);
              else if (ref) ref.current = node;
            }}
            className={cn(
              "min-w-0 flex-1 bg-transparent text-sm text-primary outline-none placeholder:text-muted-foreground disabled:pointer-events-none disabled:opacity-50",
              // The native dot mask can't be changed to "*", so the real
              // password text is transparent and an overlay draws the "*"s.
              isPassword && "text-transparent caret-primary",
              isNumber &&
                "[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
              className
            )}
            onInput={(event: React.InputEvent<HTMLInputElement>) => {
              onInput?.(event);
              if (isPassword) setMaskLength(event.currentTarget.value.length);
            }}
            {...props}
          />
          {isPassword && (
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 flex items-center overflow-hidden whitespace-pre text-primary"
            >
              {"*".repeat(maskedLength)}
            </span>
          )}
        </div>
        <span
          aria-hidden
          className="shrink-0 text-primary/60 group-focus-within/input:text-primary"
        >
          |
        </span>
      </div>
      {borderRow("bottom")}
    </div>
  );
}

export { Input };
