import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Menubar",
  description: "A persistent menu common in desktop apps.",
  sections: [
    {
      title: "example",
      code: `<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent chWidth={24}>
      <MenubarItem>New session</MenubarItem>
      <MenubarItem>Open recent</MenubarItem>
      <MenubarItem>Close window</MenubarItem>
      <MenubarSeparator />
      <MenubarItem variant="destructive">Delete session</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>Edit</MenubarTrigger>
    <MenubarContent chWidth={24}>
      <MenubarItem>Undo</MenubarItem>
      <MenubarItem disabled>Redo</MenubarItem>
      <MenubarItem>Find in files</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>View</MenubarTrigger>
    <MenubarContent chWidth={24}>
      <MenubarItem>Toggle sidebar</MenubarItem>
      <MenubarItem>Toggle terminal</MenubarItem>
      <MenubarItem>Zen mode</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`,
      preview: (
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent chWidth={24}>
              <MenubarItem>New session</MenubarItem>
              <MenubarItem>Open recent</MenubarItem>
              <MenubarItem>Close window</MenubarItem>
              <MenubarSeparator />
              <MenubarItem variant="destructive">Delete session</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Edit</MenubarTrigger>
            <MenubarContent chWidth={24}>
              <MenubarItem>Undo</MenubarItem>
              <MenubarItem disabled>Redo</MenubarItem>
              <MenubarItem>Find in files</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>View</MenubarTrigger>
            <MenubarContent chWidth={24}>
              <MenubarItem>Toggle sidebar</MenubarItem>
              <MenubarItem>Toggle terminal</MenubarItem>
              <MenubarItem>Zen mode</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      ),
    },
  ],
};
