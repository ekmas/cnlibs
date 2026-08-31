"use client";

import { Input as InputPrimitive } from "@base-ui/react/input";
import * as React from "react";

import {
  AsciiJunction,
  AsciiRule,
  AsciiSide,
} from "@/components/ascii/ascii-box";
import { cn } from "@/lib/utils";

const frameClass =
  "text-primary/60 group-focus-within/input-group:text-primary";

/** A 1ch "+ | +" column — the group's outer edges and the divider
 * between sections, with junctions landing on the border rows. */
function FrameCol({ side }: { side: "left" | "right" }) {
  return (
    <div
      aria-hidden
      className={cn("flex w-[1ch] shrink-0 flex-col select-none", frameClass)}
    >
      <AsciiJunction />
      <AsciiSide side={side} />
      <AsciiJunction />
    </div>
  );
}

/** A dash border row pinned to a section's top or bottom edge —
 * absolutely positioned so its filler can't widen the section. */
function DashRow({ edge }: { edge: "top" | "bottom" }) {
  return (
    <AsciiRule
      line={edge}
      className={cn(
        "absolute inset-x-0",
        edge === "top" ? "top-0" : "bottom-0",
        frameClass
      )}
    />
  );
}

function InputGroup({
  className,
  chWidth = 34,
  children,
  ...props
}: React.ComponentProps<"div"> & { chWidth?: number }) {
  const sections = React.Children.toArray(children).filter(Boolean);

  return (
    <div
      data-slot="input-group"
      className={cn(
        "group/input-group inline-flex items-stretch font-mono text-sm text-primary select-none",
        className
      )}
      style={{ width: `${chWidth}ch` }}
      {...props}
    >
      <FrameCol side="left" />
      {sections.map((section, i) => (
        <React.Fragment key={i}>
          {i > 0 && <FrameCol side="right" />}
          {section}
        </React.Fragment>
      ))}
      <FrameCol side="right" />
    </div>
  );
}

/** A prefix/suffix cell that hugs its content. */
function InputGroupAddon({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-group-addon"
      className={cn(
        "relative flex shrink-0 items-center gap-[0.5ch] px-[1ch] py-[1lh] text-ascii-comment select-none",
        className
      )}
      {...props}
    >
      <DashRow edge="top" />
      {children}
      <DashRow edge="bottom" />
    </div>
  );
}

/** The input cell — takes all width the addons leave over. */
function InputGroupInput({
  className,
  type,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <div
      data-slot="input-group-input-frame"
      className="relative flex min-w-0 flex-1 items-stretch py-[1lh]"
    >
      <DashRow edge="top" />
      {/* Same trick as Input: the 1ch gap lives on the wrapper, not the
       * input, so overflowing text clips instead of bleeding under padding. */}
      <div className="mx-[1ch] flex min-w-0 flex-1 items-stretch">
        <InputPrimitive
          type={type}
          data-slot="input-group-input"
          className={cn(
            "min-w-0 flex-1 bg-transparent text-sm text-primary outline-none placeholder:text-muted-foreground disabled:pointer-events-none disabled:opacity-50",
            className
          )}
          {...props}
        />
      </div>
      <DashRow edge="bottom" />
    </div>
  );
}

export { InputGroup, InputGroupAddon, InputGroupInput };
