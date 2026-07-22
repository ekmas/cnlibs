import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import type { DocVariant } from "@/content/docs/registry";

export const title = "Resizable";
export const description = "Accessible resizable panel groups and layouts.";

export const links = {
  shadcn: "https://ui.shadcn.com/docs/components/resizable",
};

export const variants: DocVariant[] = [
  {
    code: `import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export function ResizableDemo() {
  return (
    <ResizablePanelGroup
      className="h-48 w-full max-w-md px-rounded-md px-border-md [--pixel-size:5px]"
      orientation="horizontal"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-medium text-sm">One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-medium text-sm">Two</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}`,
    description:
      "Drag the handle to resize the panels. Set orientation to vertical to stack them.",
    id: "default",
    preview: (
      <ResizablePanelGroup
        className="h-48 w-full max-w-md px-border-md px-rounded-md [--pixel-size:5px]"
        orientation="horizontal"
      >
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-medium text-sm">One</span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-medium text-sm">Two</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    ),
    title: "Default",
  },
];
