import { Bubble } from "@/components/ui/bubble";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Bubble",
  description: "A message bubble in a conversation.",
  sections: [
    {
      title: "default",
      code: `<Bubble side="received" width={28}>did the migration finish?</Bubble>`,
      preview: (
        <Bubble side="received" width={28}>
          did the migration finish?
        </Bubble>
      ),
    },
    {
      title: "sent",
      code: `<Bubble side="sent" width={28}>yep, all green on staging</Bubble>`,
      preview: (
        <Bubble side="sent" width={28}>
          yep, all green on staging
        </Bubble>
      ),
    },
    {
      title: "conversation",
      code: `<div className="flex w-full max-w-md flex-col gap-[1lh]">
  <Bubble side="received" width={28}>did the migration finish?</Bubble>
  <Bubble side="sent" width={28}>yep, all green on staging</Bubble>
  <Bubble side="received" width={28}>shipping to prod then</Bubble>
</div>`,
      preview: (
        <div className="flex w-full max-w-md flex-col gap-[1lh]">
          <Bubble side="received" width={28}>
            did the migration finish?
          </Bubble>
          <Bubble side="sent" width={28}>
            yep, all green on staging
          </Bubble>
          <Bubble side="received" width={28}>
            shipping to prod then
          </Bubble>
        </div>
      ),
    },
  ],
};
