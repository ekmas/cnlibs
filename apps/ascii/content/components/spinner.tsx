import { DemoRow } from "@/components/ascii/component-docs";
import { Spinner } from "@/components/ui/spinner";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Spinner",
  description: "Indicates a loading state.",
  sections: [
    {
      title: "variants",
      code: `<Spinner />
<Spinner intervalMs={90} />
<Spinner intervalMs={300} />`,
      preview: (
        <>
          <DemoRow label="default">
            <span className="flex items-center gap-[1ch]">
              <Spinner />
              <span className="text-ascii-soft">Deploying...</span>
            </span>
          </DemoRow>
          <DemoRow label="fast">
            <span className="flex items-center gap-[1ch]">
              <Spinner intervalMs={90} />
              <span className="text-ascii-comment">Running tests...</span>
            </span>
          </DemoRow>
          <DemoRow label="slow">
            <span className="flex items-center gap-[1ch]">
              <Spinner intervalMs={300} />
              <span className="text-ascii-comment">Waiting on lock...</span>
            </span>
          </DemoRow>
        </>
      ),
    },
  ],
};
