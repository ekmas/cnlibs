import { ResizableDemo } from "./demos/resizable-demo";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Resizable",
  description: "Accessible panel groups with keyboard support.",
  sections: [
    {
      title: "default",
      code: `<ResizablePanelGroup totalWidth={61} defaultLeftWidth={30} minWidth={12}>
  <ResizablePanel side="start">
    {(chWidth) => (
      <AsciiBox width={chWidth} title="Files" padY={0}>
        <ul className="flex flex-col">
          <li>app/page.tsx</li>
          <li>app/layout.tsx</li>
          <li>lib/utils.ts</li>
          <li>components/ui/</li>
        </ul>
      </AsciiBox>
    )}
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel side="end">
    {(chWidth) => (
      <AsciiBox width={chWidth} title="Preview" padY={0}>
        <p>Select a file to preview its contents here.</p>
      </AsciiBox>
    )}
  </ResizablePanel>
</ResizablePanelGroup>`,
      preview: <ResizableDemo />,
    },
  ],
};
