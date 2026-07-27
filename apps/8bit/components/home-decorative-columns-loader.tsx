"use client";

import dynamic from "next/dynamic";

/** `ssr: false` only works from a Client Component (see the Next.js lazy
 * loading guide) — this thin loader is that boundary, so page.tsx (a Server
 * Component) can render the decorative columns via a plain static import
 * while still getting a client-only, never-server-rendered result. */
export const HomeDecorativeColumns = dynamic(
  () =>
    import("@/components/home-decorative-columns").then(
      (mod) => mod.HomeDecorativeColumns
    ),
  { ssr: false }
);
