import { DemoRow } from "@/components/ascii/component-docs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Input",
  description: "Text input for forms and user data entry.",
  sections: [
    {
      title: "variants",
      code: `<Input placeholder="sam@paper.design" />
<Input type="password" defaultValue="hunter2hunter2" />
<Input type="number" defaultValue={8080} chWidth={14} />
<Input chWidth={20} placeholder="us-east-1" />`,
      preview: (
        <>
          <DemoRow label="text">
            <Input aria-label="Email" placeholder="sam@paper.design" />
          </DemoRow>
          <DemoRow label="password">
            <Input
              aria-label="Password"
              defaultValue="hunter2hunter2"
              type="password"
            />
          </DemoRow>
          <DemoRow label="number">
            <Input
              aria-label="Port"
              chWidth={14}
              defaultValue={8080}
              type="number"
            />
          </DemoRow>
          <DemoRow label="narrow">
            <Input aria-label="Region" chWidth={20} placeholder="us-east-1" />
          </DemoRow>
        </>
      ),
    },
    {
      title: "states",
      code: `<Input placeholder="not editable" disabled />
<Input defaultValue="prj_8f2a91c4" readOnly />

<Label htmlFor="email">Email address</Label>
<Input id="email" placeholder="sam@paper.design" />`,
      preview: (
        <>
          <DemoRow label="disabled">
            <Input aria-label="Disabled" disabled placeholder="not editable" />
          </DemoRow>
          <DemoRow label="read-only">
            <Input
              aria-label="Project id"
              defaultValue="prj_8f2a91c4"
              readOnly
            />
          </DemoRow>
          <DemoRow label="with label">
            <div className="flex flex-col">
              <Label htmlFor="input-email">Email address</Label>
              <Input id="input-email" placeholder="sam@paper.design" />
            </div>
          </DemoRow>
        </>
      ),
    },
  ],
};
