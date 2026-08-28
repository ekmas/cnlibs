import * as React from "react";

import { cn } from "@/lib/utils";

function Empty({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty"
      className={cn(
        "flex flex-col items-center py-[1lh] text-center",
        className
      )}
      {...props}
    />
  );
}

function EmptyMedia({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-media"
      aria-hidden
      className={cn(
        "flex items-center justify-center text-ascii-comment select-none",
        className
      )}
      {...props}
    />
  );
}

function EmptyTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-title"
      className={cn("font-weight-heading text-card-foreground", className)}
      {...props}
    />
  );
}

function EmptyDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-description"
      className={cn("mt-[1lh] max-w-[36ch] text-ascii-comment", className)}
      {...props}
    />
  );
}

function EmptyAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-action"
      className={cn("pt-[1lh]", className)}
      {...props}
    />
  );
}

export { Empty, EmptyAction, EmptyDescription, EmptyMedia, EmptyTitle };
