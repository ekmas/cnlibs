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
  ],
};
