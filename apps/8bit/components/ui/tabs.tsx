"use client";

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import { cva, type VariantProps } from "class-variance-authority";

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
      className={cn(
        "group/tabs flex gap-2 data-horizontal:flex-col has-[[data-slot=tabs-list][data-variant=line]]:gap-0",
        className
      )}
      {...props}
    />
  );
}

const tabsListVariants = cva(
  "group/tabs-list items-center justify-center text-muted-foreground group-data-horizontal/tabs:grid group-data-horizontal/tabs:h-9 group-data-horizontal/tabs:w-fit group-data-horizontal/tabs:auto-cols-fr group-data-horizontal/tabs:grid-flow-col group-data-vertical/tabs:flex group-data-vertical/tabs:h-fit group-data-vertical/tabs:w-fit group-data-vertical/tabs:flex-col",
  {
    variants: {
      variant: {
        default: "px-rounded-sm [--pixel-size:3px] gap-1 bg-muted p-[3px]",
        line: "group-data-horizontal/tabs:w-full bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function TabsList({
  className,
  variant = "default",
  ...props
}: TabsPrimitive.List.Props & VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  );
}

function TabsTrigger({ className, ...props }: TabsPrimitive.Tab.Props) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(
        "relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 px-ring [--px-bg:transparent] px-2 py-1 text-sm font-medium whitespace-nowrap text-foreground/60 [transition-property:color]! focus-visible:z-10 group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start hover:text-foreground disabled:pointer-events-none disabled:opacity-50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-disabled:pointer-events-none aria-disabled:opacity-50 dark:text-muted-foreground dark:hover:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        // Default variant: a rounded pill that fills with the page background when active.
        "group-data-[variant=default]/tabs-list:px-rounded-sm group-data-[variant=default]/tabs-list:[--pixel-size:2px] group-data-[variant=default]/tabs-list:data-active:[--px-bg:var(--background)] group-data-[variant=default]/tabs-list:data-active:text-foreground dark:group-data-[variant=default]/tabs-list:data-active:[--px-bg:color-mix(in_oklab,var(--input)_30%,transparent)]",
        // Line variant: a flush, equal-width tab strip — only the outer edges round off, active fills with secondary.
        // Inactive tabs blend the focus ring's face into the page background, so
        // focus only ever shows as the thin ring border, not a solid fill.
        "group-data-[variant=line]/tabs-list:first:px-rounded-tl-md group-data-[variant=line]/tabs-list:last:px-rounded-tr-md group-data-[variant=line]/tabs-list:[--pixel-size:5px] group-data-[variant=line]/tabs-list:py-2 group-data-[variant=line]/tabs-list:text-base group-data-[variant=line]/tabs-list:data-active:[--px-bg:var(--secondary)] group-data-[variant=line]/tabs-list:data-active:text-secondary-foreground group-data-[variant=line]/tabs-list:not-data-active:focus-visible:[--px-bg:var(--background)] group-data-[variant=line]/tabs-list:first:[--px-shape:none]! group-data-[variant=line]/tabs-list:last:[--px-shape:none]!",
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
      className={cn("flex-1 text-sm outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsContent, TabsList, TabsTrigger, tabsListVariants };
