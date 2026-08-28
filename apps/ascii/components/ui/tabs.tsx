"use client";

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import * as React from "react";

import { AsciiRule } from "@/components/ascii/ascii-box";
import { cn } from "@/lib/utils";

function Tabs({
  className,
  orientation = "horizontal",
  ...props
}: TabsPrimitive.Root.Props) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      className={cn("group/tabs flex flex-col font-mono", className)}
      {...props}
    />
  );
}

function TabsList({ className, children, ...props }: TabsPrimitive.List.Props) {
  const items = React.Children.toArray(children).filter(Boolean);

  return (
    <div className="flex flex-col">
      <div className="inline-flex w-fit items-center gap-[1ch] text-sm text-ascii-comment select-none">
        <span aria-hidden>[</span>
        <TabsPrimitive.List
          data-slot="tabs-list"
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
              {child}
            </React.Fragment>
          ))}
        </TabsPrimitive.List>
        <span aria-hidden>]</span>
      </div>
      <AsciiRule className="w-full" />
    </div>
  );
}

function TabsTrigger({ className, ...props }: TabsPrimitive.Tab.Props) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(
        "inline-flex items-center whitespace-nowrap text-ascii-comment uppercase outline-none",
        "hover:text-foreground",
        "focus-visible:text-primary",
        "disabled:pointer-events-none disabled:opacity-50",
        "data-active:font-weight-heading data-active:text-primary",
        className
      )}
      {...props}
    />
  );
}

function TabsContent({ className, ...props }: TabsPrimitive.Panel.Props) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={cn(
        "flex-1 font-mono text-sm text-ascii-soft outline-none",
        className
      )}
      {...props}
    />
  );
}

export { Tabs, TabsContent, TabsList, TabsTrigger };
