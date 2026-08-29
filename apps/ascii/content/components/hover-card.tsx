import { DemoRow } from "@/components/ascii/component-docs";
import { Badge } from "@/components/ui/badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Hover Card",
  description: "Preview content behind a link.",
  sections: [
    {
      title: "example",
      code: `<HoverCard>
  <HoverCardTrigger href="#">@samuelb</HoverCardTrigger>
  <HoverCardContent chWidth={28}>
    <div className="flex items-start justify-between">
      <span className="font-weight-heading text-primary">Samuel Breznjak</span>
      <Badge variant="secondary" className="-mr-[2ch]">Owner</Badge>
    </div>
    <span>@samuelb</span>
    <span>Online now · last commit 4m ago</span>
  </HoverCardContent>
</HoverCard>`,
      preview: (
        <p className="text-ascii-soft text-sm">
          Last deploy triggered by{" "}
          <HoverCard>
            <HoverCardTrigger href="#">@samuelb</HoverCardTrigger>
            <HoverCardContent chWidth={28}>
              <div className="flex items-start justify-between">
                <span className="font-weight-heading text-primary">
                  Samuel Breznjak
                </span>
                <Badge className="-mr-[2ch]" variant="secondary">
                  Owner
                </Badge>
              </div>
              <span className="text-ascii-comment">@samuelb</span>
              <span className="text-ascii-soft">
                Online now &middot; last commit 4m ago
              </span>
            </HoverCardContent>
          </HoverCard>{" "}
          to production.
        </p>
      ),
    },
    {
      title: "placement",
      code: `<HoverCardContent side="top" align="center" chWidth={32}>
  ...
</HoverCardContent>`,
      preview: (
        <DemoRow label="top / center">
          <p className="text-ascii-soft text-sm">
            Blocked by{" "}
            <HoverCard>
              <HoverCardTrigger href="#">#4021</HoverCardTrigger>
              <HoverCardContent align="center" chWidth={32} side="top">
                <span className="font-weight-heading text-primary">
                  fix: select portal z-index
                </span>
                <span className="text-ascii-comment">
                  opened 2d ago by @priya
                </span>
                <span className="text-ascii-soft">
                  2 approvals &middot; checks passing
                </span>
              </HoverCardContent>
            </HoverCard>{" "}
            until review.
          </p>
        </DemoRow>
      ),
    },
  ],
};
