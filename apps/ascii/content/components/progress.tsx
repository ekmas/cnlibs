import { DemoRow } from "@/components/ascii/component-docs";
import { Progress } from "@/components/ui/progress";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Progress",
  description: "Shows completion progress of a task.",
  sections: [
    {
      title: "variants",
      code: `<Progress value={62} />
<Progress value={100} />
<Progress value={62} label="62 of 100 MB" />
<Progress value={62} barWidth={32} />`,
      preview: (
        <>
          <DemoRow label="in progress">
            <Progress value={62} />
          </DemoRow>
          <DemoRow label="starting">
            <Progress value={4} />
          </DemoRow>
          <DemoRow label="complete">
            <Progress value={100} />
          </DemoRow>
          <DemoRow label="custom label">
            <Progress label="62 of 100 MB" value={62} />
          </DemoRow>
          <DemoRow label="wide bar">
            <Progress barWidth={32} value={62} />
          </DemoRow>
        </>
      ),
    },
  ],
};
