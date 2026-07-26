import { Separator } from "@/components/ui/separator";
import type { DocVariant } from "@/content/docs/registry";

export const title = "Separator";
export const description = "Visually or semantically separates content.";

export const links = {
  shadcn: "https://ui.shadcn.com/docs/components/separator",
};

export const variants: DocVariant[] = [
  {
    code: `import { Separator } from "@/components/ui/separator";

export function SeparatorDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="space-y-1">
        <h4 className="font-heading text-sm">
          8bit
        </h4>
        <p className="text-muted-foreground text-sm">
          Pixel-cornered UI components.
        </p>
      </div>
      <Separator />
      <div className="flex h-5 items-center gap-4 text-sm">
        <span>Docs</span>
        <Separator orientation="vertical" />
        <span>Components</span>
        <Separator orientation="vertical" />
        <span>Themes</span>
      </div>
    </div>
  );
}`,
    description:
      "Set orientation to vertical to separate items laid out in a row.",
    id: "default",
    preview: (
      <div className="flex w-full max-w-md flex-col gap-4">
        <div className="space-y-1">
          <h4 className="font-heading text-sm">8bit</h4>
          <p className="text-muted-foreground text-sm">
            Pixel-cornered UI components.
          </p>
        </div>
        <Separator />
        <div className="flex h-5 items-center gap-4 text-sm">
          <span>Docs</span>
          <Separator orientation="vertical" />
          <span>Components</span>
          <Separator orientation="vertical" />
          <span>Themes</span>
        </div>
      </div>
    ),
    title: "Default",
  },
];
