import { MailIcon, SearchIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import type { DocVariant } from "@/content/docs/registry";

export const title = "Input Group";
export const description =
  "Groups an input with addons such as buttons and icons.";

export const links = {
  shadcn: "https://ui.shadcn.com/docs/components/input-group",
};

export const variants: DocVariant[] = [
  {
    code: `import { SearchIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

export function InputGroupDemo() {
  return (
    <InputGroup className="w-full max-w-sm">
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupInput placeholder="Search..." />
    </InputGroup>
  );
}`,
    description: "Add an icon addon before the input.",
    id: "default",
    preview: (
      <InputGroup className="w-full max-w-sm">
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupInput placeholder="Search..." />
      </InputGroup>
    ),
    title: "Default",
  },
  {
    code: `import { MailIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";

export function InputGroupWithButtonDemo() {
  return (
    <InputGroup className="w-full max-w-sm">
      <InputGroupAddon>
        <MailIcon />
      </InputGroupAddon>
      <InputGroupInput placeholder="you@example.com" type="email" />
      <InputGroupAddon align="inline-end">
        <InputGroupButton size="sm">Subscribe</InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
}`,
    description: "Add a button addon after the input, e.g. to submit a form.",
    id: "with-button",
    preview: (
      <InputGroup className="w-full max-w-sm">
        <InputGroupAddon>
          <MailIcon />
        </InputGroupAddon>
        <InputGroupInput placeholder="you@example.com" type="email" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="sm">Subscribe</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    ),
    title: "With Button",
  },
];
