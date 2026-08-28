import { AsciiBox } from "@/components/ascii/ascii-box";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyAction,
  EmptyDescription,
  EmptyTitle,
} from "@/components/ui/empty";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Empty",
  description: "An empty-state placeholder.",
  sections: [
    {
      title: "example",
      code: `<AsciiBox width={48} title="Deployments">
  <Empty>
    <EmptyTitle>No deployments yet</EmptyTitle>
    <EmptyDescription>
      Push to main or trigger a manual deploy to see it here.
    </EmptyDescription>
    <EmptyAction>
      <Button>Create deployment</Button>
    </EmptyAction>
  </Empty>
</AsciiBox>`,
      preview: (
        <AsciiBox title="Deployments" width={48}>
          <Empty>
            <EmptyTitle>No deployments yet</EmptyTitle>
            <EmptyDescription>
              Push to main or trigger a manual deploy to see it here.
            </EmptyDescription>
            <EmptyAction>
              <Button>Create deployment</Button>
            </EmptyAction>
          </Empty>
        </AsciiBox>
      ),
    },
    {
      title: "variants",
      code: `<Empty>
  <EmptyTitle>No results for "quantum"</EmptyTitle>
  <EmptyDescription>Try a shorter query.</EmptyDescription>
</Empty>`,
      preview: (
        <AsciiBox title="Search" width={48}>
          <Empty>
            <EmptyTitle>No results for &quot;quantum&quot;</EmptyTitle>
            <EmptyDescription>Try a shorter query.</EmptyDescription>
          </Empty>
        </AsciiBox>
      ),
    },
  ],
};
