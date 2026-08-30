import { AsciiBox } from "@/components/ascii/ascii-box";
import { Kbd } from "@/components/ui/kbd";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Kbd",
  description: "Displays keyboard shortcut input.",
  sections: [
    {
      title: "default",
      code: "<Kbd>Esc</Kbd>",
      preview: <Kbd>Esc</Kbd>,
    },
    {
      title: "combination",
      code: `<span className="flex items-center gap-[1ch]">
  <Kbd>Ctrl</Kbd>
  <span>+</span>
  <Kbd>K</Kbd>
</span>`,
      preview: (
        <span className="flex items-center gap-[1ch]">
          <Kbd>Ctrl</Kbd>
          <span className="text-ascii-comment">+</span>
          <Kbd>K</Kbd>
        </span>
      ),
    },
    {
      title: "sequence",
      code: `<span className="flex items-center gap-[1ch]">
  <Kbd>g</Kbd>
  <span>then</span>
  <Kbd>d</Kbd>
</span>`,
      preview: (
        <span className="flex items-center gap-[1ch]">
          <Kbd>g</Kbd>
          <span className="text-ascii-comment">then</span>
          <Kbd>d</Kbd>
        </span>
      ),
    },
    {
      title: "shortcut list",
      code: `<AsciiBox width={44} title="Shortcuts" contentClassName="flex flex-col">
  <div className="flex items-center justify-between">
    <span>Command palette</span>
    <span className="flex items-center gap-[1ch]">
      <Kbd>Ctrl</Kbd>
      <span>+</span>
      <Kbd>K</Kbd>
    </span>
  </div>
</AsciiBox>`,
      preview: (
        <AsciiBox contentClassName="flex flex-col" title="Shortcuts" width={44}>
          <div className="flex items-center justify-between">
            <span className="text-card-foreground">Command palette</span>
            <span className="flex items-center gap-[1ch]">
              <Kbd>Ctrl</Kbd>
              <span className="text-ascii-comment">+</span>
              <Kbd>K</Kbd>
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-card-foreground">Toggle sidebar</span>
            <span className="flex items-center gap-[1ch]">
              <Kbd>Ctrl</Kbd>
              <span className="text-ascii-comment">+</span>
              <Kbd>B</Kbd>
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-card-foreground">Quit</span>
            <span className="flex items-center gap-[1ch]">
              <Kbd>Ctrl</Kbd>
              <span className="text-ascii-comment">+</span>
              <Kbd>C</Kbd>
            </span>
          </div>
        </AsciiBox>
      ),
    },
  ],
};
