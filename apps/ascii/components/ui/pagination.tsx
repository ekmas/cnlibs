import * as React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      data-slot="pagination"
      aria-label="pagination"
      className={cn(
        "mx-auto flex w-full justify-center font-mono text-sm",
        className
      )}
      {...props}
    />
  );
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-[1ch]", className)}
      {...props}
    />
  );
}

function PaginationItem({ ...props }: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />;
}

function PaginationLink({
  className,
  isActive,
  children,
  ...props
}: React.ComponentProps<typeof Button> & { isActive?: boolean }) {
  return (
    <Button
      data-slot="pagination-link"
      aria-current={isActive ? "page" : undefined}
      variant={isActive ? "default" : "ghost"}
      nativeButton={false}
      className={className}
      {...props}
    >
      {children}
    </Button>
  );
}

function PaginationPrevious({
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <Button
      data-slot="pagination-previous"
      aria-label="Go to previous page"
      variant="ghost"
      size="icon"
      nativeButton={false}
      className={className}
      {...props}
    >
      {"<"}
    </Button>
  );
}

function PaginationNext({
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <Button
      data-slot="pagination-next"
      aria-label="Go to next page"
      variant="ghost"
      size="icon"
      nativeButton={false}
      className={className}
      {...props}
    >
      {">"}
    </Button>
  );
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="pagination-ellipsis"
      aria-hidden="true"
      className={cn(
        "flex h-8 items-center px-[2ch] text-ascii-comment select-none",
        className
      )}
      {...props}
    >
      ...
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
