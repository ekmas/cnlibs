import { AsciiBox } from "@/components/ascii/ascii-box";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import type { ComponentDoc } from "./types";

function Hatch() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 select-none overflow-hidden whitespace-pre text-ascii-comment/60"
    >
      {Array.from({ length: 12 }, () => "/ ".repeat(60)).join("\n")}
    </div>
  );
}

export const doc: ComponentDoc = {
  title: "Aspect Ratio",
  description: "Constrains content to a fixed width/height ratio.",
  sections: [
    {
      title: "default",
      code: `<AspectRatio ratio={16 / 9} className="border border-border">
  <img src="/preview.png" alt="Preview" className="size-full object-cover" />
</AspectRatio>`,
      preview: (
        <AsciiBox title="16 / 9" width={48}>
          <AspectRatio className="border border-border" ratio={16 / 9}>
            <Hatch />
          </AspectRatio>
        </AsciiBox>
      ),
    },
    {
      title: "square",
      code: `<AspectRatio ratio={1} className="border border-border">
  <img src="/square.png" alt="Square" className="size-full object-cover" />
</AspectRatio>`,
      preview: (
        <AsciiBox title="1 / 1" width={28}>
          <AspectRatio className="border border-border" ratio={1}>
            <Hatch />
          </AspectRatio>
        </AsciiBox>
      ),
    },
  ],
};
