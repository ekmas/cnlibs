import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "animate-pulse px-rounded-md [--pixel-size:5px] bg-muted",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
