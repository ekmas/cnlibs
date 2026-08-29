"use client";

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import * as React from "react";

import {
  AsciiHBorder,
  AsciiJunction,
  AsciiRule,
  AsciiSide,
  AsciiVRule,
} from "@/components/ascii/ascii-box";
import { cn } from "@/lib/utils";

type TabsVariant = "default" | "boxed";

const TabsVariantContext = React.createContext<TabsVariant>("default");

/** `default` draws an inline `[ a | b ]` strip over a rule; `boxed`
 * draws each tab as a framed button whose bottom edge lands on the
 * framed panel below — the look of the docs' install tabs. */
function Tabs({
  className,
  orientation = "horizontal",
  variant = "default",
  ...props
}: TabsPrimitive.Root.Props & { variant?: TabsVariant }) {
  return (
    <TabsVariantContext.Provider value={variant}>
      <TabsPrimitive.Root
        data-slot="tabs"
        data-orientation={orientation}
        data-variant={variant}
        className={cn("group/tabs flex flex-col font-mono", className)}
        {...props}
      />
    </TabsVariantContext.Provider>
  );
}

function TabsList({ className, children, ...props }: TabsPrimitive.List.Props) {
  const variant = React.useContext(TabsVariantContext);

  if (variant === "boxed") {
    return (
      <TabsPrimitive.List
        data-slot="tabs-list"
        className={cn(
          "relative z-10 -mb-[1lh] flex w-fit text-sm select-none",
          className
        )}
        {...props}
      >
        {children}
      </TabsPrimitive.List>
    );
  }

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

/** A "+----+" row pinned to a boxed tab's top or bottom edge, colored
 * with the tab (the rule's own tone is overridden with text-inherit). */
function TabBorder({ edge }: { edge: "top" | "bottom" }) {
  return (
    <span
      aria-hidden
      data-slot="frame"
      className={cn(
        "absolute inset-x-0 flex",
        edge === "top" ? "top-0" : "bottom-0"
      )}
    >
      <AsciiJunction />
      <AsciiRule line={edge} className="min-w-0 flex-1 text-inherit" />
      <AsciiJunction />
    </span>
  );
}

function TabsTrigger({
  className,
  children,
  ...props
}: TabsPrimitive.Tab.Props) {
  const variant = React.useContext(TabsVariantContext);

  if (variant === "boxed") {
    return (
      <TabsPrimitive.Tab
        data-slot="tabs-trigger"
        className={cn(
          // Adjacent tabs overlap by 1ch so they share one "|" — the
          // active tab is raised so its whole frame shows.
          "relative -ml-[1ch] inline-flex items-center whitespace-nowrap py-[1lh] text-ascii-comment outline-none first:ml-0",
          "hover:text-foreground focus-visible:text-foreground",
          "data-active:z-10 data-active:text-primary",
          "data-disabled:pointer-events-none data-disabled:opacity-50",
          "[&_[data-slot=frame]]:text-inherit",
          className
        )}
        {...props}
      >
        <TabBorder edge="top" />
        <AsciiSide data-slot="frame" side="left" />
        <span className="px-[1ch]">{children}</span>
        <AsciiSide data-slot="frame" side="right" />
        <TabBorder edge="bottom" />
      </TabsPrimitive.Tab>
    );
  }

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
    >
      {children}
    </TabsPrimitive.Tab>
  );
}

function TabsContent({
  className,
  children,
  ...props
}: TabsPrimitive.Panel.Props) {
  const variant = React.useContext(TabsVariantContext);

  if (variant === "boxed") {
    return (
      <TabsPrimitive.Panel
        data-slot="tabs-content"
        className={cn(
          "flex flex-1 flex-col font-mono text-sm text-ascii-soft outline-none",
          className
        )}
        {...props}
      >
        <AsciiHBorder line="top" />
        <div className="relative">
          <AsciiVRule side="left" className="absolute inset-y-0 left-0" />
          <div className="px-[2ch] py-[1lh]">{children}</div>
          <AsciiVRule side="right" className="absolute inset-y-0 right-0" />
        </div>
        <AsciiHBorder line="bottom" />
      </TabsPrimitive.Panel>
    );
  }

  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={cn(
        "flex-1 font-mono text-sm text-ascii-soft outline-none",
        className
      )}
      {...props}
    >
      {children}
    </TabsPrimitive.Panel>
  );
}

export { Tabs, TabsContent, TabsList, TabsTrigger };
