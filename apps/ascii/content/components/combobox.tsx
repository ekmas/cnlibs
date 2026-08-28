import { ComboboxDemo } from "./demos/combobox-demo";
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
  ],
};
