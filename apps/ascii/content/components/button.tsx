import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Button",
  description: "Triggers an action.",
  sections: [
    {
      title: "default",
      code: "<Button>Deploy</Button>",
      preview: <Button>Deploy</Button>,
    },
    {
      title: "secondary",
      code: `<Button variant="secondary">View logs</Button>`,
      preview: <Button variant="secondary">View logs</Button>,
    },
    {
      title: "outline",
      code: `<Button variant="outline">Cancel</Button>`,
      preview: <Button variant="outline">Cancel</Button>,
    },
    {
      title: "ghost",
      code: `<Button variant="ghost">Skip</Button>`,
      preview: <Button variant="ghost">Skip</Button>,
    },
    {
      title: "destructive",
      code: `<Button variant="destructive">Delete</Button>`,
      preview: <Button variant="destructive">Delete</Button>,
    },
    {
      title: "link",
      description: "No frame — a # marker that turns into > on hover.",
      code: `<Button variant="link">Docs</Button>`,
      preview: <Button variant="link">Docs</Button>,
    },
    {
      title: "icon",
      description: 'size="icon" fits a single glyph; give it an aria-label.',
      code: `<Button size="icon" aria-label="Close">x</Button>`,
      preview: (
        <Button aria-label="Close" size="icon">
          x
        </Button>
      ),
    },
    {
      title: "with glyph",
      code: "<Button>[+] New project</Button>",
      preview: <Button>[+] New project</Button>,
    },
    {
      title: "as link",
      description:
        "render swaps the element; nativeButton={false} tells Base UI it isn't a <button>.",
      code: `<Button render={<a href="#docs" />} nativeButton={false} variant="outline">
  Read the docs
</Button>`,
      preview: (
        <Button
          nativeButton={false}
          render={<a href="#docs" />}
          variant="outline"
        >
          Read the docs
        </Button>
      ),
    },
    {
      title: "disabled",
      code: "<Button disabled>Locked</Button>",
      preview: <Button disabled>Locked</Button>,
    },
    {
      title: "loading",
      code: "<Button disabled><Spinner /> Deploying</Button>",
      preview: (
        <Button disabled>
          <Spinner /> Deploying
        </Button>
      ),
    },
  ],
};
