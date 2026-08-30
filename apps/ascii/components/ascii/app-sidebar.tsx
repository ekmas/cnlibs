"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { AsciiRule } from "@/components/ascii/ascii-box";
import { Brand } from "@/components/ascii/brand";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { docsHref, docsNav } from "@/content/docs/manifest";
import { asciiComponents } from "@/lib/ascii-components";

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="none">
      <SidebarHeader className="gap-0 p-0">
        <div className="flex h-[3lh] items-center px-[3ch]">
          <Brand />
        </div>
        <AsciiRule />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="font-mono text-ascii-comment text-sm uppercase tracking-[0.08em]">
            Getting started
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {docsNav.map((entry) => {
                const href = docsHref(entry.slug);
                const isActive = pathname === href;

                return (
                  <SidebarMenuItem key={href}>
                    <SidebarMenuButton
                      isActive={isActive}
                      className="font-mono text-sm data-active:text-primary"
                      render={<Link href={href} />}
                    >
                      <span>
                        {isActive ? `[ ${entry.title} ]` : entry.title}
                      </span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="font-mono text-ascii-comment text-sm uppercase tracking-[0.08em]">
            Components
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {asciiComponents.map((entry) => {
                const href = `/components/${entry.slug}`;
                const isActive = pathname === href;

                return (
                  <SidebarMenuItem key={entry.slug}>
                    <SidebarMenuButton
                      isActive={isActive}
                      className="font-mono text-sm data-active:text-primary"
                      render={<Link href={href} />}
                    >
                      <span>{isActive ? `[ ${entry.name} ]` : entry.name}</span>
                    </SidebarMenuButton>
                    {entry.status === "soon" && (
                      <SidebarMenuBadge className="font-mono text-ascii-comment text-sm">
                        soon
                      </SidebarMenuBadge>
                    )}
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
