import * as React from "react";

import { AsciiBox, AsciiBoxDivider } from "@/components/ascii/ascii-box";
import { cn } from "@/lib/utils";

function Card({
  className,
  width = 40,
  children,
  ...props
}: React.ComponentProps<"div"> & { width?: number }) {
  const sections = React.Children.toArray(children).filter(Boolean);

  return (
    <AsciiBox
      data-slot="card"
      width={width}
      tone="primary"
      padY={0}
      className={cn("text-sm", className)}
      {...props}
    >
      {sections.map((section, i) => (
        <React.Fragment key={i}>
          {i > 0 && <AsciiBoxDivider pad={false} />}
          {section}
        </React.Fragment>
      ))}
    </AsciiBox>
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn("flex flex-col", className)}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("font-heading text-card-foreground", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("mt-[1lh] text-ascii-comment", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn("text-right", className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("flex flex-col", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center justify-end", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};
