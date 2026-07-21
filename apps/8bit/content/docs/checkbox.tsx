import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import type { DocVariant } from "@/content/docs/registry";

export const title = "Checkbox";
export const description =
  "A control that allows the user to toggle between checked and not checked.";

export const links = {
  shadcn: "https://ui.shadcn.com/docs/components/checkbox",
};

export const variants: DocVariant[] = [
  {
    code: `import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function CheckboxDemo() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox defaultChecked id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  );
}`,
    description: "A single checkbox paired with a label.",
    id: "default",
    preview: (
      <div className="flex items-center gap-2">
        <Checkbox defaultChecked id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    ),
    title: "Default",
  },
  {
    code: `import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function CheckboxDisabledDemo() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox disabled id="disabled-newsletter" />
      <Label htmlFor="disabled-newsletter">Subscribe to newsletter</Label>
    </div>
  );
}`,
    description: "Set disabled to prevent the checkbox from being toggled.",
    id: "disabled",
    preview: (
      <div className="flex items-center gap-2">
        <Checkbox disabled id="disabled-newsletter" />
        <Label htmlFor="disabled-newsletter">Subscribe to newsletter</Label>
      </div>
    ),
    title: "Disabled",
  },
];
