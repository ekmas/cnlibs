import { SiteShell } from "@/components/ascii/site-shell";

export default function DocsLayout({ children }: LayoutProps<"/docs">) {
  return <SiteShell>{children}</SiteShell>;
}
