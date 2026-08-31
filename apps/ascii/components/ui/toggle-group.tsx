"use client";

import { ToggleGroup as ToggleGroupPrimitive } from "@base-ui/react/toggle-group";
import * as React from "react";

import { cn } from "@/lib/utils";

function ToggleGroup({
  className,
  children,
  ...props
}: ToggleGroupPrimitive.Props<string>) {
  const items = React.Children.toArray(children).filter(Boolean);

  return (
    <div className="inline-flex w-fit items-center gap-[1ch] font-mono text-sm text-ascii-comment select-none">
      <span aria-hidden>[</span>
      <ToggleGroupPrimitive
        data-slot="toggle-group"
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
            {React.isValidElement<{ bracket?: boolean }>(child)
              ? React.cloneElement(child, { bracket: false })
              : child}
          </React.Fragment>
        ))}
      </ToggleGroupPrimitive>
      <span aria-hidden>]</span>
    </div>
  );
}

export { ToggleGroup };
