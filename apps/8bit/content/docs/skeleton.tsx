import { Skeleton } from "@/components/ui/skeleton";
import type { DocVariant } from "@/content/docs/registry";

export const title = "Skeleton";
export const description =
  "Use to show a placeholder while content is loading.";

export const links = {
  shadcn: "https://ui.shadcn.com/docs/components/skeleton",
};

export const variants: DocVariant[] = [
  {
    code: `import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Skeleton className="h-32 w-full" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  );
}`,
    description:
      "Stack skeleton blocks to mirror the shape of the content that is loading.",
    id: "default",
    preview: (
      <div className="flex w-full max-w-sm flex-col gap-3">
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    ),
    title: "Default",
  },
];
