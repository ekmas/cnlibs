import { Progress } from "@/components/ui/progress";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Progress",
  description: "Shows completion progress of a task.",
  sections: [
    {
      title: "default",
      code: "<Progress value={62} />",
      preview: <Progress value={62} />,
    },
    {
      title: "complete",
      code: "<Progress value={100} />",
      preview: <Progress value={100} />,
    },
    {
      title: "custom label",
      description: "label replaces the percentage next to the bar.",
      code: `<Progress value={62} label="62 of 100 MB" />`,
      preview: <Progress label="62 of 100 MB" value={62} />,
    },
    {
      title: "wide bar",
      description: "barWidth sets the bar length in characters (default 20).",
      code: "<Progress value={62} barWidth={32} />",
      preview: <Progress barWidth={32} value={62} />,
    },
    {
      title: "custom range",
      code: `<Progress value={3} min={0} max={8} label="3 / 8 steps" />`,
      preview: <Progress label="3 / 8 steps" max={8} min={0} value={3} />,
    },
    {
      title: "empty",
      code: "<Progress value={0} />",
      preview: <Progress value={0} />,
    },
    {
      title: "indeterminate",
      description:
        "value={null} draws an empty bar for work of unknown length.",
      code: `<Progress value={null} label="indexing..." />`,
      preview: <Progress label="indexing..." value={null} />,
    },
  ],
};
