import { AsciiBox } from "@/components/ascii/ascii-box";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Context Menu",
  description: "A menu of actions triggered by a right click.",
  sections: [
    {
      title: "default",
      code: `<ContextMenu>
  <ContextMenuTrigger>
    <AsciiBox width={40} title="deploy.log">right-click this row</AsciiBox>
  </ContextMenuTrigger>
  <ContextMenuContent chWidth={22}>
    <ContextMenuItem>Rename</ContextMenuItem>
    <ContextMenuItem>Duplicate</ContextMenuItem>
    <ContextMenuItem>Download</ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`,
      preview: (
        <ContextMenu>
          <ContextMenuTrigger>
            <AsciiBox title="deploy.log" width={40}>
              right-click this row
            </AsciiBox>
          </ContextMenuTrigger>
          <ContextMenuContent chWidth={22}>
            <ContextMenuItem>Rename</ContextMenuItem>
            <ContextMenuItem>Duplicate</ContextMenuItem>
            <ContextMenuItem>Download</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      ),
    },
  ],
};
