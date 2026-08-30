import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Label",
  description: "An accessible label associated with a control.",
  sections: [
    {
      title: "default",
      code: `<Label htmlFor="service">Service name</Label>
<Input id="service" />`,
      preview: (
        <div className="flex flex-col">
          <Label htmlFor="label-service">Service name</Label>
          <Input id="label-service" placeholder="payments-api" />
        </div>
      ),
    },
    {
      title: "wrapping a control",
      description:
        "Wrap a checkbox, switch or radio so the whole row toggles it.",
      code: `<Label>
  <Checkbox /> Email me on deploy failures
</Label>`,
      preview: (
        <Label className="font-mono text-foreground text-sm">
          <Checkbox id="label-alerts" />
          Email me on deploy failures
        </Label>
      ),
    },
  ],
};
