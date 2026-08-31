"use client";

import { AsciiBox } from "@/components/ascii/ascii-box";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export function ResizableDemo() {
  return (
    <ResizablePanelGroup defaultLeftWidth={30} minWidth={12} totalWidth={61}>
      <ResizablePanel side="start">
        {(chWidth) => (
          <AsciiBox padY={0} title="Files" width={chWidth}>
            <ul className="flex flex-col gap-1 text-ascii-soft">
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
          <AsciiBox padY={0} title="Preview" width={chWidth}>
            <p className="text-ascii-soft">
              Select a file to preview its contents here.
            </p>
          </AsciiBox>
        )}
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
