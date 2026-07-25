import type { Metadata } from "next";
import { DocsPager } from "@/components/docs/docs-pager";
import { DocsShell } from "@/components/docs/docs-shell";
import { getDocsPager } from "@/lib/docs";

const TITLE = "Introduction";
const DESCRIPTION = "An introduction to the 8bit component library.";

export const metadata: Metadata = {
  description: DESCRIPTION,
  title: TITLE,
};

export default function DocsIndexPage() {
  const { next, prev } = getDocsPager("/docs");

  return (
    <DocsShell>
      <header className="flex flex-col gap-2">
        <h1 className="font-medium text-3xl tracking-tight">{TITLE}</h1>
        <p className="text-base text-muted-foreground leading-relaxed">
          {DESCRIPTION}
        </p>
      </header>
      <p className="text-base leading-relaxed">
        8bit is a retro, pixel-cornered take on shadcn/ui — every component
        starts from a Base UI primitive, and you install it straight into your
        own project with the shadcn CLI. 8bit is one of the libraries under{" "}
        <a
          className="px-underline"
          href="https://cnlibs.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          cnlibs.com
        </a>
        .
      </p>
      <section className="flex flex-col gap-3">
        <h2 className="font-medium text-xl tracking-tight">What's inside</h2>
        <ul className="flex flex-col gap-3 text-base">
          <li className="flex items-start gap-2">
            <span
              aria-hidden
              className="mt-2 size-1.5 shrink-0 bg-foreground px-rounded-md [--pixel-size:1px]"
            />
            <span>
              <span className="font-medium">Pixel corners.</span>{" "}
              <span className="text-muted-foreground">
                A clip-path based system that notches every corner and border
                instead of rounding them, with matching focus rings.
              </span>
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span
              aria-hidden
              className="mt-2 size-1.5 shrink-0 bg-foreground px-rounded-md [--pixel-size:1px]"
            />
            <span>
              <span className="font-medium">Base UI primitives.</span>{" "}
              <span className="text-muted-foreground">
                Accessible, unstyled behavior underneath — 8bit only adds the
                look.
              </span>
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span
              aria-hidden
              className="mt-2 size-1.5 shrink-0 bg-foreground px-rounded-md [--pixel-size:1px]"
            />
            <span>
              <span className="font-medium">A self-hosted registry.</span>{" "}
              <span className="text-muted-foreground">
                Add any component, or a full theme, with a single{" "}
                <code className="inline-block bg-muted px-2 px-border-md px-rounded-md py-0.5 font-mono text-xs [--pixel-size:3px] [--px-border-color:color-mix(in_oklab,var(--foreground)_50%,transparent)]">
                  shadcn add
                </code>{" "}
                command.
              </span>
            </span>
          </li>
        </ul>
      </section>
      <DocsPager next={next} prev={prev} />
    </DocsShell>
  );
}
