"use client";

import { Collapsible as CollapsiblePrimitive } from "@base-ui/react/collapsible";

import { cn } from "@/lib/utils";

function Collapsible({ className, ...props }: CollapsiblePrimitive.Root.Props) {
  return (
    <CollapsiblePrimitive.Root
      data-slot="collapsible"
      className={cn("flex flex-col font-mono", className)}
      {...props}
    />
  );
}

function CollapsibleTrigger({
  className,
  children,
  ...props
}: CollapsiblePrimitive.Trigger.Props) {
  return (
    <CollapsiblePrimitive.Trigger
      data-slot="collapsible-trigger"
      className={cn(
        "group/collapsible-trigger flex items-center gap-[1ch] text-left text-sm text-foreground outline-none hover:text-primary focus-visible:text-primary disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    >
      <span aria-hidden className="shrink-0 text-primary select-none">
        <span className="group-aria-expanded/collapsible-trigger:hidden">
          &gt;
        </span>
        <span className="hidden group-aria-expanded/collapsible-trigger:inline">
          v
        </span>
      </span>
      {children}
    </CollapsiblePrimitive.Trigger>
  );
}

function CollapsibleContent({
  className,
  children,
  ...props
}: CollapsiblePrimitive.Panel.Props) {
  return (
    <CollapsiblePrimitive.Panel
      data-slot="collapsible-content"
      className="overflow-hidden text-sm"
      {...props}
    >
      <div
        className={cn(
          "h-(--collapsible-panel-height) text-ascii-soft data-ending-style:h-0 data-starting-style:h-0",
          className
        )}
      >
        {children}
      </div>
    </CollapsiblePrimitive.Panel>
  );
}

export { Collapsible, CollapsibleContent, CollapsibleTrigger };
