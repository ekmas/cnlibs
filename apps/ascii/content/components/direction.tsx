import { DirectionDemo } from "./demos/direction-demo";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Direction",
  description: "Sets the text direction for your app.",
  sections: [
    {
      title: "example",
      code: `<DirectionProvider direction={direction}>
  <div dir={direction} className="flex items-center gap-[1ch]">
    <Button variant="ghost">Back</Button>
    <span>/</span>
    <span>docs</span>
    <span>/</span>
    <span className="text-primary">install</span>
    <Button variant="ghost">Next</Button>
  </div>
</DirectionProvider>`,
      preview: <DirectionDemo />,
    },
  ],
};
