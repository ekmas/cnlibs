import { AsciiBox } from "@/components/ascii/ascii-box";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import type { ComponentDoc } from "./types";

const extraResults = [
  "src/lib/format-bytes.ts",
  "src/lib/parse-env.ts",
  "src/lib/retry.ts",
];

export const doc: ComponentDoc = {
  title: "Collapsible",
  description: "Expands and collapses a panel.",
  sections: [
    {
      title: "default",
      code: `<Collapsible>
  <ul className="flex flex-col">
    <li>src/lib/cn.ts</li>
    <li>src/lib/fetcher.ts</li>
  </ul>
  <CollapsibleTrigger>Show 3 more results</CollapsibleTrigger>
  <CollapsibleContent>
    <ul className="flex flex-col">
      <li>src/lib/format-bytes.ts</li>
      <li>src/lib/parse-env.ts</li>
      <li>src/lib/retry.ts</li>
    </ul>
  </CollapsibleContent>
</Collapsible>`,
      preview: (
        <AsciiBox title="Search results" width={48}>
          <Collapsible>
            <ul className="flex flex-col text-ascii-soft">
              <li>src/lib/cn.ts</li>
              <li>src/lib/fetcher.ts</li>
            </ul>
            <CollapsibleTrigger>
              Show {extraResults.length} more results
            </CollapsibleTrigger>
            <CollapsibleContent>
              <ul className="flex flex-col">
                {extraResults.map((path) => (
                  <li key={path}>{path}</li>
                ))}
              </ul>
            </CollapsibleContent>
          </Collapsible>
        </AsciiBox>
      ),
    },
    {
      title: "open by default",
      description: "defaultOpen starts the panel expanded.",
      code: `<Collapsible defaultOpen>
  <CollapsibleTrigger>Build details</CollapsibleTrigger>
  <CollapsibleContent>
    <ul className="flex flex-col">
      <li>commit  a1b2c3d</li>
      <li>branch  main</li>
      <li>took    48s</li>
    </ul>
  </CollapsibleContent>
</Collapsible>`,
      preview: (
        <AsciiBox title="Build #4021" width={48}>
          <Collapsible defaultOpen>
            <CollapsibleTrigger>Build details</CollapsibleTrigger>
            <CollapsibleContent>
              <ul className="flex flex-col whitespace-pre text-ascii-soft">
                <li>commit a1b2c3d</li>
                <li>branch main</li>
                <li>took 48s</li>
              </ul>
            </CollapsibleContent>
          </Collapsible>
        </AsciiBox>
      ),
    },
  ],
};
