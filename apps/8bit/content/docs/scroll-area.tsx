import { ScrollArea } from "@/components/ui/scroll-area";
import type { DocVariant } from "@/content/docs/registry";

export const title = "Scroll Area";
export const description =
  "Augments native scroll functionality for custom, cross-browser styling.";

export const links = {
  shadcn: "https://ui.shadcn.com/docs/components/scroll-area",
};

const releases = [
  "v1.4.0 - Added the navigation menu component",
  "v1.3.0 - New resizable panel primitive",
  "v1.2.0 - Improved scroll area performance",
  "v1.1.0 - Added dark mode support",
  "v1.0.0 - Initial public release",
  "v0.9.0 - Beta release with core components",
  "v0.8.0 - Added theming support",
];

export const variants: DocVariant[] = [
  {
    code: `import { ScrollArea } from "@/components/ui/scroll-area";

const releases = [
  "v1.4.0 - Added the navigation menu component",
  "v1.3.0 - New resizable panel primitive",
  "v1.2.0 - Improved scroll area performance",
  "v1.1.0 - Added dark mode support",
  "v1.0.0 - Initial public release",
  "v0.9.0 - Beta release with core components",
  "v0.8.0 - Added theming support",
];

export function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-48 w-full max-w-xs">
      <div className="flex flex-col gap-3 p-4">
        <h4 className="font-medium text-sm">Changelog</h4>
        {releases.map((release) => (
          <p className="text-muted-foreground text-sm" key={release}>
            {release}
          </p>
        ))}
      </div>
    </ScrollArea>
  );
}`,
    description:
      "Constrain the height and the content will scroll inside a custom, styled scrollbar.",
    id: "default",
    preview: (
      <ScrollArea className="h-48 w-full max-w-xs">
        <div className="flex flex-col gap-3 p-4">
          <h4 className="font-medium text-sm">Changelog</h4>
          {releases.map((release) => (
            <p className="text-muted-foreground text-sm" key={release}>
              {release}
            </p>
          ))}
        </div>
      </ScrollArea>
    ),
    title: "Default",
  },
];
