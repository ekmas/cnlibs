import { ChevronsUpDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import type { DocVariant } from "@/content/docs/registry";

export const title = "Collapsible";
export const description =
  "An interactive component which expands and collapses a panel.";

export const links = {
  shadcn: "https://ui.shadcn.com/docs/components/collapsible",
};

export const variants: DocVariant[] = [
  {
    code: `import { ChevronsUpDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function CollapsibleDemo() {
  return (
    <Collapsible className="w-full max-w-md" defaultOpen>
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm font-semibold">
          @shadcn starred 3 repositories
        </span>
        <CollapsibleTrigger
          render={
            <Button size="icon-sm" variant="ghost">
              <ChevronsUpDownIcon />
              <span className="sr-only">Toggle</span>
            </Button>
          }
        />
      </div>
      <div className="px-1 pt-2 text-sm text-muted-foreground">
        @base-ui/react
      </div>
      <CollapsibleContent className="flex flex-col gap-2 px-1 pt-2 text-sm text-muted-foreground">
        <div>@shadcn/ui</div>
        <div>@radix-ui/primitives</div>
      </CollapsibleContent>
    </Collapsible>
  );
}`,
    description:
      "The panel starts open; toggle the trigger to collapse or expand it.",
    id: "default",
    preview: (
      <Collapsible className="w-full max-w-md" defaultOpen>
        <div className="flex items-center justify-between gap-4">
          <span className="font-semibold text-sm">
            @shadcn starred 3 repositories
          </span>
          <CollapsibleTrigger
            render={
              <Button size="icon-sm" variant="ghost">
                <ChevronsUpDownIcon />
                <span className="sr-only">Toggle</span>
              </Button>
            }
          />
        </div>
        <div className="px-1 pt-2 text-muted-foreground text-sm">
          @base-ui/react
        </div>
        <CollapsibleContent className="flex flex-col gap-2 px-1 pt-2 text-muted-foreground text-sm">
          <div>@shadcn/ui</div>
          <div>@radix-ui/primitives</div>
        </CollapsibleContent>
      </Collapsible>
    ),
    title: "Default",
  },
];
