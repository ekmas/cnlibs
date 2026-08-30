/** A URL-safe id for a section heading: "1. start from a palette" ->
 * "1-start-from-a-palette". Used by the docs headings and the
 * "on this page" list so anchors agree. */
export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
