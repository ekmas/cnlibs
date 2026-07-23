"use client";

import {
  Combobox,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSeparator,
} from "@/components/ui/combobox";

const frontend = ["React", "Vue", "Svelte"];
const backend = ["Express", "Fastify", "NestJS"];

export function ComboboxGroupsDemo() {
  return (
    <Combobox items={[...frontend, ...backend]}>
      <ComboboxInput className="w-56" placeholder="Select a library" />
      <ComboboxContent>
        <ComboboxEmpty>No library found.</ComboboxEmpty>
        <ComboboxList>
          <ComboboxGroup items={frontend}>
            <ComboboxLabel>Frontend</ComboboxLabel>
            <ComboboxCollection>
              {(item) => (
                <ComboboxItem key={item} value={item}>
                  {item}
                </ComboboxItem>
              )}
            </ComboboxCollection>
          </ComboboxGroup>
          <ComboboxSeparator />
          <ComboboxGroup items={backend}>
            <ComboboxLabel>Backend</ComboboxLabel>
            <ComboboxCollection>
              {(item) => (
                <ComboboxItem key={item} value={item}>
                  {item}
                </ComboboxItem>
              )}
            </ComboboxCollection>
          </ComboboxGroup>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
