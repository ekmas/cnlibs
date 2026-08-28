import { AsciiBox } from "@/components/ascii/ascii-box";
import { DemoRow } from "@/components/ascii/component-docs";
import { Skeleton } from "@/components/ui/skeleton";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Skeleton",
  description: "A placeholder while content loads.",
  sections: [
    {
      title: "variants",
      code: `<Skeleton className="h-[1lh] w-[24ch]" />

<div className="flex w-[32ch] flex-col gap-[1lh]">
  <Skeleton className="h-[1lh] w-full" />
  <Skeleton className="h-[1lh] w-full" />
  <Skeleton className="h-[1lh] w-2/3" />
</div>

<Skeleton className="h-[4lh] w-[16ch]" />`,
      preview: (
        <>
          <DemoRow label="line">
            <Skeleton className="h-[1lh] w-[24ch]" />
          </DemoRow>
          <DemoRow label="paragraph">
            <div className="flex w-[32ch] flex-col gap-[1lh]">
              <Skeleton className="h-[1lh] w-full" />
              <Skeleton className="h-[1lh] w-full" />
              <Skeleton className="h-[1lh] w-2/3" />
            </div>
          </DemoRow>
          <DemoRow label="block">
            <Skeleton className="h-[4lh] w-[16ch]" />
          </DemoRow>
        </>
      ),
    },
    {
      title: "example",
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
