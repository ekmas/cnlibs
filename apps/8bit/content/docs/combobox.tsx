import { ComboboxClearDemo } from "@/components/docs/examples/combobox-clear-demo";
import { ComboboxDemo } from "@/components/docs/examples/combobox-demo";
import { ComboboxDisabledDemo } from "@/components/docs/examples/combobox-disabled-demo";
import { ComboboxGroupsDemo } from "@/components/docs/examples/combobox-groups-demo";
import { ComboboxMultipleDemo } from "@/components/docs/examples/combobox-multiple-demo";
import type { DocVariant } from "@/content/docs/registry";

export const title = "Combobox";
export const description = "Autocomplete input with a list of suggestions.";

export const links = {
  shadcn: "https://ui.shadcn.com/docs/components/combobox",
};

export const variants: DocVariant[] = [
  {
    code: `import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"];

export function ComboboxDemo() {
  return (
    <Combobox items={frameworks}>
      <ComboboxInput className="w-56" placeholder="Select a framework" />
      <ComboboxContent>
        <ComboboxEmpty>No framework found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}`,
    description: "Pass an items array to filter the list as the user types.",
    id: "default",
    preview: <ComboboxDemo />,
    title: "Default",
  },
  {
    code: `import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
} from "@/components/ui/combobox";

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"];

export function ComboboxMultipleDemo() {
  return (
    <Combobox defaultValue={["Next.js", "Remix"]} items={frameworks} multiple>
      <ComboboxChips className="w-72">
        <ComboboxValue>
          {(value: string[]) =>
            value.map((item) => (
              <ComboboxChip key={item}>{item}</ComboboxChip>
            ))
          }
        </ComboboxValue>
        <ComboboxChipsInput placeholder="Add framework" />
      </ComboboxChips>
      <ComboboxContent>
        <ComboboxEmpty>No framework found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}`,
    description:
      "Set multiple with ComboboxChips for a multi-select input with removable chips.",
    id: "multiple",
    preview: <ComboboxMultipleDemo />,
    title: "Multiple",
  },
  {
    code: `import {
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
}`,
    description:
      "Use ComboboxGroup and ComboboxCollection to organize items under labels.",
    id: "groups",
    preview: <ComboboxGroupsDemo />,
    title: "Groups",
  },
  {
    code: `import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"];

export function ComboboxClearDemo() {
  return (
    <Combobox defaultValue="Next.js" items={frameworks}>
      <ComboboxInput
        className="w-56"
        placeholder="Select a framework"
        showClear
      />
      <ComboboxContent>
        <ComboboxEmpty>No framework found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}`,
    description: "Set showClear on ComboboxInput to show a clear button.",
    id: "clear",
    preview: <ComboboxClearDemo />,
    title: "Clear Button",
  },
  {
    code: `import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"];

export function ComboboxDisabledDemo() {
  return (
    <Combobox disabled items={frameworks}>
      <ComboboxInput
        className="w-56"
        disabled
        placeholder="Select a framework"
      />
      <ComboboxContent>
        <ComboboxEmpty>No framework found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}`,
    description: "Set disabled on Combobox to disable the entire input.",
    id: "disabled",
    preview: <ComboboxDisabledDemo />,
    title: "Disabled",
  },
];
