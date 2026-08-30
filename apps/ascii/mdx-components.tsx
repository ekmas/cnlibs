import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { isValidElement, type ReactNode } from "react";

import { AsciiRule } from "@/components/ascii/ascii-box";
import { CodeBlock } from "@/components/ascii/code-block";
import { Button } from "@/components/ui/button";
import { slugify } from "@/lib/slug";
import { cn } from "@/lib/utils";

const EXTERNAL_HREF = /^https?:\/\//;
const TRAILING_NEWLINE = /\n$/;

/** The plain text inside a node tree — a fenced code block's source
 * (MDX renders it as <pre><code>text</code></pre>) or a heading's label. */
function textOf(children: ReactNode): string {
  if (typeof children === "string") {
    return children;
  }
  if (Array.isArray(children)) {
    return children.map(textOf).join("");
  }
  if (isValidElement<{ children?: ReactNode }>(children)) {
    return textOf(children.props.children);
  }
  return "";
}

const codeText = textOf;

/** How markdown maps onto the ASCII docs: "## headings" as section
 * titles, prose on the grid, fenced code as copyable CodeBlocks,
 * lists with the "*" marker, tables as term/definition rows. */
const components = {
  h1: ({ children }) => (
    <h1 className="font-heading text-primary text-sm tracking-tight">
      {children}
    </h1>
  ),
  h2: ({ children }) => {
    const title = textOf(children);
    return (
      <h2
        className="mt-[1lh] scroll-mt-[1lh] font-heading text-ascii-comment text-sm uppercase tracking-[0.08em]"
        data-title={title}
        id={slugify(title)}
      >
        {"## "}
        {children}
      </h2>
    );
  },
  h3: ({ children }) => (
    <h3 className="font-heading text-foreground text-sm">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="max-w-[80ch] text-ascii-soft text-sm">{children}</p>
  ),
  a: ({ href = "", target, children }) => {
    // MDX routes literal <a> elements through here as well as markdown
    // links, so an explicit target="_blank" is honoured — the only way
    // to open an internal page in a new tab.
    const newTab = EXTERNAL_HREF.test(href) || target === "_blank";
    // Links render as the Button link variant (# marker, > on hover) so
    // prose links match the rest of the site. The Button is really an
    // anchor, so tell Base UI it is not a native <button>.
    return (
      <Button
        nativeButton={false}
        render={
          newTab ? (
            // biome-ignore lint/a11y/useAnchorContent: Base UI merges the Button children into this anchor
            <a href={href} rel="noopener noreferrer" target="_blank" />
          ) : (
            <Link href={href} />
          )
        }
        variant="link"
      >
        {children}
      </Button>
    );
  },
  strong: ({ children }) => (
    <strong className="font-heading text-foreground">{children}</strong>
  ),
  em: ({ children }) => (
    <em className="text-foreground not-italic">{children}</em>
  ),
  code: ({ children }) => (
    <code className="whitespace-nowrap text-primary">{children}</code>
  ),
  pre: ({ children }) => (
    <CodeBlock code={codeText(children).replace(TRAILING_NEWLINE, "")} />
  ),
  ul: ({ children }) => (
    <ul className="flex max-w-[80ch] flex-col text-sm">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="flex max-w-[80ch] list-decimal flex-col pl-[3ch] text-sm marker:text-primary">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="group/li flex gap-[1ch] text-ascii-soft">
      <span
        aria-hidden
        className="shrink-0 select-none text-primary [ol_&]:hidden"
      >
        *
      </span>
      <span className="min-w-0 [&>p]:inline">{children}</span>
    </li>
  ),
  hr: () => <AsciiRule className="w-full" />,
  blockquote: ({ children }) => (
    <blockquote className="flex max-w-[80ch] gap-[1ch] text-ascii-comment [&_p]:text-ascii-comment">
      <span aria-hidden className="shrink-0 select-none">
        |
      </span>
      <div className="flex min-w-0 flex-col">{children}</div>
    </blockquote>
  ),
  table: ({ children }) => (
    <div className="max-w-[80ch] overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="text-ascii-comment uppercase tracking-[0.06em]">
      {children}
    </thead>
  ),
  tbody: ({ children }) => <tbody>{children}</tbody>,
  tr: ({ children }) => <tr className="align-top">{children}</tr>,
  th: ({ children }) => (
    <th className="whitespace-nowrap pr-[2ch] font-base">{children}</th>
  ),
  td: ({ children }) => (
    <td className={cn("pr-[2ch] text-ascii-soft", "first:text-primary")}>
      {children}
    </td>
  ),
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
