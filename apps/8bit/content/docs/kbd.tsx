import { Kbd, KbdGroup } from "@/components/ui/kbd";
import type { DocVariant } from "@/content/docs/registry";

export const title = "Kbd";
export const description = "Displays keyboard input or shortcuts.";

export const links = {
  shadcn: "https://ui.shadcn.com/docs/components/kbd",
};

export const variants: DocVariant[] = [
  {
    code: `import { Kbd, KbdGroup } from "@/components/ui/kbd";

export function KbdDemo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <Kbd>C</Kbd>
      </KbdGroup>
    </div>
  );
}`,
    description: "Group Kbd elements to represent a keyboard shortcut.",
    id: "default",
    preview: (
      <div className="flex flex-col items-center gap-4">
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <Kbd>C</Kbd>
        </KbdGroup>
      </div>
    ),
    title: "Default",
  },
];
