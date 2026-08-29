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
<Progress value={62} barWidth={32} />
<Progress value={3} min={0} max={8} label="3 / 8 steps" />`,
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
          <DemoRow label="custom range">
            <Progress label="3 / 8 steps" max={8} min={0} value={3} />
          </DemoRow>
        </>
      ),
    },
    {
      title: "states",
      code: `<Progress value={0} />
<Progress value={null} label="indexing..." />`,
      preview: (
        <>
          <DemoRow label="empty">
            <Progress value={0} />
          </DemoRow>
          <DemoRow label="indeterminate">
            <Progress label="indexing..." value={null} />
          </DemoRow>
        </>
      ),
    },
  ],
};
