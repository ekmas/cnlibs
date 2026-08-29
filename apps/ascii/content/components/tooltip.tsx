import { DemoRow } from "@/components/ascii/component-docs";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { ComponentDoc } from "./types";

const sides = ["top", "right", "bottom", "left"] as const;

export const doc: ComponentDoc = {
  title: "Tooltip",
  description: "Info shown on hover or keyboard focus.",
  sections: [
    {
      title: "example",
      code: `<Tooltip>
  <TooltipTrigger render={<Button variant="outline">? hover</Button>} />
  <TooltipContent chWidth={24}>Disables auto-save</TooltipContent>
</Tooltip>`,
      preview: (
        <Tooltip>
          <TooltipTrigger
            render={<Button variant="outline">? hover / focus</Button>}
          />
          <TooltipContent chWidth={24}>Disables auto-save</TooltipContent>
        </Tooltip>
      ),
    },
    {
      title: "placement",
      code: `<TooltipContent side="top">...</TooltipContent>
<TooltipContent side="right">...</TooltipContent>
<TooltipContent side="bottom">...</TooltipContent>
<TooltipContent side="left">...</TooltipContent>

<TooltipContent side="bottom" align="start">...</TooltipContent>`,
      preview: (
        <>
          <DemoRow label="side">
            {sides.map((side) => (
              <Tooltip key={side}>
                <TooltipTrigger
                  render={<Button variant="ghost">{side}</Button>}
                />
                <TooltipContent chWidth={20} side={side}>
                  side=&quot;{side}&quot;
                </TooltipContent>
              </Tooltip>
            ))}
          </DemoRow>
          <DemoRow label="align">
            <Tooltip>
              <TooltipTrigger
                render={<Button variant="ghost">bottom / start</Button>}
              />
              <TooltipContent align="start" chWidth={26} side="bottom">
                Aligned to the trigger&apos;s start
              </TooltipContent>
            </Tooltip>
          </DemoRow>
        </>
      ),
    },
  ],
};
