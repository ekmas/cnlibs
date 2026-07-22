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
  ButtonGroupText,
} from "@/components/ui/button-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
    code: `import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export function ButtonGroupOrientationDemo() {
  return (
    <ButtonGroup orientation="vertical">
      <Button variant="outline">Top</Button>
      <Button variant="outline">Middle</Button>
      <Button variant="outline">Bottom</Button>
    </ButtonGroup>
  );
}`,
    description: "Set the orientation prop to stack the group vertically.",
    id: "orientation",
    preview: (
      <ButtonGroup orientation="vertical">
        <Button variant="outline">Top</Button>
        <Button variant="outline">Middle</Button>
        <Button variant="outline">Bottom</Button>
      </ButtonGroup>
    ),
    title: "Orientation",
  },
  {
    code: `import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export function ButtonGroupSizeDemo() {
  return (
    <div className="flex flex-col items-start gap-4">
      <ButtonGroup>
        <Button size="sm" variant="outline">Small</Button>
        <Button size="sm" variant="outline">Button</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Default</Button>
        <Button variant="outline">Button</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button size="lg" variant="outline">Large</Button>
        <Button size="lg" variant="outline">Button</Button>
      </ButtonGroup>
    </div>
  );
}`,
    description:
      "Control the size of buttons using the size prop on individual buttons.",
    id: "size",
    preview: (
      <div className="flex flex-col items-start gap-4">
        <ButtonGroup>
          <Button size="sm" variant="outline">
            Small
          </Button>
          <Button size="sm" variant="outline">
            Button
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="outline">Default</Button>
          <Button variant="outline">Button</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button size="lg" variant="outline">
            Large
          </Button>
          <Button size="lg" variant="outline">
            Button
          </Button>
        </ButtonGroup>
      </div>
    ),
    title: "Size",
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
    id: "split",
    preview: (
      <ButtonGroup>
        <Button variant="outline">Save</Button>
        <ButtonGroupSeparator />
        <Button aria-label="More save options" size="icon" variant="outline">
          <ChevronDownIcon />
        </Button>
      </ButtonGroup>
    ),
    title: "Split",
  },
  {
    code: `import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";

export function ButtonGroupInputDemo() {
  return (
    <ButtonGroup className="w-full max-w-sm">
      <Input placeholder="Search..." />
      <Button variant="outline">Search</Button>
    </ButtonGroup>
  );
}`,
    description: "Wrap an Input component with buttons.",
    id: "input",
    preview: (
      <ButtonGroup className="w-full max-w-sm">
        <Input placeholder="Search..." />
        <Button variant="outline">Search</Button>
      </ButtonGroup>
    ),
    title: "Input",
  },
  {
    code: `import {
  ButtonGroup,
  ButtonGroupText,
} from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ButtonGroupTextDemo() {
  return (
    <ButtonGroup className="w-full max-w-sm">
      <ButtonGroupText render={<Label htmlFor="site" />}>
        https://
      </ButtonGroupText>
      <Input id="site" placeholder="example.com" />
    </ButtonGroup>
  );
}`,
    description:
      "Use ButtonGroupText to display text within a group; pass render to swap in a custom element like a label.",
    id: "text",
    preview: (
      <ButtonGroup className="w-full max-w-sm">
        <ButtonGroupText render={<Label htmlFor="site" />}>
          https://
        </ButtonGroupText>
        <Input id="site" placeholder="example.com" />
      </ButtonGroup>
    ),
    title: "Text",
  },
  {
    code: `import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ButtonGroupDropdownDemo() {
  return (
    <ButtonGroup>
      <Button variant="outline">Follow</Button>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button aria-label="More options" size="icon" variant="outline">
              <ChevronDownIcon />
            </Button>
          }
        />
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Mute</DropdownMenuItem>
          <DropdownMenuItem>Block</DropdownMenuItem>
          <DropdownMenuItem variant="destructive">Report</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>
  );
}`,
    description: "Create a split button group with a DropdownMenu component.",
    id: "dropdown-menu",
    preview: (
      <ButtonGroup>
        <Button variant="outline">Follow</Button>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button aria-label="More options" size="icon" variant="outline">
                <ChevronDownIcon />
              </Button>
            }
          />
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Mute</DropdownMenuItem>
            <DropdownMenuItem>Block</DropdownMenuItem>
            <DropdownMenuItem variant="destructive">Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ButtonGroup>
    ),
    title: "Dropdown Menu",
  },
];
