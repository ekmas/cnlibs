import { SiteShell } from "@/components/ascii/site-shell";

export default function ComponentsLayout({
  children,
}: LayoutProps<"/components">) {
  return <SiteShell>{children}</SiteShell>;
}
