import { DemoRow } from "@/components/ascii/component-docs";
import { Label } from "@/components/ui/label";
import { NativeSelect } from "@/components/ui/native-select";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Native Select",
  description: "A styled native select element.",
  sections: [
    {
      title: "variants",
      code: `<Label htmlFor="env">Environment</Label>
<NativeSelect id="env" defaultValue="production" chWidth={28}>
  <option value="production">Production</option>
  <option value="staging">Staging</option>
  <option value="development">Development</option>
</NativeSelect>

<NativeSelect defaultValue="us" chWidth={40} aria-label="Region">
  <option value="us">us-east-1 — N. Virginia</option>
  <option value="eu">eu-west-1 — Ireland</option>
  <option value="ap">ap-southeast-2 — Sydney</option>
</NativeSelect>`,
      preview: (
        <>
          <DemoRow label="default">
            <div className="flex flex-col">
              <Label htmlFor="native-select-env">Environment</Label>
              <NativeSelect
                chWidth={28}
                defaultValue="production"
                id="native-select-env"
              >
                <option value="production">Production</option>
                <option value="staging">Staging</option>
                <option value="development">Development</option>
              </NativeSelect>
            </div>
          </DemoRow>
          <DemoRow label="wide">
            <NativeSelect aria-label="Region" chWidth={40} defaultValue="us">
              <option value="us">us-east-1 — N. Virginia</option>
              <option value="eu">eu-west-1 — Ireland</option>
              <option value="ap">ap-southeast-2 — Sydney</option>
            </NativeSelect>
          </DemoRow>
        </>
      ),
    },
    {
      title: "states",
      code: `<NativeSelect disabled defaultValue="locked" chWidth={28} aria-label="Locked">
  <option value="locked">Managed by org</option>
</NativeSelect>`,
      preview: (
        <DemoRow label="disabled">
          <NativeSelect
            aria-label="Locked"
            chWidth={28}
            defaultValue="locked"
            disabled
          >
            <option value="locked">Managed by org</option>
          </NativeSelect>
        </DemoRow>
      ),
    },
  ],
};
