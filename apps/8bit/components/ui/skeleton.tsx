import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "animate-pixel-skeleton px-rounded-sm [--pixel-size:5px]",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
