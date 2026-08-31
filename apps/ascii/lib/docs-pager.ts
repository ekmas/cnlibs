import { docsHref, docsNav } from "@/content/docs/manifest";
import { asciiComponents } from "@/lib/ascii-components";

export type PagerLink = { href: string; title: string };

/** Every docs page in reading order: the getting-started guide, the
 * component index, then each component as listed in the sidebar. */
const pages: PagerLink[] = [
  ...docsNav.map((entry) => ({
    href: docsHref(entry.slug),
    title: entry.title,
  })),
  { href: "/components", title: "Components" },
  ...asciiComponents.map((entry) => ({
    href: `/components/${entry.slug}`,
    title: entry.name,
  })),
];

/** The pages before and after `href` in reading order. */
export function getPager(href: string): { prev?: PagerLink; next?: PagerLink } {
  const index = pages.findIndex((page) => page.href === href);
  if (index === -1) {
    return {};
  }
  return { prev: pages[index - 1], next: pages[index + 1] };
}
