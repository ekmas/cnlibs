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
      title: "default",
      code: `<ButtonGroup>
  <Button variant="ghost">Day</Button>
  <Button aria-pressed>Week</Button>
  <Button variant="ghost">Month</Button>
</ButtonGroup>`,
      preview: <ButtonGroupDemo />,
    },
    {
      title: "outline",
      code: `<ButtonGroup>
  <Button variant="outline">Copy</Button>
  <Button variant="outline">Paste</Button>
  <Button variant="outline">Cut</Button>
</ButtonGroup>`,
      preview: (
        <ButtonGroup>
          <Button variant="outline">Copy</Button>
          <Button variant="outline">Paste</Button>
          <Button variant="outline">Cut</Button>
        </ButtonGroup>
      ),
    },
    {
      title: "split button",
      description:
        "A primary action sharing its frame with a menu of alternatives.",
      code: `<ButtonGroup>
  <Button>Deploy</Button>
  <DropdownMenu>
    <DropdownMenuTrigger render={<Button variant="outline" aria-label="More">v</Button>} />
    <DropdownMenuContent align="end" chWidth={34}>
      <DropdownMenuItem>Deploy to staging</DropdownMenuItem>
      <DropdownMenuItem variant="destructive">Roll back last deploy</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</ButtonGroup>`,
      preview: <ButtonGroupSplitDemo />,
    },
    {
      title: "with input",
      code: `<ButtonGroup>
  <Input chWidth={30} placeholder="sam@paper.design" />
  <Button variant="outline">Invite</Button>
</ButtonGroup>`,
      preview: <ButtonGroupInputDemo />,
    },
  ],
};
