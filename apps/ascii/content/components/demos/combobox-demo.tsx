"use client";

import {
  Combobox,
  ComboboxContent,
  ComboboxIcon,
  ComboboxInput,
  ComboboxItem,
  ComboboxTrigger,
} from "@/components/ui/combobox";

const teammates = [
  { value: "sam", label: "Samuel Breznjak" },
  { value: "mia", label: "Mia Kowalski" },
  { value: "dev", label: "Dev Tran" },
  { value: "priya", label: "Priya Nair" },
  { value: "leo", label: "Leo Alvarez" },
];

export function ComboboxDemo() {
  return (
    <Combobox
      items={teammates}
      itemToStringLabel={(item: (typeof teammates)[number]) => item.label}
    >
      <ComboboxTrigger chWidth={30}>
        <ComboboxInput placeholder="Assign to..." />
        <ComboboxIcon />
      </ComboboxTrigger>
      <ComboboxContent chWidth={30}>
        {(item: (typeof teammates)[number]) => (
          <ComboboxItem key={item.value} value={item}>
            {item.label}
          </ComboboxItem>
        )}
      </ComboboxContent>
    </Combobox>
  );
}
