import type { Metadata } from "next";

import { DocsPageView } from "@/components/ascii/docs-page";
import Introduction from "@/content/docs/introduction.mdx";
import { docsNav } from "@/content/docs/manifest";

const [entry] = docsNav;

export const metadata: Metadata = {
  title: `${entry.title} — ascii`,
  description: entry.description,
};

export default function DocsIndexPage() {
  return (
    <DocsPageView entry={entry}>
      <Introduction />
    </DocsPageView>
  );
}
