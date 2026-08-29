import { DemoRow } from "@/components/ascii/component-docs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import type { ComponentDoc } from "./types";

const placements = [
  ["right", "start"],
  ["top", "center"],
  ["bottom", "end"],
] as const;

export const doc: ComponentDoc = {
  title: "Popover",
  description: "Rich content in a portal, triggered by a button.",
  sections: [
    {
      title: "example",
      code: `<Popover>
  <PopoverTrigger render={<Button variant="outline">Settings</Button>} />
  <PopoverContent chWidth={32}>
    <PopoverTitle>Deploy settings</PopoverTitle>
    <PopoverDescription>
      Applies to the next deploy on this branch.
    </PopoverDescription>
    <Label htmlFor="domain" className="mt-[1lh]">Domain</Label>
    <Input id="domain" chWidth={28} defaultValue="ascii-ui.paper.design" />
    <Label htmlFor="region">Region</Label>
    <Input id="region" chWidth={28} defaultValue="iad1" />
    <Button className="self-end">Save</Button>
  </PopoverContent>
</Popover>`,
      preview: (
        <Popover>
          <PopoverTrigger
            render={<Button variant="outline">Settings</Button>}
          />
          <PopoverContent chWidth={32}>
            <PopoverTitle>Deploy settings</PopoverTitle>
            <PopoverDescription>
              Applies to the next deploy on this branch.
            </PopoverDescription>
            <div className="mt-[1lh] flex flex-col">
              <Label htmlFor="popover-domain">Domain</Label>
              <Input
                chWidth={28}
                defaultValue="ascii-ui.paper.design"
                id="popover-domain"
              />
            </div>
            <div className="flex flex-col">
              <Label htmlFor="popover-region">Region</Label>
              <Input chWidth={28} defaultValue="iad1" id="popover-region" />
            </div>
            <Button className="self-end">Save</Button>
          </PopoverContent>
        </Popover>
      ),
    },
    {
      title: "placement",
      code: `<PopoverContent side="right" align="start">...</PopoverContent>
<PopoverContent side="top" align="center">...</PopoverContent>
<PopoverContent side="bottom" align="end">...</PopoverContent>`,
      preview: (
        <DemoRow label="side / align">
          {placements.map(([side, align]) => (
            <Popover key={side}>
              <PopoverTrigger
                render={
                  <Button variant="ghost">
                    {side} / {align}
                  </Button>
                }
              />
              <PopoverContent align={align} chWidth={28} side={side}>
                <PopoverTitle>
                  side=&quot;{side}&quot; align=&quot;{align}&quot;
                </PopoverTitle>
                <PopoverDescription>
                  Flips to the opposite side when it runs out of room.
                </PopoverDescription>
                <PopoverClose
                  render={<Button variant="outline">Close</Button>}
                />
              </PopoverContent>
            </Popover>
          ))}
        </DemoRow>
      ),
    },
  ],
};
