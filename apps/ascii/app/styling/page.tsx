import type { Metadata } from "next";

import { ComponentHeader } from "@/components/ascii/component-header";
import { ThemeEditor } from "@/components/ascii/theme-editor";

export const metadata: Metadata = {
  title: "Styling — ASCII UI",
  description:
    "Pick a Google mono font, a color scheme and the characters every ASCII frame is drawn with.",
};

export default function StylingPage() {
  return (
    <div className="flex max-w-5xl flex-col gap-[2lh] px-[2ch] py-[1lh]">
      <ComponentHeader
        title="Styling"
        description="Pick the mono font, the color scheme and the characters every frame is drawn with. Changes apply live across the whole site and are saved in this browser."
      />
      <ThemeEditor />
    </div>
  );
}
