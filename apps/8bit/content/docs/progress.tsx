import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress";
import type { DocVariant } from "@/content/docs/registry";

export const title = "Progress";
export const description =
  "Displays an indicator showing the completion progress of a task.";

export const links = {
  shadcn: "https://ui.shadcn.com/docs/components/progress",
};

export const variants: DocVariant[] = [
  {
    code: `import { Progress } from "@/components/ui/progress";

export function ProgressDemo() {
  return <Progress className="w-full max-w-md" value={60} />;
}`,
    description: "Pass a value between 0 and 100 to fill the indicator.",
    id: "default",
    preview: <Progress className="w-full max-w-md" value={60} />,
    title: "Default",
  },
  {
    code: `import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress";

export function ProgressWithLabelDemo() {
  return (
    <Progress className="w-full max-w-md" value={90}>
      <div className="flex w-full justify-between">
        <ProgressLabel>Uploading</ProgressLabel>
        <ProgressValue />
      </div>
    </Progress>
  );
}`,
    description:
      "Add a ProgressLabel and ProgressValue to describe the current task.",
    id: "with-label",
    preview: (
      <Progress className="w-full max-w-md" value={90}>
        <div className="flex w-full justify-between">
          <ProgressLabel>Uploading</ProgressLabel>
          <ProgressValue />
        </div>
      </Progress>
    ),
    title: "With Label",
  },
];
