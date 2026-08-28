import { DemoRow } from "@/components/ascii/component-docs";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Checkbox",
  description: "Toggle between checked and not checked.",
  sections: [
    {
      title: "states",
      code: `<Label>
  <Checkbox /> verbose logging
</Label>

<Label>
  <Checkbox defaultChecked /> auto-deploy on push
</Label>

<Label>
  <Checkbox disabled /> SSO required
</Label>

<Label>
  <Checkbox disabled defaultChecked /> managed by org
</Label>`,
      preview: (
        <>
          <DemoRow label="unchecked">
            <Label className="font-mono text-foreground text-sm">
              <Checkbox /> verbose logging
            </Label>
          </DemoRow>
          <DemoRow label="checked">
            <Label className="font-mono text-foreground text-sm">
              <Checkbox defaultChecked /> auto-deploy on push
            </Label>
          </DemoRow>
          <DemoRow label="disabled">
            <Label className="font-mono text-foreground text-sm">
              <Checkbox disabled />
              <span className="text-muted-foreground">SSO required</span>
            </Label>
          </DemoRow>
          <DemoRow label="disabled + on">
            <Label className="font-mono text-foreground text-sm">
              <Checkbox defaultChecked disabled />
              <span className="text-muted-foreground">managed by org</span>
            </Label>
          </DemoRow>
        </>
      ),
    },
  ],
};
