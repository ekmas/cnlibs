import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { DocVariant } from "@/content/docs/registry";

export const title = "Tooltip";
export const description =
  "A popup that displays information related to an element on hover or focus.";

export const links = {
  shadcn: "https://ui.shadcn.com/docs/components/tooltip",
};

export const variants: DocVariant[] = [
  {
    code: `import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function TooltipDemo() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline">Hover me</Button>} />
      <TooltipContent>Add to library</TooltipContent>
    </Tooltip>
  );
}`,
    description:
      "Wrap a trigger and TooltipContent in a Tooltip. TooltipProvider is already mounted globally.",
    id: "default",
    preview: (
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline">Hover me</Button>} />
        <TooltipContent>Add to library</TooltipContent>
      </Tooltip>
    ),
    title: "Default",
  },
  {
    code: `import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function TooltipIconButtonDemo() {
  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button aria-label="Add item" size="icon" variant="outline" />
        }
      >
        <PlusIcon />
      </TooltipTrigger>
      <TooltipContent>Add item</TooltipContent>
    </Tooltip>
  );
}`,
    description:
      "Tooltips are especially useful for labeling icon-only buttons.",
    id: "icon-button",
    preview: (
      <Tooltip>
        <TooltipTrigger
          render={
            <Button aria-label="Add item" size="icon" variant="outline" />
          }
        >
          <PlusIcon />
        </TooltipTrigger>
        <TooltipContent>Add item</TooltipContent>
      </Tooltip>
    ),
    title: "Icon Button",
  },
];
