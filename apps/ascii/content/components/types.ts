import type { ReactNode } from "react";

/** One titled docs section: a live preview plus an optional copyable
 * code snippet, rendered by app/components/[slug]/page.tsx. */
export type ComponentDocSection = {
  title: string;
  code?: string;
  preview: ReactNode;
};

/** Everything a component's docs page needs. The install section is
 * rendered automatically from the slug — only demos live here. */
export type ComponentDoc = {
  title: string;
  description: string;
  sections: ComponentDocSection[];
};
