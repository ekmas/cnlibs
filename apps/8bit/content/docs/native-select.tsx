import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import type { DocVariant } from "@/content/docs/registry";

export const title = "Native Select";
export const description = "A styled native select element.";

export const links = {
  shadcn: "https://ui.shadcn.com/docs/components/native-select",
};

export const variants: DocVariant[] = [
  {
    code: `import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";

export function NativeSelectDemo() {
  return (
    <NativeSelect defaultValue="apple" aria-label="Fruit">
      <NativeSelectOption value="apple">Apple</NativeSelectOption>
      <NativeSelectOption value="banana">Banana</NativeSelectOption>
      <NativeSelectOption value="blueberry">Blueberry</NativeSelectOption>
      <NativeSelectOption value="grapes">Grapes</NativeSelectOption>
    </NativeSelect>
  );
}`,
    description: "Renders a real browser <select>, styled to match 8bit.",
    id: "default",
    preview: (
      <NativeSelect aria-label="Fruit" defaultValue="apple">
        <NativeSelectOption value="apple">Apple</NativeSelectOption>
        <NativeSelectOption value="banana">Banana</NativeSelectOption>
        <NativeSelectOption value="blueberry">Blueberry</NativeSelectOption>
        <NativeSelectOption value="grapes">Grapes</NativeSelectOption>
      </NativeSelect>
    ),
    title: "Default",
  },
  {
    code: `import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";

export function NativeSelectDisabledDemo() {
  return (
    <NativeSelect disabled defaultValue="apple" aria-label="Fruit">
      <NativeSelectOption value="apple">Apple</NativeSelectOption>
      <NativeSelectOption value="banana">Banana</NativeSelectOption>
    </NativeSelect>
  );
}`,
    description: "Set disabled to prevent the select from being changed.",
    id: "disabled",
    preview: (
      <NativeSelect aria-label="Fruit" defaultValue="apple" disabled>
        <NativeSelectOption value="apple">Apple</NativeSelectOption>
        <NativeSelectOption value="banana">Banana</NativeSelectOption>
      </NativeSelect>
    ),
    title: "Disabled",
  },
];
