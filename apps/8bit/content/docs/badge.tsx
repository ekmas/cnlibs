import { CheckIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { DocVariant } from "@/content/docs/registry";

export const title = "Badge";
export const description =
  "Displays a badge or a component that looks like a badge.";

export const links = {
  shadcn: "https://ui.shadcn.com/docs/components/badge",
};

export const variants: DocVariant[] = [
  {
    code: `import { Badge } from "@/components/ui/badge";

export function BadgeDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  );
}`,
    description: "Badges come in a few variants to signal different states.",
    id: "default",
    preview: (
      <div className="flex flex-wrap items-center gap-2">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
    ),
    title: "Default",
  },
  {
    code: `import { CheckIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function BadgeWithIconDemo() {
  return (
    <Badge variant="secondary">
      <CheckIcon data-icon="inline-start" />
      Verified
    </Badge>
  );
}`,
    description: "Badges can include an inline icon before the label.",
    id: "with-icon",
    preview: (
      <Badge variant="secondary">
        <CheckIcon data-icon="inline-start" />
        Verified
      </Badge>
    ),
    title: "With Icon",
  },
];
