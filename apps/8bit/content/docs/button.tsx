import { ChevronRightIcon, Loader2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { DocVariant } from "@/content/docs/registry";

export const title = "Button";
export const description =
  "Displays a button or a component that looks like a button.";

export const links = {
  shadcn: "https://ui.shadcn.com/docs/components/button",
};

export const variants: DocVariant[] = [
  {
    code: `import { Button } from "@/components/ui/button";

export function ButtonDemo() {
  return <Button>Button</Button>;
}`,
    description: "The default button, used for primary actions.",
    id: "default",
    preview: <Button>Button</Button>,
    title: "Default",
  },
  {
    code: `import { Button } from "@/components/ui/button";

export function ButtonOutlineDemo() {
  return <Button variant="outline">Outline</Button>;
}`,
    description: "A button with a pixel border and a transparent background.",
    id: "outline",
    preview: <Button variant="outline">Outline</Button>,
    title: "Outline",
  },
  {
    code: `import { Button } from "@/components/ui/button";

export function ButtonSecondaryDemo() {
  return <Button variant="secondary">Secondary</Button>;
}`,
    description: "A less prominent button for secondary actions.",
    id: "secondary",
    preview: <Button variant="secondary">Secondary</Button>,
    title: "Secondary",
  },
  {
    code: `import { Button } from "@/components/ui/button";

export function ButtonGhostDemo() {
  return <Button variant="ghost">Ghost</Button>;
}`,
    description: "A borderless button that only shows its surface on hover.",
    id: "ghost",
    preview: <Button variant="ghost">Ghost</Button>,
    title: "Ghost",
  },
  {
    code: `import { Button } from "@/components/ui/button";

export function ButtonDestructiveDemo() {
  return <Button variant="destructive">Delete</Button>;
}`,
    description: "Signals a destructive or irreversible action.",
    id: "destructive",
    preview: <Button variant="destructive">Delete</Button>,
    title: "Destructive",
  },
  {
    code: `import { Button } from "@/components/ui/button";

export function ButtonLinkDemo() {
  return <Button variant="link">Link</Button>;
}`,
    description: "A button that looks and behaves like an inline link.",
    id: "link",
    preview: <Button variant="link">Link</Button>,
    title: "Link",
  },
  {
    code: `import { ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ButtonWithIconDemo() {
  return (
    <Button variant="outline">
      Next
      <ChevronRightIcon data-icon="inline-end" />
    </Button>
  );
}`,
    description:
      "Buttons can include an inline icon before or after the label.",
    id: "with-icon",
    preview: (
      <Button variant="outline">
        Next
        <ChevronRightIcon data-icon="inline-end" />
      </Button>
    ),
    title: "With Icon",
  },
  {
    code: `import { Loader2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ButtonLoadingDemo() {
  return (
    <Button disabled>
      <Loader2Icon className="animate-spin" data-icon="inline-start" />
      Please wait
    </Button>
  );
}`,
    description: "Disable the button and show a spinner while work is pending.",
    id: "loading",
    preview: (
      <Button disabled>
        <Loader2Icon className="animate-spin" data-icon="inline-start" />
        Please wait
      </Button>
    ),
    title: "Loading",
  },
];
