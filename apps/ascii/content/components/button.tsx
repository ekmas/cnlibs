import { DemoRow } from "@/components/ascii/component-docs";
import { Button } from "@/components/ui/button";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Button",
  description: "Triggers an action.",
  sections: [
    {
      title: "variants",
      code: `<Button>Deploy</Button>
<Button variant="secondary">View logs</Button>
<Button variant="outline">Cancel</Button>
<Button variant="ghost">Skip</Button>
<Button variant="destructive">Delete</Button>
<Button variant="link">Docs</Button>`,
      preview: (
        <>
          <DemoRow label="default">
            <Button>Deploy</Button>
          </DemoRow>
          <DemoRow label="secondary">
            <Button variant="secondary">View logs</Button>
          </DemoRow>
          <DemoRow label="outline">
            <Button variant="outline">Cancel</Button>
          </DemoRow>
          <DemoRow label="ghost">
            <Button variant="ghost">Skip</Button>
          </DemoRow>
          <DemoRow label="destructive">
            <Button variant="destructive">Delete</Button>
          </DemoRow>
          <DemoRow label="link">
            <Button variant="link">Docs</Button>
          </DemoRow>
        </>
      ),
    },
    {
      title: "sizes",
      code: `<Button size="default">Default</Button>
<Button size="icon" aria-label="Close">x</Button>`,
      preview: (
        <>
          <DemoRow label="default">
            <Button size="default">Default</Button>
          </DemoRow>
          <DemoRow label="icon">
            <Button aria-label="Close" size="icon">
              x
            </Button>
          </DemoRow>
        </>
      ),
    },
    {
      title: "states",
      code: `<Button disabled>Locked</Button>
<Button variant="outline" disabled>Locked</Button>`,
      preview: (
        <DemoRow label="disabled">
          <Button disabled>Locked</Button>
          <Button disabled variant="outline">
            Locked
          </Button>
        </DemoRow>
      ),
    },
  ],
};
