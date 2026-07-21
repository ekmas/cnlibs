import { Slider } from "@/components/ui/slider";
import type { DocVariant } from "@/content/docs/registry";

export const title = "Slider";
export const description =
  "An input where the user selects a value from within a given range.";

export const links = {
  shadcn: "https://ui.shadcn.com/docs/components/slider",
};

export const variants: DocVariant[] = [
  {
    code: `import { Slider } from "@/components/ui/slider";

export function SliderDemo() {
  return <Slider className="w-full max-w-md" defaultValue={[50]} />;
}`,
    description: "A single thumb slider with an uncontrolled default value.",
    id: "default",
    preview: <Slider className="w-full max-w-md" defaultValue={[50]} />,
    title: "Default",
  },
  {
    code: `import { Slider } from "@/components/ui/slider";

export function SliderRangeDemo() {
  return <Slider className="w-full max-w-md" defaultValue={[25, 75]} />;
}`,
    description:
      "Pass an array with two values to render a range slider with two thumbs.",
    id: "range",
    preview: <Slider className="w-full max-w-md" defaultValue={[25, 75]} />,
    title: "Range",
  },
];
