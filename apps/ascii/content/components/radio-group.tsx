import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import type { ComponentDoc } from "./types";

const labelClass = "font-mono text-foreground text-sm";

export const doc: ComponentDoc = {
  title: "Radio Group",
  description: "Only one option can be checked at a time.",
  sections: [
    {
      title: "default",
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
          <Label className={labelClass}>
            <RadioGroupItem value="free" />
            Free — 1 project
          </Label>
          <Label className={labelClass}>
            <RadioGroupItem value="pro" />
            Pro — unlimited projects
          </Label>
          <Label className={labelClass}>
            <RadioGroupItem value="team" />
            Team — shared workspace
          </Label>
        </RadioGroup>
      ),
    },
    {
      title: "disabled",
      code: `<RadioGroup defaultValue="a" disabled>
  <Label>
    <RadioGroupItem value="a" />
    locked by admin
  </Label>
</RadioGroup>`,
      preview: (
        <RadioGroup defaultValue="a" disabled>
          <Label className="font-mono text-muted-foreground text-sm">
            <RadioGroupItem value="a" />
            locked by admin
          </Label>
        </RadioGroup>
      ),
    },
    {
      title: "disabled item",
      description:
        "A single option can be disabled while the rest stay selectable.",
      code: `<RadioGroup defaultValue="hobby">
  <Label>
    <RadioGroupItem value="hobby" />
    Hobby
  </Label>
  <Label>
    <RadioGroupItem value="enterprise" disabled />
    Enterprise — contact sales
  </Label>
</RadioGroup>`,
      preview: (
        <RadioGroup defaultValue="hobby">
          <Label className={labelClass}>
            <RadioGroupItem value="hobby" />
            Hobby
          </Label>
          <Label className="font-mono text-muted-foreground text-sm">
            <RadioGroupItem disabled value="enterprise" />
            Enterprise — contact sales
          </Label>
        </RadioGroup>
      ),
    },
  ],
};
