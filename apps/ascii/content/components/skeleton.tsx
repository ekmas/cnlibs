import { AsciiBox } from "@/components/ascii/ascii-box";
import { Skeleton } from "@/components/ui/skeleton";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Skeleton",
  description: "A placeholder while content loads.",
  sections: [
    {
      title: "default",
      code: `<Skeleton className="h-[1lh] w-[24ch]" />`,
      preview: <Skeleton className="h-[1lh] w-[24ch]" />,
    },
    {
      title: "paragraph",
      code: `<div className="flex w-[32ch] flex-col gap-[1lh]">
  <Skeleton className="h-[1lh] w-full" />
  <Skeleton className="h-[1lh] w-full" />
  <Skeleton className="h-[1lh] w-2/3" />
</div>`,
      preview: (
        <div className="flex w-[32ch] flex-col gap-[1lh]">
          <Skeleton className="h-[1lh] w-full" />
          <Skeleton className="h-[1lh] w-full" />
          <Skeleton className="h-[1lh] w-2/3" />
        </div>
      ),
    },
    {
      title: "block",
      code: `<Skeleton className="h-[4lh] w-[16ch]" />`,
      preview: <Skeleton className="h-[4lh] w-[16ch]" />,
    },
    {
      title: "in a panel",
      code: `<AsciiBox width={44} title="Loading deploy" contentClassName="flex flex-col gap-[1lh]">
  <Skeleton className="h-[1lh] w-[16ch]" />
  <Skeleton className="h-[1lh] w-full" />
  <Skeleton className="h-[1lh] w-5/6" />
</AsciiBox>`,
      preview: (
        <AsciiBox
          contentClassName="flex flex-col gap-[1lh]"
          title="Loading deploy"
          width={44}
        >
          <Skeleton className="h-[1lh] w-[16ch]" />
          <Skeleton className="h-[1lh] w-full" />
          <Skeleton className="h-[1lh] w-5/6" />
        </AsciiBox>
      ),
    },
  ],
};
