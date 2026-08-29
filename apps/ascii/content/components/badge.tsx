import { DemoRow } from "@/components/ascii/component-docs";
import { Badge } from "@/components/ui/badge";
import { Marker } from "@/components/ui/marker";
import { Spinner } from "@/components/ui/spinner";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Badge",
  description: "A small status label.",
  sections: [
    {
      title: "variants",
      code: `<Badge>Online</Badge>
<Badge variant="secondary">Beta</Badge>
<Badge variant="destructive">Deprecated</Badge>
<Badge variant="outline">Draft</Badge>
<Badge variant="ghost">Archived</Badge>`,
      preview: (
        <>
          <DemoRow label="default">
            <Badge>Online</Badge>
          </DemoRow>
          <DemoRow label="secondary">
            <Badge variant="secondary">Beta</Badge>
          </DemoRow>
          <DemoRow label="destructive">
            <Badge variant="destructive">Deprecated</Badge>
          </DemoRow>
          <DemoRow label="outline">
            <Badge variant="outline">Draft</Badge>
          </DemoRow>
          <DemoRow label="ghost">
            <Badge variant="ghost">Archived</Badge>
          </DemoRow>
        </>
      ),
    },
    {
      title: "example",
      code: `<span>build #4021</span>
<Badge>Passing</Badge>
<Badge variant="secondary">main</Badge>
<Badge variant="destructive">2 vulns</Badge>

<Badge variant="outline"><Marker tone="success" /> healthy</Badge>
<Badge variant="secondary"><Spinner /> building</Badge>
<Badge render={<a href="#releases" />}>v1.4.2</Badge>`,
      preview: (
        <>
          <DemoRow label="inline">
            <div className="flex flex-wrap items-center gap-[2ch] text-ascii-soft text-sm">
              <span>build #4021</span>
              <Badge>Passing</Badge>
              <Badge variant="secondary">main</Badge>
              <Badge variant="destructive">2 vulns</Badge>
            </div>
          </DemoRow>
          <DemoRow label="with icon">
            <Badge variant="outline">
              <Marker tone="success" /> healthy
            </Badge>
            <Badge variant="secondary">
              <Spinner /> building
            </Badge>
          </DemoRow>
          <DemoRow label="as link">
            <Badge render={<a href="#releases" />}>v1.4.2</Badge>
          </DemoRow>
        </>
      ),
    },
  ],
};
