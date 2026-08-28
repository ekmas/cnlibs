import { DemoRow } from "@/components/ascii/component-docs";
import { Toggle } from "@/components/ui/toggle";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Toggle",
  description: "A two-state button that can be on or off.",
  sections: [
    {
      title: "variants",
      code: `<Toggle aria-label="Bold">Bold</Toggle>
<Toggle variant="outline" aria-label="Italic">Italic</Toggle>`,
      preview: (
        <>
          <DemoRow label="default">
            <Toggle aria-label="Bold">Bold</Toggle>
          </DemoRow>
          <DemoRow label="outline">
            <Toggle aria-label="Italic" variant="outline">
              Italic
            </Toggle>
          </DemoRow>
        </>
      ),
    },
    {
      title: "sizes",
      code: `<Toggle size="sm" aria-label="Bold">Bold</Toggle>
<Toggle aria-label="Bold">Bold</Toggle>
<Toggle size="lg" aria-label="Bold">Bold</Toggle>`,
      preview: (
        <>
          <DemoRow label="sm">
            <Toggle aria-label="Bold" size="sm">
              Bold
            </Toggle>
          </DemoRow>
          <DemoRow label="default">
            <Toggle aria-label="Bold">Bold</Toggle>
          </DemoRow>
          <DemoRow label="lg">
            <Toggle aria-label="Bold" size="lg">
              Bold
            </Toggle>
          </DemoRow>
        </>
      ),
    },
    {
      title: "states",
      code: `<Toggle aria-label="Pin thread" defaultPressed>Pin</Toggle>
<Toggle aria-label="Locked" disabled>Locked</Toggle>`,
      preview: (
        <>
          <DemoRow label="pressed">
            <Toggle aria-label="Pin thread" defaultPressed>
              Pin
            </Toggle>
          </DemoRow>
          <DemoRow label="disabled">
            <Toggle aria-label="Locked" disabled>
              Locked
            </Toggle>
          </DemoRow>
        </>
      ),
    },
  ],
};
