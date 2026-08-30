import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Input",
  description: "Text input for forms and user data entry.",
  sections: [
    {
      title: "default",
      code: `<Input placeholder="sam@paper.design" />`,
      preview: <Input aria-label="Email" placeholder="sam@paper.design" />,
    },
    {
      title: "with label",
      code: `<Label htmlFor="email">Email address</Label>
<Input id="email" placeholder="sam@paper.design" />`,
      preview: (
        <div className="flex flex-col">
          <Label htmlFor="input-email">Email address</Label>
          <Input id="input-email" placeholder="sam@paper.design" />
        </div>
      ),
    },
    {
      title: "password",
      description:
        "The value is masked with asterisks instead of the browser's dots.",
      code: `<Input type="password" defaultValue="hunter2hunter2" />`,
      preview: (
        <Input
          aria-label="Password"
          defaultValue="hunter2hunter2"
          type="password"
        />
      ),
    },
    {
      title: "number",
      description: "The frame's right corners double as step up / step down.",
      code: `<Input type="number" defaultValue={8080} chWidth={14} />`,
      preview: (
        <Input
          aria-label="Port"
          chWidth={14}
          defaultValue={8080}
          type="number"
        />
      ),
    },
    {
      title: "narrow",
      description: "chWidth sets the frame width in characters (default 34).",
      code: `<Input chWidth={20} placeholder="us-east-1" />`,
      preview: (
        <Input aria-label="Region" chWidth={20} placeholder="us-east-1" />
      ),
    },
    {
      title: "disabled",
      code: `<Input placeholder="not editable" disabled />`,
      preview: (
        <Input aria-label="Disabled" disabled placeholder="not editable" />
      ),
    },
    {
      title: "read-only",
      code: `<Input defaultValue="prj_8f2a91c4" readOnly />`,
      preview: (
        <Input aria-label="Project id" defaultValue="prj_8f2a91c4" readOnly />
      ),
    },
  ],
};
