import { DemoRow } from "@/components/ascii/component-docs";
import { ComboboxDemo, ComboboxStatesDemo } from "./demos/combobox-demo";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Combobox",
  description: "Autocomplete input with suggestions.",
  sections: [
    {
      title: "example",
      code: `<Combobox items={teammates} itemToStringLabel={(item) => item.label}>
  <ComboboxTrigger chWidth={30}>
    <ComboboxInput placeholder="Assign to..." />
    <ComboboxIcon />
  </ComboboxTrigger>
  <ComboboxContent chWidth={30}>
    {(item) => <ComboboxItem value={item}>{item.label}</ComboboxItem>}
  </ComboboxContent>
</Combobox>`,
      preview: <ComboboxDemo />,
    },
    {
      title: "states",
      code: `<ComboboxContent chWidth={30}>
  {(item) => (
    <ComboboxItem value={item} disabled={item.away}>
      {item.label}
    </ComboboxItem>
  )}
</ComboboxContent>

<Combobox items={teammates} defaultValue={teammates[0]} disabled>
  ...
</Combobox>`,
      preview: (
        <DemoRow label="disabled">
          <ComboboxStatesDemo />
        </DemoRow>
      ),
    },
  ],
};
