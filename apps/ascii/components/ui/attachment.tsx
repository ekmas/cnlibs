import * as React from "react";

import { AsciiRule, AsciiVRule } from "@/components/ascii/ascii-box";
import { cn } from "@/lib/utils";

function Attachment({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="attachment"
      className={cn("inline-flex flex-col bg-card text-sm", className)}
      {...props}
    >
      <div aria-hidden className="flex text-primary/60 select-none">
        <span>+</span>
        <AsciiRule className="flex-1" />
        <span>+</span>
      </div>
      <div className="relative">
        <AsciiVRule tone="soft" className="absolute inset-y-0 left-0" />
        <div className="flex min-w-0 items-start gap-[1ch] px-[2ch]">
          {children}
        </div>
        <AsciiVRule tone="soft" className="absolute inset-y-0 right-0" />
      </div>
      <div aria-hidden className="flex text-primary/60 select-none">
        <span>+</span>
        <AsciiRule className="flex-1" />
        <span>+</span>
      </div>
    </div>
  );
}

function AttachmentIcon({
  className,
  children = "[*]",
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="attachment-icon"
      aria-hidden
      className={cn("shrink-0 text-primary select-none", className)}
      {...props}
    >
      {children}
    </span>
  );
}

function AttachmentContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="attachment-content"
      className={cn("flex min-w-0 flex-1 flex-col", className)}
      {...props}
    />
  );
}

function AttachmentName({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="attachment-name"
      className={cn("truncate text-foreground", className)}
      {...props}
    />
  );
}

function AttachmentMeta({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="attachment-meta"
      className={cn("truncate text-ascii-comment", className)}
      {...props}
    />
  );
}

/** A thin `[####----]`-style fill for an in-progress upload. `progress` is 0-100. */
function AttachmentProgress({
  className,
  progress,
  width = 10,
  ...props
}: React.ComponentProps<"div"> & { progress: number; width?: number }) {
  const clamped = Math.max(0, Math.min(100, progress));
  const filled = Math.round((clamped / 100) * width);

  return (
    <div
      data-slot="attachment-progress"
      className={cn(
        "flex shrink-0 items-center gap-[1ch] text-primary select-none",
        className
      )}
      {...props}
    >
      <span aria-hidden className="whitespace-pre">
        {`[${"#".repeat(filled)}${"-".repeat(width - filled)}]`}
      </span>
      <span className="text-ascii-comment tabular-nums">{clamped}%</span>
    </div>
  );
}

function AttachmentDone({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="attachment-done"
      className={cn("shrink-0 text-primary select-none", className)}
      {...props}
    >
      [done]
    </span>
  );
}

export {
  Attachment,
  AttachmentContent,
  AttachmentDone,
  AttachmentIcon,
  AttachmentMeta,
  AttachmentName,
  AttachmentProgress,
};
