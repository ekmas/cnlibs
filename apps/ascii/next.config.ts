import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

/* The getting-started docs are MDX (content/docs/*.mdx), imported by
 * app/docs. Plugins are named as strings so they also work under
 * Turbopack; remark-gfm adds tables. */
const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-gfm"],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
