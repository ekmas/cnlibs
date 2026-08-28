import { ButtonGroupDemo } from "./demos/button-group-demo";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Button Group",
  description: "Related buttons grouped together.",
  sections: [
    {
      title: "example",
      code: `<ButtonGroup>
  <Button variant="ghost">Day</Button>
  <Button>Week</Button>
  <Button variant="ghost">Month</Button>
</ButtonGroup>`,
      preview: <ButtonGroupDemo />,
    },
  ],
};
