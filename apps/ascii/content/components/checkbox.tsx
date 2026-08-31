import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import type { ComponentDoc } from "./types";

const labelClass = "font-mono text-foreground text-sm";

export const doc: ComponentDoc = {
  title: "Checkbox",
  description: "Toggle between checked and not checked.",
  sections: [
    {
      title: "default",
      code: `<Label>
  <Checkbox /> verbose logging
</Label>`,
      preview: (
        <Label className={labelClass}>
          <Checkbox /> verbose logging
        </Label>
      ),
    },
    {
      title: "checked",
      code: `<Label>
  <Checkbox defaultChecked /> auto-deploy on push
</Label>`,
      preview: (
        <Label className={labelClass}>
          <Checkbox defaultChecked /> auto-deploy on push
        </Label>
      ),
    },
    {
      title: "disabled",
      code: `<Label>
  <Checkbox disabled /> SSO required
</Label>`,
      preview: (
        <Label className={labelClass}>
          <Checkbox disabled />
          <span className="text-muted-foreground">SSO required</span>
        </Label>
      ),
    },
    {
      title: "disabled and checked",
      code: `<Label>
  <Checkbox disabled defaultChecked /> managed by org
</Label>`,
      preview: (
        <Label className={labelClass}>
          <Checkbox defaultChecked disabled />
          <span className="text-muted-foreground">managed by org</span>
        </Label>
      ),
    },
  ],
};
