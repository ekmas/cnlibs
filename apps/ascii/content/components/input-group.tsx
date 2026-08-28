import { DemoRow } from "@/components/ascii/component-docs";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Input Group",
  description: "Icons, buttons and helper content on inputs.",
  sections: [
    {
      title: "variants",
      code: `<InputGroup chWidth={40}>
  <InputGroupAddon>https://</InputGroupAddon>
  <InputGroupInput aria-label="Domain" defaultValue="hooks.example.com" />
</InputGroup>

<InputGroup chWidth={30}>
  <InputGroupInput aria-label="Weight" defaultValue="128" />
  <InputGroupAddon className="pr-[2ch]">MB</InputGroupAddon>
</InputGroup>

<Label htmlFor="webhook">Webhook URL</Label>
<InputGroup chWidth={50}>
  <InputGroupAddon>https://</InputGroupAddon>
  <InputGroupInput id="webhook" defaultValue="hooks.example.com/deploy" />
  <InputGroupAddon>
    <button
      type="button"
      className="outline-none select-none hover:text-primary focus-visible:text-primary"
    >
      Copy
    </button>
  </InputGroupAddon>
</InputGroup>`,
      preview: (
        <>
          <DemoRow label="prefix">
            <InputGroup chWidth={40}>
              <InputGroupAddon>https://</InputGroupAddon>
              <InputGroupInput
                aria-label="Domain"
                defaultValue="hooks.example.com"
              />
            </InputGroup>
          </DemoRow>
          <DemoRow label="suffix">
            <InputGroup chWidth={30}>
              <InputGroupInput aria-label="Weight" defaultValue="128" />
              <InputGroupAddon className="pr-[2ch]">MB</InputGroupAddon>
            </InputGroup>
          </DemoRow>
          <DemoRow label="with button">
            <div className="flex flex-col">
              <Label htmlFor="input-group-webhook">Webhook URL</Label>
              <InputGroup chWidth={50}>
                <InputGroupAddon>https://</InputGroupAddon>
                <InputGroupInput
                  defaultValue="hooks.example.com/deploy"
                  id="input-group-webhook"
                />
                <InputGroupAddon>
                  <button
                    className="select-none outline-none hover:text-primary focus-visible:text-primary"
                    type="button"
                  >
                    Copy
                  </button>
                </InputGroupAddon>
              </InputGroup>
            </div>
          </DemoRow>
        </>
      ),
    },
  ],
};
