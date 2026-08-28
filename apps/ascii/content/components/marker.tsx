import { AsciiBox } from "@/components/ascii/ascii-box";
import { DemoRow } from "@/components/ascii/component-docs";
import { Marker } from "@/components/ui/marker";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Marker",
  description: "An active status dot, tone-coded by severity.",
  sections: [
    {
      title: "variants",
      code: `<Marker tone="success" />
<Marker tone="warning" />
<Marker tone="danger" />
<Marker tone="neutral" />`,
      preview: (
        <>
          <DemoRow label="success">
            <span className="flex items-center gap-[1ch]">
              <Marker tone="success" />
              <span className="text-ascii-soft">online</span>
            </span>
          </DemoRow>
          <DemoRow label="warning">
            <span className="flex items-center gap-[1ch]">
              <Marker tone="warning" />
              <span className="text-ascii-soft">degraded</span>
            </span>
          </DemoRow>
          <DemoRow label="danger">
            <span className="flex items-center gap-[1ch]">
              <Marker tone="danger" />
              <span className="text-ascii-soft">down</span>
            </span>
          </DemoRow>
          <DemoRow label="neutral">
            <span className="flex items-center gap-[1ch]">
              <Marker tone="neutral" />
              <span className="text-ascii-comment">offline</span>
            </span>
          </DemoRow>
        </>
      ),
    },
    {
      title: "example",
      code: `<div className="flex items-center gap-[1ch]">
  <span className="w-[8ch]">API</span>
  <span>—</span>
  <Marker tone="success" />
  <span>online</span>
</div>
<div className="flex items-center gap-[1ch]">
  <span className="w-[8ch]">Queue</span>
  <span>—</span>
  <Marker tone="warning" />
  <span>degraded</span>
</div>
<div className="flex items-center gap-[1ch]">
  <span className="w-[8ch]">Cache</span>
  <span>—</span>
  <Marker tone="neutral" />
  <span>offline</span>
</div>`,
      preview: (
        <AsciiBox contentClassName="flex flex-col" title="Status" width={40}>
          <div className="flex items-center gap-[1ch]">
            <span className="w-[8ch] text-card-foreground">API</span>
            <span className="text-ascii-comment">—</span>
            <Marker tone="success" />
            <span className="text-ascii-soft">online</span>
          </div>
          <div className="flex items-center gap-[1ch]">
            <span className="w-[8ch] text-card-foreground">Queue</span>
            <span className="text-ascii-comment">—</span>
            <Marker tone="warning" />
            <span className="text-ascii-soft">degraded</span>
          </div>
          <div className="flex items-center gap-[1ch]">
            <span className="w-[8ch] text-card-foreground">Cache</span>
            <span className="text-ascii-comment">—</span>
            <Marker tone="neutral" />
            <span className="text-ascii-comment">offline</span>
          </div>
        </AsciiBox>
      ),
    },
  ],
};
