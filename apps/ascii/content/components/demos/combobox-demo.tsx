"use client";

import {
  Combobox,
  ComboboxContent,
  ComboboxIcon,
  ComboboxInput,
  ComboboxItem,
  ComboboxTrigger,
} from "@/components/ui/combobox";

type Teammate = { value: string; label: string; away?: boolean };

const teammates: Teammate[] = [
  { value: "sam", label: "Samuel Breznjak" },
  { value: "mia", label: "Mia Kowalski" },
  { value: "dev", label: "Dev Tran", away: true },
  { value: "priya", label: "Priya Nair" },
  { value: "leo", label: "Leo Alvarez" },
];

function labelOf(item: Teammate) {
  return item.label;
}

export function ComboboxDemo() {
  return (
    <Combobox items={teammates} itemToStringLabel={labelOf}>
      <ComboboxTrigger chWidth={30}>
        <ComboboxInput placeholder="Assign to..." />
        <ComboboxIcon />
      </ComboboxTrigger>
      <ComboboxContent chWidth={30}>
        {(item: Teammate) => (
          <ComboboxItem key={item.value} value={item}>
            {item.label}
          </ComboboxItem>
        )}
      </ComboboxContent>
    </Combobox>
  );
}

/** Items can be disabled individually; the whole field can be too. */
export function ComboboxStatesDemo() {
  return (
    <>
      <Combobox items={teammates} itemToStringLabel={labelOf}>
        <ComboboxTrigger chWidth={30}>
          <ComboboxInput placeholder="Reviewer..." />
          <ComboboxIcon />
        </ComboboxTrigger>
        <ComboboxContent chWidth={30}>
          {(item: Teammate) => (
            <ComboboxItem disabled={item.away} key={item.value} value={item}>
              {item.label}
              {item.away ? " (away)" : ""}
            </ComboboxItem>
          )}
        </ComboboxContent>
      </Combobox>
      <Combobox
        defaultValue={teammates[0]}
        disabled
        items={teammates}
        itemToStringLabel={labelOf}
      >
        <ComboboxTrigger chWidth={30}>
          <ComboboxInput aria-label="Owner" />
          <ComboboxIcon />
        </ComboboxTrigger>
        <ComboboxContent chWidth={30}>
          {(item: Teammate) => (
            <ComboboxItem key={item.value} value={item}>
              {item.label}
            </ComboboxItem>
          )}
        </ComboboxContent>
      </Combobox>
    </>
  );
}
