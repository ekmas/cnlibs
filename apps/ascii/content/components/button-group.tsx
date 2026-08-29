import { DemoRow } from "@/components/ascii/component-docs";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  ButtonGroupDemo,
  ButtonGroupInputDemo,
  ButtonGroupSplitDemo,
} from "./demos/button-group-demo";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Button Group",
  description: "Related buttons grouped together.",
  sections: [
    {
      title: "example",
      code: `<ButtonGroup>
  <Button variant="ghost">Day</Button>
  <Button aria-pressed>Week</Button>
  <Button variant="ghost">Month</Button>
</ButtonGroup>`,
      preview: <ButtonGroupDemo />,
    },
    {
      title: "variants",
      code: `<ButtonGroup>
  <Button variant="outline">Copy</Button>
  <Button variant="outline">Paste</Button>
  <Button variant="outline">Cut</Button>
</ButtonGroup>

<ButtonGroup>
  <Button>Deploy</Button>
  <DropdownMenu>
    <DropdownMenuTrigger render={<Button variant="outline" aria-label="More">v</Button>} />
    <DropdownMenuContent align="end" chWidth={34}>
      <DropdownMenuItem>Deploy to staging</DropdownMenuItem>
      <DropdownMenuItem variant="destructive">Roll back last deploy</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</ButtonGroup>

<ButtonGroup>
  <Input chWidth={30} placeholder="sam@paper.design" />
  <Button variant="outline">Invite</Button>
</ButtonGroup>`,
      preview: (
        <>
          <DemoRow label="outline">
            <ButtonGroup>
              <Button variant="outline">Copy</Button>
              <Button variant="outline">Paste</Button>
              <Button variant="outline">Cut</Button>
            </ButtonGroup>
          </DemoRow>
          <DemoRow label="split">
            <ButtonGroupSplitDemo />
          </DemoRow>
          <DemoRow label="with input">
            <ButtonGroupInputDemo />
          </DemoRow>
        </>
      ),
    },
  ],
};
