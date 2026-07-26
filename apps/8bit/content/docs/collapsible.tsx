import { CollapsibleDemo } from "@/components/docs/examples/collapsible-demo";
import type { DocVariant } from "@/content/docs/registry";

export const title = "Collapsible";
export const description =
  "An interactive component which expands and collapses a panel.";

export const links = {
  shadcn: "https://ui.shadcn.com/docs/components/collapsible",
};

export const variants: DocVariant[] = [
  {
    code: `"use client";

import { ChevronsUpDownIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function CollapsibleDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible
      className="flex w-[350px] flex-col gap-2"
      onOpenChange={setIsOpen}
      open={isOpen}
    >
      <div className="flex items-center justify-between gap-4 px-4">
        <h4 className="font-heading text-sm">
          Order #4189
        </h4>
        <CollapsibleTrigger
          render={
            <Button className="size-8" size="icon" variant="ghost">
              <ChevronsUpDownIcon />
              <span className="sr-only">Toggle details</span>
            </Button>
          }
        />
      </div>
      <div className="flex items-center justify-between rounded-md border px-4 py-2 text-sm">
        <span className="text-muted-foreground">Status</span>
        <span className="font-medium">Shipped</span>
      </div>
      <CollapsibleContent className="flex flex-col gap-2">
        <div className="rounded-md border px-4 py-2 text-sm">
          <p className="font-medium">Shipping address</p>
          <p className="text-muted-foreground">100 Market St, San Francisco</p>
        </div>
        <div className="rounded-md border px-4 py-2 text-sm">
          <p className="font-medium">Items</p>
          <p className="text-muted-foreground">2x Studio Headphones</p>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}`,
    description:
      "An order summary panel with a toggle to reveal shipping and item details.",
    id: "default",
    preview: <CollapsibleDemo />,
    title: "Default",
  },
];
