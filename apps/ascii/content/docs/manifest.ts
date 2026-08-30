/** The getting-started pages, in reading order. `slug` is the path
 * segment under /docs ("" is /docs itself) and `file` the MDX module
 * in this directory. The sidebar, the search palette, the page
 * header and the prev/next pager all read from here. */
export const docsNav = [
  {
    slug: "",
    file: "introduction",
    title: "Introduction",
    description:
      "ascii is a shadcn/ui-style component library whose entire chrome is text: monospace type, borders drawn from characters, one grid for everything.",
  },
  {
    slug: "installation",
    file: "installation",
    title: "Installation",
    description:
      "Start from a palette, wire a mono font, then add components one at a time with the shadcn CLI.",
  },
  {
    slug: "theming",
    file: "theming",
    title: "Theming",
    description:
      "Three independent dials: the color palette, the mono font, and the characters every frame is drawn with.",
  },
  {
    slug: "grid",
    file: "grid",
    title: "Grid",
    description:
      "Everything sits on one character grid. Here is how it is measured, and the primitives you can draw your own frames with.",
  },
] as const;

export type DocsNavEntry = (typeof docsNav)[number];

export function docsHref(slug: string) {
  return slug ? `/docs/${slug}` : "/docs";
}

export function getDocsEntry(slug: string): DocsNavEntry | undefined {
  return docsNav.find((entry) => entry.slug === slug);
}
