import { DemoRow } from "@/components/ascii/component-docs";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Radio Group",
  description: "Only one option can be checked at a time.",
  sections: [
    {
      title: "example",
      code: `<RadioGroup defaultValue="pro">
  <Label>
    <RadioGroupItem value="free" />
    Free — 1 project
  </Label>
  <Label>
    <RadioGroupItem value="pro" />
    Pro — unlimited projects
  </Label>
  <Label>
    <RadioGroupItem value="team" />
    Team — shared workspace
  </Label>
</RadioGroup>`,
      preview: (
        <RadioGroup className="w-[36ch]" defaultValue="pro">
          <Label className="font-mono text-foreground text-sm">
            <RadioGroupItem value="free" />
            Free — 1 project
          </Label>
          <Label className="font-mono text-foreground text-sm">
            <RadioGroupItem value="pro" />
            Pro — unlimited projects
          </Label>
          <Label className="font-mono text-foreground text-sm">
            <RadioGroupItem value="team" />
            Team — shared workspace
          </Label>
        </RadioGroup>
      ),
    },
    {
      title: "states",
      code: `<RadioGroup defaultValue="a" disabled>
  <Label>
    <RadioGroupItem value="a" />
    locked by admin
  </Label>
</RadioGroup>`,
      preview: (
        <DemoRow label="disabled">
          <RadioGroup defaultValue="a" disabled>
            <Label className="font-mono text-muted-foreground text-sm">
              <RadioGroupItem value="a" />
              locked by admin
            </Label>
          </RadioGroup>
        </DemoRow>
      ),
    },
  ],
};
