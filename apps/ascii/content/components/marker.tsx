import { AsciiBox } from "@/components/ascii/ascii-box";
import { Marker } from "@/components/ui/marker";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Marker",
  description: "An active status dot, tone-coded by severity.",
  sections: [
    {
      title: "default",
      code: `<Marker tone="success" /> online`,
      preview: (
        <span className="flex items-center gap-[1ch]">
          <Marker tone="success" />
          <span className="text-ascii-soft">online</span>
        </span>
      ),
    },
    {
      title: "warning",
      code: `<Marker tone="warning" /> degraded`,
      preview: (
        <span className="flex items-center gap-[1ch]">
          <Marker tone="warning" />
          <span className="text-ascii-soft">degraded</span>
        </span>
      ),
    },
    {
      title: "danger",
      code: `<Marker tone="danger" /> down`,
      preview: (
        <span className="flex items-center gap-[1ch]">
          <Marker tone="danger" />
          <span className="text-ascii-soft">down</span>
        </span>
      ),
    },
    {
      title: "neutral",
      code: `<Marker tone="neutral" /> offline`,
      preview: (
        <span className="flex items-center gap-[1ch]">
          <Marker tone="neutral" />
          <span className="text-ascii-comment">offline</span>
        </span>
      ),
    },
    {
      title: "status list",
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
