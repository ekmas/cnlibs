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
      <DropdownMenuItem>Copy deploy URL</DropdownMenuItem>
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
              <DropdownMenuItem>Copy deploy URL</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              Revoke deploy
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ],
};
