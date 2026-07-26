import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import type { DocVariant } from "@/content/docs/registry";

export const title = "Hover Card";
export const description =
  "For sighted users to preview content available behind a link.";

export const links = {
  shadcn: "https://ui.shadcn.com/docs/components/hover-card",
};

export const variants: DocVariant[] = [
  {
    code: `import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger render={<Button variant="ghost">@8bit</Button>} />
      <HoverCardContent>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-heading">@8bit</p>
          <p className="text-sm text-muted-foreground">
            Pixel-cornered components for React, built on Base UI.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}`,
    description:
      "Hovering the trigger opens a preview card with additional content.",
    id: "default",
    preview: (
      <HoverCard>
        <HoverCardTrigger render={<Button variant="ghost">@8bit</Button>} />
        <HoverCardContent>
          <div className="flex flex-col gap-1">
            <p className="font-heading text-sm">@8bit</p>
            <p className="text-muted-foreground text-sm">
              Pixel-cornered components for React, built on Base UI.
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
    ),
    title: "Default",
  },
];
