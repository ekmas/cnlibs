import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import type { ComponentDoc } from "./types";

const labelClass = "font-mono text-foreground text-sm";

export const doc: ComponentDoc = {
  title: "Switch",
  description: "Toggle between checked and not checked.",
  sections: [
    {
      title: "default",
      code: `<Label>
  <Switch /> auto-updates
</Label>`,
      preview: (
        <Label className={labelClass}>
          <Switch /> auto-updates
        </Label>
      ),
    },
    {
      title: "checked",
      code: `<Label>
  <Switch defaultChecked /> telemetry
</Label>`,
      preview: (
        <Label className={labelClass}>
          <Switch defaultChecked /> telemetry
        </Label>
      ),
    },
    {
      title: "disabled",
      code: `<Label>
  <Switch disabled /> maintenance mode
</Label>`,
      preview: (
        <Label className={labelClass}>
          <Switch disabled />
          <span className="text-muted-foreground">maintenance mode</span>
        </Label>
      ),
    },
  ],
};
