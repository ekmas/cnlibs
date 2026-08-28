import type * as React from "react";

import { CodeBlock } from "@/components/ascii/code-block";
import { cn } from "@/lib/utils";

/** A titled docs section on a component page — "install", "variants",
 * "sizes", "states", "example". Pass `code` to append a copyable
 * snippet of the section's JSX. */
function DocSection({
  title,
  code,
  children,
  className,
}: {
  title: string;
  code?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("flex flex-col gap-[1lh]", className)}>
      <h2 className="font-weight-heading text-ascii-comment text-sm uppercase tracking-[0.08em]">
        {`## ${title}`}
      </h2>
      {children}
      {code && <CodeBlock code={code} />}
    </section>
  );
}

/** One labeled demo line: a fixed-width label column and the demo. */
function DemoRow({
  label,
  className,
  children,
}: {
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex items-start gap-[2ch]", className)}>
      <span className="w-[14ch] shrink-0 text-ascii-comment text-sm">
        {label}
      </span>
      <div className="flex min-w-0 flex-1 flex-wrap items-center gap-[2ch]">
        {children}
      </div>
    </div>
  );
}

export { DemoRow, DocSection };
