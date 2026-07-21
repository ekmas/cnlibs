import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import type { DocVariant } from "@/content/docs/registry";

export const title = "Radio Group";
export const description =
  "A set of checkable buttons where no more than one can be checked at a time.";

export const links = {
  shadcn: "https://ui.shadcn.com/docs/components/radio-group",
};

export const variants: DocVariant[] = [
  {
    code: `import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function RadioGroupDemo() {
  return (
    <RadioGroup className="max-w-md" defaultValue="comfortable">
      <div className="flex items-center gap-2">
        <RadioGroupItem id="r1" value="default" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem id="r2" value="comfortable" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem id="r3" value="compact" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  );
}`,
    description: "Set defaultValue to preselect an item in the group.",
    id: "default",
    preview: (
      <RadioGroup className="max-w-md" defaultValue="comfortable">
        <div className="flex items-center gap-2">
          <RadioGroupItem id="r1" value="default" />
          <Label htmlFor="r1">Default</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem id="r2" value="comfortable" />
          <Label htmlFor="r2">Comfortable</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem id="r3" value="compact" />
          <Label htmlFor="r3">Compact</Label>
        </div>
      </RadioGroup>
    ),
    title: "Default",
  },
  {
    code: `import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function RadioGroupDisabledDemo() {
  return (
    <RadioGroup className="max-w-md" defaultValue="default">
      <div className="flex items-center gap-2">
        <RadioGroupItem id="r1-disabled" value="default" />
        <Label htmlFor="r1-disabled">Available</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem disabled id="r2-disabled" value="comfortable" />
        <Label htmlFor="r2-disabled">Disabled</Label>
      </div>
    </RadioGroup>
  );
}`,
    description:
      "Disable an individual item to prevent it from being selected.",
    id: "disabled",
    preview: (
      <RadioGroup className="max-w-md" defaultValue="default">
        <div className="flex items-center gap-2">
          <RadioGroupItem id="r1-disabled" value="default" />
          <Label htmlFor="r1-disabled">Available</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem disabled id="r2-disabled" value="comfortable" />
          <Label htmlFor="r2-disabled">Disabled</Label>
        </div>
      </RadioGroup>
    ),
    title: "Disabled",
  },
];
