import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import type { DocVariant } from "@/content/docs/registry";

export const title = "Context Menu";
export const description =
  "Displays a menu located at the pointer, triggered by a right click.";

export const links = {
  shadcn: "https://ui.shadcn.com/docs/components/context-menu",
};

export const variants: DocVariant[] = [
  {
    code: `import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-32 w-full max-w-md items-center justify-center border border-dashed text-sm text-muted-foreground">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          Back
          <ContextMenuShortcut>⌘[</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Forward
          <ContextMenuShortcut>⌘]</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>Reload</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}`,
    description:
      "Right click the box to open a menu anchored to the pointer position.",
    id: "default",
    preview: (
      <ContextMenu>
        <ContextMenuTrigger className="flex h-32 w-full max-w-md items-center justify-center border border-dashed text-muted-foreground text-sm">
          Right click here
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>
            Back
            <ContextMenuShortcut>⌘[</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Forward
            <ContextMenuShortcut>⌘]</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>Reload</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    ),
    title: "Default",
  },
];
