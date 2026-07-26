"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { docsNav, gettingStartedNav } from "@/content/docs/manifest";

/** Swaps SidebarMenuButton's plain focus ring for the library's notched
 * px-ring, scoped to just this docs sidebar (the shared component keeps its
 * default ring). focus-visible:ring-0 relies on tailwind-merge canceling the
 * base's focus-visible:ring-2 (same ring-width slot); the --px-bg values
 * duplicate (harmlessly) the base's bg-sidebar-accent classes, since custom
 * properties don't merge-cancel plain bg-* utilities.
 * data-active:hover:*! re-asserts the active look on hover, so hovering an
 * already-active item doesn't switch it to the hover color. Tailwind wraps
 * the [data-active] check in :where(...) (zero specificity), so this
 * compound rule and the base's plain hover:text-sidebar-accent-foreground
 * are equal-specificity — which one wins would otherwise depend on
 * Tailwind's internal emit order, which isn't something this className
 * string controls. The trailing ! forces !important so it wins regardless. */
const menuButtonClassName =
  "h-10 px-ring text-base [--px-bg:var(--sidebar)] [--px-ring-color:var(--sidebar-ring)] hover:[--px-bg:var(--sidebar-accent)] active:[--px-bg:var(--sidebar-accent)] focus-visible:ring-0 data-active:[--px-bg:var(--sidebar-accent)] data-active:text-primary data-active:hover:[--px-bg:var(--sidebar-accent)]! data-active:hover:text-primary! data-open:hover:[--px-bg:var(--sidebar-accent)]";
const groupLabelClassName = "text-sm";

/** Active-page indicator: an 8-bit dot, only rendered for the active link. */
function ActiveDot() {
  return (
    <span
      aria-hidden
      className="size-3 shrink-0 bg-primary px-rounded-md [--pixel-size:2px]"
    />
  );
}

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="static h-full px-rounded-bl-md [--pixel-size:10px]">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className={groupLabelClassName}>
            Getting Started
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {gettingStartedNav.map((page) => {
                const isActive = pathname === page.href;
                return (
                  <SidebarMenuItem key={page.href}>
                    <SidebarMenuButton
                      className={menuButtonClassName}
                      isActive={isActive}
                      render={<Link href={page.href} />}
                    >
                      {isActive && <ActiveDot />}
                      {page.title}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className={groupLabelClassName}>
            Components
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {docsNav.map((doc) => {
                const isActive = pathname === `/docs/${doc.slug}`;
                return (
                  <SidebarMenuItem key={doc.slug}>
                    <SidebarMenuButton
                      className={menuButtonClassName}
                      isActive={isActive}
                      render={<Link href={`/docs/${doc.slug}`} />}
                    >
                      {isActive && <ActiveDot />}
                      {doc.title}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
