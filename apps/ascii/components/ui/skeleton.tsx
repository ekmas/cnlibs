import { cn } from "@/lib/utils";

function Skeleton({
  className,
  char = "#",
  ...props
}: React.ComponentProps<"div"> & { char?: string }) {
  return (
    <div
      data-slot="skeleton"
      aria-hidden
      className={cn(
        "animate-skeleton overflow-hidden font-mono text-sm whitespace-pre text-ascii-comment select-none",
        className
      )}
      {...props}
    >
      {/* A block of filler glyphs, clipped by the sized container — size
       * the skeleton with w-[Nch] / h-[Nlh] to stay on the char grid. */}
      {`${char.repeat(200)}\n`.repeat(30)}
    </div>
  );
}

export { Skeleton };
