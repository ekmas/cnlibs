"use client";

import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar";
import * as React from "react";

import { cn } from "@/lib/utils";

function Avatar({
  className,
  size = "default",
  ...props
}: AvatarPrimitive.Root.Props & {
  size?: "default" | "sm" | "lg";
}) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-size={size}
      className={cn(
        "group/avatar relative flex size-8 shrink-0 px-rounded-md [--pixel-size:2px] select-none after:absolute after:inset-0 after:border after:border-border after:mix-blend-darken after:[clip-path:var(--px-shape)] data-[size=lg]:size-10 data-[size=lg]:[--pixel-size:3px] data-[size=sm]:size-6 data-[size=sm]:[--pixel-size:1px] dark:after:mix-blend-lighten",
        className
      )}
      {...props}
    />
  );
}

function AvatarImage({ className, ...props }: AvatarPrimitive.Image.Props) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn(
        "aspect-square size-full [clip-path:var(--px-shape)] object-cover",
        className
      )}
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
      className={cn(
        "flex size-full items-center justify-center [clip-path:var(--px-shape)] bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs",
        className
      )}
      {...props}
    />
  );
}

function AvatarBadge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="avatar-badge"
      className={cn(
        "absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground bg-blend-color ring-2 ring-background select-none",
        "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden",
        "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2",
        "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2",
        className
      )}
      {...props}
    />
  );
}

function AvatarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group"
      className={cn(
        "group/avatar-group flex -space-x-2 *:data-[slot=avatar]:border-2 *:data-[slot=avatar]:border-background *:data-[slot=avatar]:[clip-path:none]! *:data-[slot=avatar]:before:absolute *:data-[slot=avatar]:before:inset-0 *:data-[slot=avatar]:before:bg-background *:data-[slot=avatar]:before:content-['']",
        className
      )}
      {...props}
    />
  );
}

function AvatarGroupCount({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group-count"
      className={cn(
        "relative isolate flex size-8 shrink-0 items-center justify-center px-rounded-md [--pixel-size:2px] [clip-path:none]! bg-background text-sm text-muted-foreground border-2 border-background before:absolute before:-z-10 before:inset-0 before:bg-muted before:content-[''] before:[clip-path:var(--px-shape)] after:absolute after:inset-0 after:border after:border-border after:mix-blend-darken after:[clip-path:var(--px-shape)] group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=lg]/avatar-group:[--pixel-size:3px] group-has-data-[size=sm]/avatar-group:size-6 group-has-data-[size=sm]/avatar-group:[--pixel-size:1px] [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3 dark:after:mix-blend-lighten",
        className
      )}
      {...props}
    />
  );
}

export {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
};
