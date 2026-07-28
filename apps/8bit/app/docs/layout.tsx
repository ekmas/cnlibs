import type { ReactNode } from "react";
import { DocsSidebar } from "@/components/docs/docs-sidebar";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider className="h-svh min-h-0 flex-col sm:h-[calc(100dvh-50px)]">
      <SiteHeader
        className="px-rounded-t-md [--pixel-size:0px] sm:[--pixel-size:10px]"
        leading={<SidebarTrigger className="hidden" />}
      />
      <div className="flex min-h-0 flex-1 overflow-hidden">
        <DocsSidebar />
        <SidebarInset className="no-scrollbar min-h-0 overflow-y-auto px-rounded-br-md [--pixel-size:0px] sm:[--pixel-size:10px]">
          <div className="flex flex-1 flex-col [--pixel-size:3px]">
            {children}
          </div>
          <SiteFooter />
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
