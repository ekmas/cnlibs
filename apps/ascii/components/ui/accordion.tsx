import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";

import { AsciiRule } from "@/components/ascii/ascii-box";
import { cn } from "@/lib/utils";

function Accordion({ className, ...props }: AccordionPrimitive.Root.Props) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn("flex w-full flex-col font-mono", className)}
      {...props}
    />
  );
}

function AccordionItem({
  className,
  children,
  ...props
}: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("flex flex-col", className)}
      {...props}
    >
      {children}
      <AsciiRule />
    </AccordionPrimitive.Item>
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group/accordion-trigger relative flex flex-1 items-start gap-[1ch] py-[1lh] text-left text-sm text-foreground outline-none hover:text-primary focus-visible:text-primary aria-disabled:pointer-events-none aria-disabled:opacity-50",
          className
        )}
        {...props}
      >
        <span className="min-w-0 flex-1">{children}</span>
        <span
          aria-hidden
          data-slot="accordion-trigger-icon"
          className="shrink-0 text-primary select-none"
        >
          <span className="group-aria-expanded/accordion-trigger:hidden">
            &gt;
          </span>
          <span className="hidden group-aria-expanded/accordion-trigger:inline">
            v
          </span>
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className="overflow-hidden text-sm"
      {...props}
    >
      <div
        className={cn(
          "h-(--accordion-panel-height) pb-[1lh] text-ascii-soft data-ending-style:h-0 data-starting-style:h-0",
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Panel>
  );
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
