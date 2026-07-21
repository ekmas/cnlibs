import { Input } from "@/components/ui/input";
import type { DocVariant } from "@/content/docs/registry";

export const title = "Input";
export const description =
  "Displays a form input field or a component that looks like an input field.";

export const links = {
  shadcn: "https://ui.shadcn.com/docs/components/input",
};

export const variants: DocVariant[] = [
  {
    code: `import { Input } from "@/components/ui/input";

export function InputDemo() {
  return <Input className="w-full max-w-sm" placeholder="Email" type="email" />;
}`,
    description: "A standard text input.",
    id: "default",
    preview: (
      <Input className="w-full max-w-sm" placeholder="Email" type="email" />
    ),
    title: "Default",
  },
  {
    code: `import { Input } from "@/components/ui/input";

export function InputDisabledDemo() {
  return (
    <Input className="w-full max-w-sm" disabled placeholder="Email" type="email" />
  );
}`,
    description: "Set disabled to prevent interaction with the input.",
    id: "disabled",
    preview: (
      <Input
        className="w-full max-w-sm"
        disabled
        placeholder="Email"
        type="email"
      />
    ),
    title: "Disabled",
  },
];
