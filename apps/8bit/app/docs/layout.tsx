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
    <SidebarProvider className="flex-col">
      <SiteHeader leading={<SidebarTrigger className="md:hidden" />} />
      <div className="flex flex-1">
        <DocsSidebar />
        <SidebarInset>
          <div className="flex flex-1 flex-col">{children}</div>
          <SiteFooter />
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
