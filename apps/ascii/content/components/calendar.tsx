import { CalendarDemo } from "./demos/calendar-demo";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Calendar",
  description: "Pick a date or a range of dates.",
  sections: [
    {
      title: "default",
      code: `const [selected, setSelected] = React.useState<Date>()

<Calendar selected={selected} onSelect={setSelected} />`,
      preview: <CalendarDemo />,
    },
  ],
};
