import Link from "next/link";

import { AsciiRule } from "@/components/ascii/ascii-box";
import { asciiComponents } from "@/lib/ascii-components";

export default function ComponentsIndexPage() {
  const readyCount = asciiComponents.filter((c) => c.status === "ready").length;

  return (
    <div className="flex max-w-5xl flex-col gap-8 px-[2ch] py-[1lh]">
      <div className="flex flex-col gap-2 pb-[1lh]">
        <span className="text-ascii-comment text-sm uppercase tracking-[0.08em]">
          {"/// ui kit — monospace + ascii borders"}
        </span>
        <h1 className="mb-[1lh] font-heading text-primary text-sm tracking-tight">
          ASCII COMPONENTS — FULL LIBRARY
        </h1>
        <p className="max-w-2xl text-ascii-soft text-sm">
          Every component in the shadcn registry, rebuilt in IBM Plex Mono.{" "}
          {readyCount} of {asciiComponents.length} are wired up and interactive
          — the rest are on the way.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
        {asciiComponents.map((entry) => (
          <Link
            key={entry.slug}
            href={`/components/${entry.slug}`}
            className="group flex flex-col gap-1 py-[1lh] font-mono text-foreground text-sm hover:text-primary"
          >
            <span className="flex items-baseline justify-between gap-3">
              <span>{entry.name}</span>
              <span
                className={
                  entry.status === "ready"
                    ? "text-primary text-sm uppercase tracking-[0.08em]"
                    : "text-ascii-comment text-sm uppercase tracking-[0.08em]"
                }
              >
                {entry.status === "ready" ? "ready" : "soon"}
              </span>
            </span>
            <AsciiRule className="w-full opacity-40 group-hover:opacity-100" />
          </Link>
        ))}
      </div>
    </div>
  );
}
