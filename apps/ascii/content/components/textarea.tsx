import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Textarea",
  description: "Multi-line text input.",
  sections: [
    {
      title: "default",
      code: `<Textarea rows={5} chWidth={44} placeholder="Add context..." />`,
      preview: (
        <Textarea
          aria-label="Notes"
          chWidth={44}
          placeholder="Add context for the on-call engineer..."
          rows={5}
        />
      ),
    },
    {
      title: "with label",
      code: `<Label htmlFor="notes">Notes</Label>
<Textarea id="notes" rows={3} chWidth={44} />`,
      preview: (
        <div className="flex flex-col">
          <Label htmlFor="textarea-notes">Notes</Label>
          <Textarea
            chWidth={44}
            id="textarea-notes"
            placeholder="Add context..."
            rows={3}
          />
        </div>
      ),
    },
    {
      title: "compact",
      description:
        "rows and chWidth size the frame in text rows and characters.",
      code: `<Textarea rows={2} chWidth={30} placeholder="Short note..." />`,
      preview: (
        <Textarea
          aria-label="Note"
          chWidth={30}
          placeholder="Short note..."
          rows={2}
        />
      ),
    },
    {
      title: "disabled",
      code: `<Textarea rows={3} disabled defaultValue="Read-only incident summary." />`,
      preview: (
        <Textarea
          aria-label="Disabled"
          chWidth={30}
          defaultValue="Read-only incident summary."
          disabled
          rows={3}
        />
      ),
    },
  ],
};
