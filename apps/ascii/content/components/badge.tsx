import { Badge } from "@/components/ui/badge";
import { Marker } from "@/components/ui/marker";
import { Spinner } from "@/components/ui/spinner";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Badge",
  description: "A small status label.",
  sections: [
    {
      title: "default",
      code: "<Badge>Online</Badge>",
      preview: <Badge>Online</Badge>,
    },
    {
      title: "secondary",
      code: `<Badge variant="secondary">Beta</Badge>`,
      preview: <Badge variant="secondary">Beta</Badge>,
    },
    {
      title: "destructive",
      code: `<Badge variant="destructive">Deprecated</Badge>`,
      preview: <Badge variant="destructive">Deprecated</Badge>,
    },
    {
      title: "outline",
      code: `<Badge variant="outline">Draft</Badge>`,
      preview: <Badge variant="outline">Draft</Badge>,
    },
    {
      title: "ghost",
      code: `<Badge variant="ghost">Archived</Badge>`,
      preview: <Badge variant="ghost">Archived</Badge>,
    },
    {
      title: "with icon",
      description: "Any inline glyph or component sits before the label.",
      code: `<Badge variant="outline"><Marker tone="success" /> healthy</Badge>
<Badge variant="secondary"><Spinner /> building</Badge>`,
      preview: (
        <div className="flex flex-wrap items-center gap-[2ch]">
          <Badge variant="outline">
            <Marker tone="success" /> healthy
          </Badge>
          <Badge variant="secondary">
            <Spinner /> building
          </Badge>
        </div>
      ),
    },
    {
      title: "as link",
      description: "render swaps the element, so a badge can be an anchor.",
      code: `<Badge render={<a href="#releases" />}>v1.4.2</Badge>`,
      preview: <Badge render={<a href="#releases" />}>v1.4.2</Badge>,
    },
    {
      title: "inline",
      code: `<span>build #4021</span>
<Badge>Passing</Badge>
<Badge variant="secondary">main</Badge>
<Badge variant="destructive">2 vulns</Badge>`,
      preview: (
        <div className="flex flex-wrap items-center gap-[2ch] text-ascii-soft text-sm">
          <span>build #4021</span>
          <Badge>Passing</Badge>
          <Badge variant="secondary">main</Badge>
          <Badge variant="destructive">2 vulns</Badge>
        </div>
      ),
    },
  ],
};
