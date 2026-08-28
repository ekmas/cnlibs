import { DemoRow } from "@/components/ascii/component-docs";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup } from "@/components/ui/toggle-group";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Toggle Group",
  description: "A set of two-state buttons, single or multi select.",
  sections: [
    {
      title: "variants",
      code: `<ToggleGroup aria-label="Text alignment" defaultValue={["left"]}>
  <Toggle value="left">Left</Toggle>
  <Toggle value="center">Center</Toggle>
  <Toggle value="right">Right</Toggle>
</ToggleGroup>

<ToggleGroup aria-label="Text formatting" multiple defaultValue={["bold"]}>
  <Toggle value="bold">Bold</Toggle>
  <Toggle value="italic">Italic</Toggle>
  <Toggle value="underline">Underline</Toggle>
</ToggleGroup>`,
      preview: (
        <>
          <DemoRow label="single">
            <ToggleGroup aria-label="Text alignment" defaultValue={["left"]}>
              <Toggle value="left">Left</Toggle>
              <Toggle value="center">Center</Toggle>
              <Toggle value="right">Right</Toggle>
            </ToggleGroup>
          </DemoRow>
          <DemoRow label="multiple">
            <ToggleGroup
              aria-label="Text formatting"
              defaultValue={["bold"]}
              multiple
            >
              <Toggle value="bold">Bold</Toggle>
              <Toggle value="italic">Italic</Toggle>
              <Toggle value="underline">Underline</Toggle>
            </ToggleGroup>
          </DemoRow>
        </>
      ),
    },
    {
      title: "states",
      code: `<ToggleGroup aria-label="Locked group" disabled defaultValue={["a"]}>
  <Toggle value="a">On</Toggle>
  <Toggle value="b">Off</Toggle>
</ToggleGroup>`,
      preview: (
        <DemoRow label="disabled">
          <ToggleGroup aria-label="Locked group" defaultValue={["a"]} disabled>
            <Toggle value="a">On</Toggle>
            <Toggle value="b">Off</Toggle>
          </ToggleGroup>
        </DemoRow>
      ),
    },
  ],
};
