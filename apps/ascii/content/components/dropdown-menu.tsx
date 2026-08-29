import { DemoRow } from "@/components/ascii/component-docs";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuGroupLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Dropdown Menu",
  description: "A menu of options triggered by a button.",
  sections: [
    {
      title: "example",
      code: `<DropdownMenu>
  <DropdownMenuTrigger render={<Button variant="outline">Actions v</Button>} />
  <DropdownMenuContent chWidth={24}>
    <DropdownMenuGroup>
      <DropdownMenuGroupLabel>Deploy</DropdownMenuGroupLabel>
      <DropdownMenuItem>Redeploy</DropdownMenuItem>
      <DropdownMenuItem>View logs</DropdownMenuItem>
      <DropdownMenuItem disabled>Copy deploy URL</DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuItem variant="destructive">Revoke deploy</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
      preview: (
        <DropdownMenu>
          <DropdownMenuTrigger
            render={<Button variant="outline">Actions v</Button>}
          />
          <DropdownMenuContent chWidth={24}>
            <DropdownMenuGroup>
              <DropdownMenuGroupLabel>Deploy</DropdownMenuGroupLabel>
              <DropdownMenuItem>Redeploy</DropdownMenuItem>
              <DropdownMenuItem>View logs</DropdownMenuItem>
              <DropdownMenuItem disabled>Copy deploy URL</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              Revoke deploy
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
    {
      title: "placement",
      code: `<DropdownMenuContent chWidth={24} align="end">...</DropdownMenuContent>
<DropdownMenuContent chWidth={24} side="right" align="start">...</DropdownMenuContent>`,
      preview: (
        <DemoRow label="side / align">
          <DropdownMenu>
            <DropdownMenuTrigger
              render={<Button variant="ghost">bottom / end</Button>}
            />
            <DropdownMenuContent align="end" chWidth={24}>
              <DropdownMenuItem>Right-aligned</DropdownMenuItem>
              <DropdownMenuItem>Under the trigger</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={<Button variant="ghost">right / start</Button>}
            />
            <DropdownMenuContent align="start" chWidth={24} side="right">
              <DropdownMenuItem>Opens beside</DropdownMenuItem>
              <DropdownMenuItem>The trigger</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </DemoRow>
      ),
    },
  ],
};
