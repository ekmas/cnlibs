import {
  BoldIcon,
  ChevronDownIcon,
  ItalicIcon,
  UnderlineIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/button-group";
import type { DocVariant } from "@/content/docs/registry";

export const title = "Button Group";
export const description =
  "Groups related buttons together with shared borders.";

export const links = {
  shadcn: "https://ui.shadcn.com/docs/components/button-group",
};

export const variants: DocVariant[] = [
  {
    code: `import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export function ButtonGroupDemo() {
  return (
    <ButtonGroup>
      <Button aria-label="Bold" size="icon" variant="outline">
        <BoldIcon />
      </Button>
      <Button aria-label="Italic" size="icon" variant="outline">
        <ItalicIcon />
      </Button>
      <Button aria-label="Underline" size="icon" variant="outline">
        <UnderlineIcon />
      </Button>
    </ButtonGroup>
  );
}`,
    description: "Buttons in a group share a border and lose inner corners.",
    id: "default",
    preview: (
      <ButtonGroup>
        <Button aria-label="Bold" size="icon" variant="outline">
          <BoldIcon />
        </Button>
        <Button aria-label="Italic" size="icon" variant="outline">
          <ItalicIcon />
        </Button>
        <Button aria-label="Underline" size="icon" variant="outline">
          <UnderlineIcon />
        </Button>
      </ButtonGroup>
    ),
    title: "Default",
  },
  {
    code: `import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/button-group";

export function ButtonGroupSplitDemo() {
  return (
    <ButtonGroup>
      <Button variant="outline">Save</Button>
      <ButtonGroupSeparator />
      <Button aria-label="More save options" size="icon" variant="outline">
        <ChevronDownIcon />
      </Button>
    </ButtonGroup>
  );
}`,
    description: "Use a separator to split a primary action from a menu.",
    id: "with-separator",
    preview: (
      <ButtonGroup>
        <Button variant="outline">Save</Button>
        <ButtonGroupSeparator />
        <Button aria-label="More save options" size="icon" variant="outline">
          <ChevronDownIcon />
        </Button>
      </ButtonGroup>
    ),
    title: "With Separator",
  },
];
