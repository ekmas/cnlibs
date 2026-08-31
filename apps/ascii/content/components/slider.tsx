import { Slider } from "@/components/ui/slider";
import { SliderControlledDemo, SliderSteppedDemo } from "./demos/slider-demo";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Slider",
  description: "Pick a value from within a given range.",
  sections: [
    {
      title: "default",
      code: "<Slider defaultValue={40} />",
      preview: <Slider aria-label="Volume" defaultValue={40} />,
    },
    {
      title: "controlled",
      description: "Drive the value from state with value / onValueChange.",
      code: `const [concurrency, setConcurrency] = React.useState(8)

<Slider min={1} max={32} value={concurrency} onValueChange={setConcurrency} />`,
      preview: <SliderControlledDemo />,
    },
    {
      title: "stepped",
      description: "step snaps the thumb to multiples of a value.",
      code: "<Slider min={0} max={16} step={2} value={replicas} onValueChange={setReplicas} />",
      preview: <SliderSteppedDemo />,
    },
    {
      title: "narrow track",
      description: "chWidth sets the track length in characters.",
      code: "<Slider defaultValue={40} chWidth={12} />",
      preview: <Slider aria-label="Volume" chWidth={12} defaultValue={40} />,
    },
    {
      title: "disabled",
      code: "<Slider defaultValue={60} disabled />",
      preview: <Slider aria-label="Locked" defaultValue={60} disabled />,
    },
  ],
};
