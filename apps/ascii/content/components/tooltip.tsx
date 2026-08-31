import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Tooltip",
  description: "Info shown on hover or keyboard focus.",
  setup: {
    description:
      "Tooltips need one TooltipProvider at the root of the tree, so every tooltip in the app shares a delay group.",
    code: `// app/layout.tsx (inside <body>)
import { TooltipProvider } from "@/components/ui/tooltip";

<TooltipProvider>{children}</TooltipProvider>`,
  },
  sections: [
    {
      title: "default",
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
      title: "side",
      description: "side places the tooltip on any edge of the trigger.",
      code: `<Tooltip>
  <TooltipTrigger render={<Button variant="ghost">right</Button>} />
  <TooltipContent chWidth={20} side="right">side="right"</TooltipContent>
</Tooltip>`,
      preview: (
        <div className="flex flex-wrap gap-[2ch]">
          {(["top", "right", "bottom", "left"] as const).map((side) => (
            <Tooltip key={side}>
              <TooltipTrigger
                render={<Button variant="ghost">{side}</Button>}
              />
              <TooltipContent chWidth={20} side={side}>
                side=&quot;{side}&quot;
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      ),
    },
    {
      title: "align",
      description: "align shifts the tooltip along the chosen side.",
      code: `<Tooltip>
  <TooltipTrigger render={<Button variant="ghost">bottom / start</Button>} />
  <TooltipContent chWidth={26} side="bottom" align="start">
    Aligned to the trigger's start
  </TooltipContent>
</Tooltip>`,
      preview: (
        <Tooltip>
          <TooltipTrigger
            render={<Button variant="ghost">bottom / start</Button>}
          />
          <TooltipContent align="start" chWidth={26} side="bottom">
            Aligned to the trigger&apos;s start
          </TooltipContent>
        </Tooltip>
      ),
    },
  ],
};
