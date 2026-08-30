import { CommandDemo } from "./demos/command-demo";
import { CommandFilterDemo } from "./demos/command-filter-demo";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Command",
  description: "Command palette for the mouse and keyboard.",
  sections: [
    {
      title: "default",
      code: `<Dialog>
  <DialogTrigger render={<Button variant="outline">[ ⌘K ]</Button>} />
  <DialogContent chWidth={50}>
    <Command
      groups={[
        { group: "File", items: [{ value: "new-file", label: "New file", hint: "ctrl+n" }] },
        { group: "Account", items: [{ value: "sign-out", label: "Sign out" }] },
      ]}
      placeholder="Type a command or search..."
    />
  </DialogContent>
</Dialog>`,
      preview: <CommandDemo />,
    },
    {
      title: "inline with a custom filter",
      description:
        "Outside a dialog, with a matcher that also searches hints and a custom empty message.",
      code: `<AsciiBox width={48} title="Actions">
  <Command
    groups={groups}
    placeholder="Search by name or hint..."
    emptyMessage="Nothing matches — try a hint like stg or err."
    filter={(item, query) =>
      item.label.toLowerCase().includes(query.toLowerCase()) ||
      item.hint?.toLowerCase().includes(query.toLowerCase())
    }
  />
</AsciiBox>`,
      preview: <CommandFilterDemo />,
    },
  ],
};
