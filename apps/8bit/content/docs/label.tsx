import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { DocVariant } from "@/content/docs/registry";

export const title = "Label";
export const description =
  "Renders an accessible label associated with controls.";

export const links = {
  shadcn: "https://ui.shadcn.com/docs/components/label",
};

export const variants: DocVariant[] = [
  {
    code: `import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LabelDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Label htmlFor="label-demo-email">Email</Label>
      <Input id="label-demo-email" placeholder="Email" type="email" />
    </div>
  );
}`,
    description: "Associate a Label with a form control using htmlFor and id.",
    id: "default",
    preview: (
      <div className="flex w-full max-w-sm flex-col gap-2">
        <Label htmlFor="label-demo-email">Email</Label>
        <Input id="label-demo-email" placeholder="Email" type="email" />
      </div>
    ),
    title: "Default",
  },
];
