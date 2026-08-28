"use client";

import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar";
import * as React from "react";

import { AsciiVRule } from "@/components/ascii/ascii-box";
import { bottomBorder, topBorder } from "@/lib/ascii";
import { cn } from "@/lib/utils";

/* "+--+" over "|AA|" — the box hugs the two initial characters. */
const AVATAR_WIDTH = 4;
const AVATAR_ROWS = 1;

function Avatar({ className, children, ...props }: AvatarPrimitive.Root.Props) {
  const width = AVATAR_WIDTH;
  const rows = AVATAR_ROWS;

  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "group/avatar relative inline-flex shrink-0 flex-col font-mono text-sm text-primary/60 select-none",
        className
      )}
      style={{ width: `${width}ch` }}
      {...props}
    >
      <span aria-hidden className="block whitespace-pre">
        {topBorder(width)}
      </span>
      <span className="relative block" style={{ height: `${rows}lh` }}>
        <AsciiVRule className="absolute inset-y-0 left-0" />
        <span className="absolute inset-x-[1ch] inset-y-0 flex items-center justify-center overflow-hidden uppercase">
          {children}
        </span>
        <AsciiVRule className="absolute inset-y-0 right-0" />
      </span>
      <span aria-hidden className="block whitespace-pre">
        {bottomBorder(width)}
      </span>
    </AvatarPrimitive.Root>
  );
}

function AvatarImage({ className, ...props }: AvatarPrimitive.Image.Props) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("absolute inset-0 size-full object-cover", className)}
      {...props}
    />
  );
}

function AvatarFallback({
  className,
  ...props
}: AvatarPrimitive.Fallback.Props) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn("text-primary", className)}
      {...props}
    />
  );
}

function AvatarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group"
      className={cn("group/avatar-group flex -space-x-[1ch]", className)}
      {...props}
    />
  );
}

/** Overflow count drawn as the same "+--+" box as a regular avatar. */
function AvatarGroupCount({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  const width = AVATAR_WIDTH;
  return (
    <div
      data-slot="avatar-group-count"
      className={cn(
        "relative inline-flex shrink-0 flex-col font-mono text-sm text-primary/60 select-none",
        className
      )}
      style={{ width: `${width}ch` }}
      {...props}
    >
      <span aria-hidden className="block whitespace-pre">
        {topBorder(width)}
      </span>
      <span className="relative block" style={{ height: `${AVATAR_ROWS}lh` }}>
        <AsciiVRule className="absolute inset-y-0 left-0" />
        <span className="absolute inset-x-[1ch] inset-y-0 flex items-center justify-center text-ascii-comment">
          +{children}
        </span>
        <AsciiVRule className="absolute inset-y-0 right-0" />
      </span>
      <span aria-hidden className="block whitespace-pre">
        {bottomBorder(width)}
      </span>
    </div>
  );
}

export { Avatar, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarImage };
