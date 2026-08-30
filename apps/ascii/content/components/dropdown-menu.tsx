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
      title: "default",
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
      title: "align end",
      description: "align lines the menu up with the trigger's end edge.",
      code: `<DropdownMenu>
  <DropdownMenuTrigger render={<Button variant="ghost">bottom / end</Button>} />
  <DropdownMenuContent chWidth={24} align="end">
    <DropdownMenuItem>Right-aligned</DropdownMenuItem>
    <DropdownMenuItem>Under the trigger</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
      preview: (
        <DropdownMenu>
          <DropdownMenuTrigger
            render={<Button variant="ghost">bottom / end</Button>}
          />
          <DropdownMenuContent align="end" chWidth={24}>
            <DropdownMenuItem>Right-aligned</DropdownMenuItem>
            <DropdownMenuItem>Under the trigger</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
    {
      title: "side right",
      description:
        "side opens the menu beside the trigger instead of below it.",
      code: `<DropdownMenu>
  <DropdownMenuTrigger render={<Button variant="ghost">right / start</Button>} />
  <DropdownMenuContent chWidth={24} side="right" align="start">
    <DropdownMenuItem>Opens beside</DropdownMenuItem>
    <DropdownMenuItem>The trigger</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
      preview: (
        <DropdownMenu>
          <DropdownMenuTrigger
            render={<Button variant="ghost">right / start</Button>}
          />
          <DropdownMenuContent align="start" chWidth={24} side="right">
            <DropdownMenuItem>Opens beside</DropdownMenuItem>
            <DropdownMenuItem>The trigger</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ],
};
