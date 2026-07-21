import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import type { DocVariant } from "@/content/docs/registry";

export const title = "Popover";
export const description =
  "Displays rich content in a portal, triggered by a button.";

export const links = {
  shadcn: "https://ui.shadcn.com/docs/components/popover",
};

export const variants: DocVariant[] = [
  {
    code: `import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline">Open popover</Button>} />
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Dimensions</PopoverTitle>
          <PopoverDescription>
            Set the dimensions for the layer.
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  );
}`,
    description:
      "Swap the trigger's rendered element with render to use your own Button.",
    id: "default",
    preview: (
      <Popover>
        <PopoverTrigger
          render={<Button variant="outline">Open popover</Button>}
        />
        <PopoverContent>
          <PopoverHeader>
            <PopoverTitle>Dimensions</PopoverTitle>
            <PopoverDescription>
              Set the dimensions for the layer.
            </PopoverDescription>
          </PopoverHeader>
        </PopoverContent>
      </Popover>
    ),
    title: "Default",
  },
];
