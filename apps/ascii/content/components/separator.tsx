import { Separator } from "@/components/ui/separator";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Separator",
  description: "Visually or semantically separates content.",
  sections: [
    {
      title: "default",
      code: `<div className="flex w-[36ch] flex-col">
  <span>Account settings</span>
  <Separator />
  <span className="text-destructive">Danger zone</span>
</div>`,
      preview: (
        <div className="flex w-[36ch] flex-col font-mono text-sm">
          <span className="text-foreground">Account settings</span>
          <Separator />
          <span className="text-destructive">Danger zone</span>
        </div>
      ),
    },
    {
      title: "vertical",
      code: `<div className="flex h-[1lh] items-stretch gap-[1ch]">
  <span>docs</span>
  <Separator orientation="vertical" />
  <span>source</span>
  <Separator orientation="vertical" />
  <span>issues</span>
</div>`,
      preview: (
        <div className="flex h-[1lh] items-stretch gap-[1ch] font-mono text-sm">
          <span className="text-ascii-soft">docs</span>
          <Separator orientation="vertical" />
          <span className="text-ascii-soft">source</span>
          <Separator orientation="vertical" />
          <span className="text-ascii-soft">issues</span>
        </div>
      ),
    },
  ],
};
