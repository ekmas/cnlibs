import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import type { DocVariant } from "@/content/docs/registry";

export const title = "Toggle Group";
export const description =
  "A set of two-state buttons that can be toggled on or off.";

export const links = {
  shadcn: "https://ui.shadcn.com/docs/components/toggle-group",
};

export const variants: DocVariant[] = [
  {
    code: `import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function ToggleGroupDemo() {
  return (
    <ToggleGroup aria-label="Text formatting" defaultValue={["bold"]}>
      <ToggleGroupItem aria-label="Toggle bold" value="bold">
        <BoldIcon />
      </ToggleGroupItem>
      <ToggleGroupItem aria-label="Toggle italic" value="italic">
        <ItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupItem aria-label="Toggle underline" value="underline">
        <UnderlineIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}`,
    description:
      "By default only one item in the group can be pressed at a time.",
    id: "default",
    preview: (
      <ToggleGroup aria-label="Text formatting" defaultValue={["bold"]}>
        <ToggleGroupItem aria-label="Toggle bold" value="bold">
          <BoldIcon />
        </ToggleGroupItem>
        <ToggleGroupItem aria-label="Toggle italic" value="italic">
          <ItalicIcon />
        </ToggleGroupItem>
        <ToggleGroupItem aria-label="Toggle underline" value="underline">
          <UnderlineIcon />
        </ToggleGroupItem>
      </ToggleGroup>
    ),
    title: "Default",
  },
  {
    code: `import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function ToggleGroupMultipleDemo() {
  return (
    <ToggleGroup
      aria-label="Text formatting"
      defaultValue={["bold", "italic"]}
      multiple
    >
      <ToggleGroupItem aria-label="Toggle bold" value="bold">
        <BoldIcon />
      </ToggleGroupItem>
      <ToggleGroupItem aria-label="Toggle italic" value="italic">
        <ItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupItem aria-label="Toggle underline" value="underline">
        <UnderlineIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}`,
    description:
      "Pass the multiple prop to allow more than one item to be pressed at once.",
    id: "multiple",
    preview: (
      <ToggleGroup
        aria-label="Text formatting"
        defaultValue={["bold", "italic"]}
        multiple
      >
        <ToggleGroupItem aria-label="Toggle bold" value="bold">
          <BoldIcon />
        </ToggleGroupItem>
        <ToggleGroupItem aria-label="Toggle italic" value="italic">
          <ItalicIcon />
        </ToggleGroupItem>
        <ToggleGroupItem aria-label="Toggle underline" value="underline">
          <UnderlineIcon />
        </ToggleGroupItem>
      </ToggleGroup>
    ),
    title: "Multiple",
  },
];
