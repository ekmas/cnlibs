import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import type { DocVariant } from "@/content/docs/registry";

export const title = "Switch";
export const description =
  "A control that allows the user to toggle between on and off.";

export const links = {
  shadcn: "https://ui.shadcn.com/docs/components/switch",
};

export const variants: DocVariant[] = [
  {
    code: `import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function SwitchDemo() {
  return (
    <div className="flex items-center gap-2">
      <Switch defaultChecked id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}`,
    description: "An uncontrolled switch paired with a label.",
    id: "default",
    preview: (
      <div className="flex items-center gap-2">
        <Switch defaultChecked id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
    ),
    title: "Default",
  },
  {
    code: `import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function SwitchDisabledDemo() {
  return (
    <div className="flex items-center gap-2">
      <Switch defaultChecked disabled id="disabled-mode" />
      <Label htmlFor="disabled-mode">Disabled</Label>
    </div>
  );
}`,
    description: "Set disabled to prevent the switch from being toggled.",
    id: "disabled",
    preview: (
      <div className="flex items-center gap-2">
        <Switch defaultChecked disabled id="disabled-mode" />
        <Label htmlFor="disabled-mode">Disabled</Label>
      </div>
    ),
    title: "Disabled",
  },
];
