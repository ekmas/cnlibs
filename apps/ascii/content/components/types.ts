import type { ReactNode } from "react";

/** One example on a component page: a live preview and the code that
 * produced it, shown as Preview / Code tabs. The first section is the
 * page's hero preview and its code feeds the Usage section; every
 * later one becomes its own titled section. */
export type ComponentDocSection = {
  title: string;
  /** One line under the section title. */
  description?: string;
  code?: string;
  preview: ReactNode;
};

/** Everything a component's docs page needs. The install and usage
 * sections are rendered automatically from the slug — only demos live
 * here. */
export type ComponentDoc = {
  title: string;
  description: string;
  links?: { shadcn?: string };
  /** One-time wiring the component needs before use (a provider at the
   * root, a mount point…), shown as its own section after install. */
  setup?: { description: string; code: string };
  sections: ComponentDocSection[];
};
