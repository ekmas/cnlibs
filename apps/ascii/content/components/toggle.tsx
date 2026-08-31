import { Toggle } from "@/components/ui/toggle";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Toggle",
  description: "A two-state button that can be on or off.",
  sections: [
    {
      title: "default",
      code: `<Toggle aria-label="Bold">Bold</Toggle>`,
      preview: <Toggle aria-label="Bold">Bold</Toggle>,
    },
    {
      title: "outline",
      code: `<Toggle variant="outline" aria-label="Italic">Italic</Toggle>`,
      preview: (
        <Toggle aria-label="Italic" variant="outline">
          Italic
        </Toggle>
      ),
    },
    {
      title: "small",
      code: `<Toggle size="sm" aria-label="Bold">Bold</Toggle>`,
      preview: (
        <Toggle aria-label="Bold" size="sm">
          Bold
        </Toggle>
      ),
    },
    {
      title: "large",
      code: `<Toggle size="lg" aria-label="Bold">Bold</Toggle>`,
      preview: (
        <Toggle aria-label="Bold" size="lg">
          Bold
        </Toggle>
      ),
    },
    {
      title: "pressed",
      code: `<Toggle aria-label="Pin thread" defaultPressed>Pin</Toggle>`,
      preview: (
        <Toggle aria-label="Pin thread" defaultPressed>
          Pin
        </Toggle>
      ),
    },
    {
      title: "disabled",
      code: `<Toggle aria-label="Locked" disabled>Locked</Toggle>`,
      preview: (
        <Toggle aria-label="Locked" disabled>
          Locked
        </Toggle>
      ),
    },
  ],
};
