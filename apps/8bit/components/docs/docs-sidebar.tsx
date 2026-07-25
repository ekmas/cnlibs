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

const menuButtonClassName =
  "relative data-active:before:absolute data-active:before:inset-y-1.5 data-active:before:left-0 data-active:before:w-0.5 data-active:before:bg-primary data-active:text-primary";

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="static h-full px-rounded-bl-md [--pixel-size:10px]">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Getting Started</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {gettingStartedNav.map((page) => (
                <SidebarMenuItem key={page.href}>
                  <SidebarMenuButton
                    className={menuButtonClassName}
                    isActive={pathname === page.href}
                    render={<Link href={page.href} />}
                  >
                    {page.title}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Components</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {docsNav.map((doc) => (
                <SidebarMenuItem key={doc.slug}>
                  <SidebarMenuButton
                    className={menuButtonClassName}
                    isActive={pathname === `/docs/${doc.slug}`}
                    render={<Link href={`/docs/${doc.slug}`} />}
                  >
                    {doc.title}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
