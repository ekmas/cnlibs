import { Spinner } from "@/components/ui/spinner";
import type { DocVariant } from "@/content/docs/registry";

export const title = "Spinner";
export const description = "An indicator that shows an in-progress state.";

export const links = {
  shadcn: "https://ui.shadcn.com/docs/components/spinner",
};

export const variants: DocVariant[] = [
  {
    code: `import { Spinner } from "@/components/ui/spinner";

export function SpinnerDemo() {
  return (
    <div className="flex items-center gap-2 text-muted-foreground text-sm">
      <Spinner />
      Loading...
    </div>
  );
}`,
    description: "Renders a spinning loader icon to indicate pending work.",
    id: "default",
    preview: (
      <div className="flex items-center gap-2 text-muted-foreground text-sm">
        <Spinner />
        Loading...
      </div>
    ),
    title: "Default",
  },
];
