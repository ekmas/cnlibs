import { DemoRow } from "@/components/ascii/component-docs";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Textarea",
  description: "Multi-line text input.",
  sections: [
    {
      title: "variants",
      code: `<Textarea rows={5} chWidth={44} placeholder="Add context..." />
<Textarea rows={2} chWidth={30} placeholder="Short note..." />`,
      preview: (
        <>
          <DemoRow label="default">
            <div className="flex flex-col">
              <Label htmlFor="textarea-notes">Notes</Label>
              <Textarea
                chWidth={44}
                id="textarea-notes"
                placeholder="Add context for the on-call engineer..."
                rows={5}
              />
            </div>
          </DemoRow>
          <DemoRow label="compact">
            <Textarea
              aria-label="Note"
              chWidth={30}
              placeholder="Short note..."
              rows={2}
            />
          </DemoRow>
        </>
      ),
    },
    {
      title: "states",
      code: `<Textarea rows={3} disabled defaultValue="Read-only incident summary." />`,
      preview: (
        <DemoRow label="disabled">
          <Textarea
            aria-label="Disabled"
            chWidth={30}
            defaultValue="Read-only incident summary."
            disabled
            rows={3}
          />
        </DemoRow>
      ),
    },
  ],
};
