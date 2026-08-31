import { SiteShell } from "@/components/ascii/site-shell";

export default function StylingLayout({ children }: LayoutProps<"/styling">) {
  return <SiteShell>{children}</SiteShell>;
}
