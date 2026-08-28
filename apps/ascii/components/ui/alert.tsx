import * as React from "react";

import { AsciiBox } from "@/components/ascii/ascii-box";
import { cn } from "@/lib/utils";

function Alert({
  className,
  variant = "default",
  width = 44,
  ...props
}: React.ComponentProps<"div"> & {
  variant?: "default" | "destructive";
  width?: number;
}) {
  return (
    <AsciiBox
      data-slot="alert"
      role="alert"
      width={width}
      tone={variant === "destructive" ? "primary" : "soft"}
      padY={0}
      contentClassName="flex flex-col px-[2ch]"
      className={cn(
        variant === "destructive" ? "text-destructive" : "text-card-foreground",
        className
      )}
      {...props}
    />
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn("font-weight-heading", className)}
      {...props}
    />
  );
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn("mt-[1lh] text-ascii-comment", className)}
      {...props}
    />
  );
}

export { Alert, AlertDescription, AlertTitle };
