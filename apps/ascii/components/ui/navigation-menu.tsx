"use client";

import { NavigationMenu as NavigationMenuPrimitive } from "@base-ui/react/navigation-menu";
import * as React from "react";

import { AsciiBox } from "@/components/ascii/ascii-box";
import { cn } from "@/lib/utils";

function NavigationMenu({
  className,
  children,
  ...props
}: NavigationMenuPrimitive.Root.Props) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      className={cn("relative font-mono", className)}
      {...props}
    >
      {children}
      <NavigationMenuPrimitive.Portal>
        <NavigationMenuPrimitive.Positioner
          sideOffset={4}
          className="isolate z-50"
        >
          <NavigationMenuPrimitive.Popup
            data-slot="navigation-menu-popup"
            className="origin-(--transform-origin)"
          >
            <AsciiBox width={30} tone="primary" padY={0}>
              <NavigationMenuPrimitive.Viewport data-slot="navigation-menu-viewport" />
            </AsciiBox>
          </NavigationMenuPrimitive.Popup>
        </NavigationMenuPrimitive.Positioner>
      </NavigationMenuPrimitive.Portal>
    </NavigationMenuPrimitive.Root>
  );
}

function NavigationMenuList({
  className,
  children,
  ...props
}: NavigationMenuPrimitive.List.Props) {
  const items = React.Children.toArray(children).filter(Boolean);

  return (
    <div className="inline-flex w-fit items-center gap-[1ch] text-sm select-none">
      <span aria-hidden className="text-ascii-comment">
        [
      </span>
      <NavigationMenuPrimitive.List
        data-slot="navigation-menu-list"
        className={cn("flex items-center gap-[1ch]", className)}
        {...props}
      >
        {items.map((child, i) => (
          <React.Fragment key={i}>
            {i > 0 && (
              <li aria-hidden className="text-ascii-comment">
                |
              </li>
            )}
            {child}
          </React.Fragment>
        ))}
      </NavigationMenuPrimitive.List>
      <span aria-hidden className="text-ascii-comment">
        ]
      </span>
    </div>
  );
}

function NavigationMenuItem({
  className,
  ...props
}: NavigationMenuPrimitive.Item.Props) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn("list-none", className)}
      {...props}
    />
  );
}

function NavigationMenuTrigger({
  className,
  ...props
}: NavigationMenuPrimitive.Trigger.Props) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(
        "inline-flex items-center whitespace-nowrap text-ascii-comment uppercase outline-none",
        "hover:text-foreground",
        "focus-visible:text-primary",
        "data-popup-open:font-weight-heading data-popup-open:text-primary",
        className
      )}
      {...props}
    />
  );
}

function NavigationMenuContent({
  className,
  ...props
}: NavigationMenuPrimitive.Content.Props) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      // The box pads 2ch; pull back 1ch so links read pad, ">", gap, label
      // on the same columns as menu items.
      className={cn("-ml-[1ch] flex flex-col text-ascii-soft", className)}
      {...props}
    />
  );
}

function NavigationMenuLink({
  className,
  children,
  ...props
}: NavigationMenuPrimitive.Link.Props) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        "group/nav-link inline-flex items-center whitespace-nowrap text-ascii-comment uppercase outline-none",
        "hover:text-foreground",
        "focus-visible:text-primary",
        "data-[active]:text-primary",
        className
      )}
      {...props}
    >
      {/* ">" pointer + 1ch gap before the label, like menu items. */}
      <span
        aria-hidden
        className="w-[1ch] shrink-0 opacity-0 group-hover/nav-link:opacity-100 group-focus-visible/nav-link:opacity-100 group-data-[active]/nav-link:opacity-100"
      >
        &gt;
      </span>
      <span className="pl-[1ch]">{children}</span>
    </NavigationMenuPrimitive.Link>
  );
}

export {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
};
