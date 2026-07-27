import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DocsPager } from "@/components/docs/docs-pager";
import { DocsShell } from "@/components/docs/docs-shell";
import { VariantSection } from "@/components/docs/variant-section";
import type { DocVariant } from "@/content/docs/registry";
import { getDocsPager } from "@/lib/docs";

const TITLE = "Pixel Utilities";
const DESCRIPTION =
  "The three utility classes every 8bit component is built from: px-rounded-*, px-border-*, and px-ring.";

export const metadata: Metadata = {
  description: DESCRIPTION,
  title: TITLE,
};

/** Inline code chip matching the rest of the docs (see the Styling page) —
 * a styled <code>, not the browser default monospace text. */
function InlineCode({ children }: { children: ReactNode }) {
  return (
    <code className="inline-block bg-muted px-2 px-border-md px-rounded-md py-0.5 font-mono text-xs [--pixel-size:3px] [--px-border-color:color-mix(in_oklab,var(--foreground)_50%,transparent)]">
      {children}
    </code>
  );
}

interface Section {
  description: ReactNode;
  variant: DocVariant;
}

const SECTIONS: Section[] = [
  {
    description: (
      <>
        <InlineCode>px-rounded-sm</InlineCode> cuts one square notch per corner;{" "}
        <InlineCode>px-rounded-md</InlineCode> cuts a two-step staircase. Size
        is controlled by <InlineCode>--pixel-size</InlineCode>, so the "radius"
        scales with a single variable instead of{" "}
        <InlineCode>border-radius</InlineCode>.
      </>
    ),
    variant: {
      id: "rounded",
      title: "Rounded corners",
      preview: (
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <div className="size-16 bg-primary px-rounded-sm [--pixel-size:4px]" />
            <span className="text-muted-foreground text-xs">px-rounded-sm</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="size-16 bg-primary px-rounded-md [--pixel-size:4px]" />
            <span className="text-muted-foreground text-xs">px-rounded-md</span>
          </div>
        </div>
      ),
      code: `<div className="size-16 bg-primary px-rounded-sm [--pixel-size:4px]" />
<div className="size-16 bg-primary px-rounded-md [--pixel-size:4px]" />`,
    },
  },
  {
    description: (
      <>
        <InlineCode>--pixel-size</InlineCode> is the one knob that scales the
        whole cut — set it as an arbitrary property on the element (or an
        ancestor, since it inherits like any custom property). Every{" "}
        <InlineCode>px-rounded-*</InlineCode>/
        <InlineCode>px-border-*</InlineCode>/<InlineCode>px-ring</InlineCode>{" "}
        utility on that element reads the same value, so the corners and the
        border thickness of the notch stay in sync automatically.
      </>
    ),
    variant: {
      id: "pixel-size",
      title: "Pixel size",
      preview: (
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <div className="size-16 bg-primary px-rounded-md [--pixel-size:2px]" />
            <span className="text-muted-foreground text-xs">
              [--pixel-size:2px]
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="size-16 bg-primary px-rounded-md [--pixel-size:4px]" />
            <span className="text-muted-foreground text-xs">
              [--pixel-size:4px]
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="size-16 bg-primary px-rounded-md [--pixel-size:8px]" />
            <span className="text-muted-foreground text-xs">
              [--pixel-size:8px]
            </span>
          </div>
        </div>
      ),
      code: `<div className="size-16 bg-primary px-rounded-md [--pixel-size:2px]" />
<div className="size-16 bg-primary px-rounded-md [--pixel-size:4px]" />
<div className="size-16 bg-primary px-rounded-md [--pixel-size:8px]" />`,
    },
  },
  {
    description: (
      <>
        <InlineCode>px-border-*</InlineCode> draws a notched border as a{" "}
        <InlineCode>::before</InlineCode> pseudo-element, sized to the same{" "}
        <InlineCode>--pixel-size</InlineCode> as the element it's on. Its
        polygon only lines up with the parent's own{" "}
        <InlineCode>clip-path</InlineCode> if they're the same step —{" "}
        <InlineCode>px-border-sm</InlineCode> must be paired with{" "}
        <InlineCode>px-rounded-sm</InlineCode>, and{" "}
        <InlineCode>px-border-md</InlineCode> with{" "}
        <InlineCode>px-rounded-md</InlineCode>. Mixing sizes clips the border
        against a differently-shaped silhouette and the corners come out visibly
        broken, as shown below. Color comes from{" "}
        <InlineCode>--px-border-color</InlineCode> (falls back to{" "}
        <InlineCode>var(--border)</InlineCode>), thickness from{" "}
        <InlineCode>--px-border-width</InlineCode> (default 2px).
      </>
    ),
    variant: {
      id: "border",
      title: "Border",
      preview: (
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <div className="size-16 bg-background px-border-md px-rounded-md [--pixel-size:4px] [--px-border-color:var(--primary)] [--px-border-width:2px]" />
            <span className="text-muted-foreground text-xs">
              border-md + rounded-md
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="size-16 bg-background px-border-sm px-rounded-md [--pixel-size:4px] [--px-border-color:var(--destructive)] [--px-border-width:2px]" />
            <span className="text-destructive text-xs">
              border-sm + rounded-md
            </span>
          </div>
        </div>
      ),
      code: `{/* matched — pick the same step for both */}
<div
  className="size-16 bg-background px-border-md px-rounded-md [--pixel-size:4px] [--px-border-color:var(--primary)] [--px-border-width:2px]"
/>

{/* mismatched — avoid this, the corners will look broken */}
<div
  className="size-16 bg-background px-border-sm px-rounded-md [--pixel-size:4px] [--px-border-color:var(--destructive)] [--px-border-width:2px]"
/>`,
    },
  },
  {
    description: (
      <>
        For elements that sit flush against a neighbor on every side but one —
        the first/last row in a list, the first/last button in a group — round
        only the outer edge instead of keeping all four corners.{" "}
        <InlineCode>px-rounded-t-md</InlineCode>/
        <InlineCode>px-rounded-b-md</InlineCode> round the top/bottom two
        corners, for the top/bottom item in a vertical stack;{" "}
        <InlineCode>px-rounded-l-md</InlineCode>/
        <InlineCode>px-rounded-r-md</InlineCode> do the same for the first/last
        item in a horizontal row. Placed directly against each other with no
        gap, a pair reads as one continuous rounded group.{" "}
        <InlineCode>px-rounded-t-sm</InlineCode>/
        <InlineCode>px-rounded-b-sm</InlineCode> are the single-step versions,
        and <InlineCode>px-rounded-tl-md</InlineCode>/
        <InlineCode>-tr-md</InlineCode>/<InlineCode>-bl-md</InlineCode>/
        <InlineCode>-br-md</InlineCode> round just one corner instead of a whole
        edge.
      </>
    ),
    variant: {
      id: "flush",
      title: "Rounded on one side",
      preview: (
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <div className="size-16 bg-primary px-rounded-t-md [--pixel-size:4px]" />
              <span className="text-muted-foreground text-xs">
                px-rounded-t-md
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="size-16 bg-primary px-rounded-b-md [--pixel-size:4px]" />
              <span className="text-muted-foreground text-xs">
                px-rounded-b-md
              </span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <div className="size-16 bg-primary px-rounded-l-md [--pixel-size:4px]" />
              <span className="text-muted-foreground text-xs">
                px-rounded-l-md
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="size-16 bg-primary px-rounded-r-md [--pixel-size:4px]" />
              <span className="text-muted-foreground text-xs">
                px-rounded-r-md
              </span>
            </div>
          </div>
        </div>
      ),
      code: `<div className="size-16 bg-primary px-rounded-t-md [--pixel-size:4px]" />
<div className="size-16 bg-primary px-rounded-b-md [--pixel-size:4px]" />

<div className="size-16 bg-primary px-rounded-l-md [--pixel-size:4px]" />
<div className="size-16 bg-primary px-rounded-r-md [--pixel-size:4px]" />`,
    },
  },
  {
    description: (
      <>
        <InlineCode>px-ring</InlineCode> turns the element's own background into
        the ring on <InlineCode>:focus-visible</InlineCode> — a{" "}
        <InlineCode>::after</InlineCode> pseudo, inset and clipped to the same
        silhouette as its paired <InlineCode>px-rounded-*</InlineCode>, paints
        the visible face on top. Set the face color with{" "}
        <InlineCode>--px-bg</InlineCode>, never a <InlineCode>bg-*</InlineCode>{" "}
        utility: the real background is reserved for the ring. Tab to the button
        below to see it.
      </>
    ),
    variant: {
      id: "ring",
      title: "Focus ring",
      preview: (
        <button
          className="bg-transparent px-4 px-ring px-rounded-md py-2 text-sm [--pixel-size:4px] [--px-bg:var(--muted)]"
          type="button"
        >
          Tab to me
        </button>
      ),
      code: `<button
  className="px-4 py-2 px-ring px-rounded-md bg-transparent text-sm [--pixel-size:4px] [--px-bg:var(--muted)]"
  type="button"
>
  Tab to me
</button>`,
    },
  },
];

export default function DocsPixelUtilitiesPage() {
  const { next, prev } = getDocsPager("/docs/pixel-utilities");

  return (
    <DocsShell>
      <header className="flex flex-col gap-2">
        <h1 className="font-medium text-3xl tracking-tight">{TITLE}</h1>
        <p className="text-base text-muted-foreground leading-relaxed">
          The three utility classes every 8bit component is built from:{" "}
          <InlineCode>px-rounded-*</InlineCode>,{" "}
          <InlineCode>px-border-*</InlineCode>, and{" "}
          <InlineCode>px-ring</InlineCode>.
        </p>
      </header>
      {SECTIONS.map(({ description, variant }) => (
        <div className="flex flex-col gap-3" key={variant.id}>
          <div className="flex flex-col gap-3">
            <h2 className="font-medium text-xl tracking-tight">
              {variant.title}
            </h2>
            <p className="text-muted-foreground text-sm">{description}</p>
          </div>
          <VariantSection showHeader={false} variant={variant} />
        </div>
      ))}
      <DocsPager next={next} prev={prev} />
    </DocsShell>
  );
}
