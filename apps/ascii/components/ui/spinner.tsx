"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

const FRAMES = ["|", "/", "-", "\\"];

function Spinner({
  className,
  intervalMs = 150,
  ...props
}: React.ComponentProps<"span"> & { intervalMs?: number }) {
  const [frame, setFrame] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setFrame((f) => (f + 1) % FRAMES.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);

  return (
    <span
      data-slot="spinner"
      role="status"
      aria-label="Loading"
      className={cn(
        "inline-block w-[1ch] font-mono text-primary select-none",
        className
      )}
      {...props}
    >
      {FRAMES[frame]}
    </span>
  );
}

export { Spinner };
