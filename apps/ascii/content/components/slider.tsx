import { DemoRow } from "@/components/ascii/component-docs";
import { Slider } from "@/components/ui/slider";
import { SliderDemo } from "./demos/slider-demo";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Slider",
  description: "Pick a value from within a given range.",
  sections: [
    {
      title: "variants",
      code: `<Slider min={1} max={32} value={value} onValueChange={setValue} />
<Slider defaultValue={40} chWidth={12} />`,
      preview: <SliderDemo />,
    },
    {
      title: "states",
      code: "<Slider defaultValue={60} disabled />",
      preview: (
        <DemoRow label="disabled">
          <Slider aria-label="Locked" defaultValue={60} disabled />
        </DemoRow>
      ),
    },
  ],
};
