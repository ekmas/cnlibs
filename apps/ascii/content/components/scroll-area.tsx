import { AsciiBox } from "@/components/ascii/ascii-box";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { ComponentDoc } from "./types";

const entries = [
  { version: "v2.4.0", note: "Add dark-mode aware charts" },
  { version: "v2.3.2", note: "Fix pagination ellipsis overflow" },
  { version: "v2.3.1", note: "Patch select portal z-index" },
  { version: "v2.3.0", note: "Add scroll-area component" },
  { version: "v2.2.0", note: "Add resizable panels" },
  { version: "v2.1.0", note: "Add carousel component" },
  { version: "v2.0.1", note: "Fix tooltip delay group timing" },
  { version: "v2.0.0", note: "Rewrite on base-ui primitives" },
  { version: "v1.9.0", note: "Add breadcrumb + navigation-menu" },
  { version: "v1.8.0", note: "Add typography scale" },
];

export const doc: ComponentDoc = {
  title: "Scroll Area",
  description: "Custom, cross-browser scrollable region.",
  sections: [
    {
      title: "example",
      code: `<AsciiBox width={48} title="Changelog" padY={0}>
  <ScrollArea className="h-[8lh]">
    <ul className="flex flex-col pr-[2ch]">
      {entries.map((entry) => (
        <li key={entry.version} className="flex gap-[1ch]">
          <span className="text-primary">{entry.version}</span>
          <span>{entry.note}</span>
        </li>
      ))}
    </ul>
  </ScrollArea>
</AsciiBox>`,
      preview: (
        <AsciiBox padY={0} title="Changelog" width={48}>
          <ScrollArea className="h-[8lh]">
            <ul className="flex flex-col pr-[2ch]">
              {entries.map((entry) => (
                <li className="flex gap-[1ch]" key={entry.version}>
                  <span className="text-primary">{entry.version}</span>
                  <span className="text-ascii-soft">{entry.note}</span>
                </li>
              ))}
            </ul>
          </ScrollArea>
        </AsciiBox>
      ),
    },
  ],
};
