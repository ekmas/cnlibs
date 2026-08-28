import { CommandDemo } from "./demos/command-demo";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Command",
  description: "Command palette for the mouse and keyboard.",
  sections: [
    {
      title: "example",
      code: `<Command
  groups={[
    { group: "File", items: [{ value: "new-file", label: "New file", hint: "ctrl+n" }] },
    { group: "Account", items: [{ value: "sign-out", label: "Sign out" }] },
  ]}
  placeholder="Type a command or search..."
/>`,
      preview: <CommandDemo />,
    },
  ],
};
