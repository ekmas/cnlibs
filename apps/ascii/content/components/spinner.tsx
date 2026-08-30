import { Spinner } from "@/components/ui/spinner";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Spinner",
  description: "Indicates a loading state.",
  sections: [
    {
      title: "default",
      code: "<Spinner />",
      preview: <Spinner />,
    },
    {
      title: "with text",
      code: `<span className="flex items-center gap-[1ch]">
  <Spinner /> Deploying...
</span>`,
      preview: (
        <span className="flex items-center gap-[1ch]">
          <Spinner />
          <span className="text-ascii-soft">Deploying...</span>
        </span>
      ),
    },
    {
      title: "fast",
      description: "intervalMs sets the time between frames (default 150).",
      code: "<Spinner intervalMs={90} />",
      preview: (
        <span className="flex items-center gap-[1ch]">
          <Spinner intervalMs={90} />
          <span className="text-ascii-comment">Running tests...</span>
        </span>
      ),
    },
    {
      title: "slow",
      code: "<Spinner intervalMs={300} />",
      preview: (
        <span className="flex items-center gap-[1ch]">
          <Spinner intervalMs={300} />
          <span className="text-ascii-comment">Waiting on lock...</span>
        </span>
      ),
    },
  ],
};
