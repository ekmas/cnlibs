import * as React from "react";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

function Field({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field"
      className={cn("flex flex-col", className)}
      {...props}
    />
  );
}

function FieldLabel({
  className,
  ...props
}: React.ComponentProps<typeof Label>) {
  return (
    <Label
      data-slot="field-label"
      className={cn(
        "text-ascii-comment uppercase tracking-[0.04em]",
        className
      )}
      {...props}
    />
  );
}

function FieldControl({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="field-control" className={cn(className)} {...props} />;
}

function FieldDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="field-description"
      className={cn("text-ascii-soft", className)}
      {...props}
    />
  );
}

function FieldError({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="field-error"
      className={cn("text-destructive", className)}
      {...props}
    />
  );
}

export { Field, FieldControl, FieldDescription, FieldError, FieldLabel };
