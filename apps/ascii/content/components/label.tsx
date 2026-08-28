import { DemoRow } from "@/components/ascii/component-docs";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Label",
  description: "An accessible label associated with a control.",
  sections: [
    {
      title: "variants",
      code: `<Label htmlFor="service">Service name</Label>
<Input id="service" />

<Label>
  <Checkbox /> Email me on deploy failures
</Label>`,
      preview: (
        <>
          <DemoRow label="for a field">
            <div className="flex flex-col">
              <Label htmlFor="label-service">Service name</Label>
              <Input id="label-service" placeholder="payments-api" />
            </div>
          </DemoRow>
          <DemoRow label="wrapping">
            <Label className="font-mono text-foreground text-sm">
              <Checkbox id="label-alerts" />
              Email me on deploy failures
            </Label>
          </DemoRow>
        </>
      ),
    },
  ],
};
