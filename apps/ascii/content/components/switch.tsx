import { DemoRow } from "@/components/ascii/component-docs";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Switch",
  description: "Toggle between checked and not checked.",
  sections: [
    {
      title: "states",
      code: `<Label>
  <Switch /> auto-updates
</Label>

<Label>
  <Switch defaultChecked /> telemetry
</Label>

<Label>
  <Switch disabled /> maintenance mode
</Label>`,
      preview: (
        <>
          <DemoRow label="off">
            <Label className="font-mono text-foreground text-sm">
              <Switch /> auto-updates
            </Label>
          </DemoRow>
          <DemoRow label="on">
            <Label className="font-mono text-foreground text-sm">
              <Switch defaultChecked /> telemetry
            </Label>
          </DemoRow>
          <DemoRow label="disabled">
            <Label className="font-mono text-foreground text-sm">
              <Switch disabled />
              <span className="text-muted-foreground">maintenance mode</span>
            </Label>
          </DemoRow>
        </>
      ),
    },
  ],
};
