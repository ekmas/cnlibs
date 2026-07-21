import { BoldIcon, ItalicIcon } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import type { DocVariant } from "@/content/docs/registry";

export const title = "Toggle";
export const description = "A two-state button that can be either on or off.";

export const links = {
  shadcn: "https://ui.shadcn.com/docs/components/toggle",
};

export const variants: DocVariant[] = [
  {
    code: `import { BoldIcon } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

export function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle bold">
      <BoldIcon />
    </Toggle>
  );
}`,
    description: "An icon-only toggle button.",
    id: "default",
    preview: (
      <Toggle aria-label="Toggle bold">
        <BoldIcon />
      </Toggle>
    ),
    title: "Default",
  },
  {
    code: `import { ItalicIcon } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

export function ToggleOutlineDemo() {
  return (
    <Toggle aria-label="Toggle italic" variant="outline">
      <ItalicIcon data-icon="inline-start" />
      Italic
    </Toggle>
  );
}`,
    description:
      "A toggle with a pixel border, combining an icon and a text label.",
    id: "outline",
    preview: (
      <Toggle aria-label="Toggle italic" variant="outline">
        <ItalicIcon data-icon="inline-start" />
        Italic
      </Toggle>
    ),
    title: "Outline",
  },
];
