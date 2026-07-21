import { Textarea } from "@/components/ui/textarea";
import type { DocVariant } from "@/content/docs/registry";

export const title = "Textarea";
export const description =
  "Displays a form textarea or a component that looks like a textarea.";

export const links = {
  shadcn: "https://ui.shadcn.com/docs/components/textarea",
};

export const variants: DocVariant[] = [
  {
    code: `import { Textarea } from "@/components/ui/textarea";

export function TextareaDemo() {
  return (
    <Textarea
      className="w-full max-w-md"
      placeholder="Type your message here."
    />
  );
}`,
    description: "A plain multi-line text input.",
    id: "default",
    preview: (
      <Textarea
        className="w-full max-w-md"
        placeholder="Type your message here."
      />
    ),
    title: "Default",
  },
];
