import type { Metadata } from "next";
import { CodeBlock } from "@/components/docs/code-block";
import { DocsPager } from "@/components/docs/docs-pager";
import { DocsShell } from "@/components/docs/docs-shell";
import { getDocsPager } from "@/lib/docs";

const TITLE = "Styling";
const DESCRIPTION = "How the pixel-corner styling system works under the hood.";

export const metadata: Metadata = {
  description: DESCRIPTION,
  title: TITLE,
};

const LAYERS_DIAGRAM = `element background   ← the FOCUS RING (transparent until :focus-visible)
::after  (z: -2)     ← the FACE, inset 2px, clipped to --px-shape
::before (z: -1)     ← the BORDER, a polygon with a hole punched in it
button text          ← content paints above all of them`;

export default function DocsStylingPage() {
  const { next, prev } = getDocsPager("/docs/styling");

  return (
    <DocsShell>
      <header className="flex flex-col gap-2">
        <h1 className="font-medium text-3xl tracking-tight">{TITLE}</h1>
        <p className="text-base text-muted-foreground leading-relaxed">
          {DESCRIPTION}
        </p>
      </header>
      <section className="flex flex-col gap-3">
        <h2 className="font-medium text-xl tracking-tight">The constraint</h2>
        <p className="text-base text-muted-foreground leading-relaxed">
          <code className="inline-block bg-muted px-2 px-border-md px-rounded-md py-0.5 font-mono text-xs [--pixel-size:3px] [--px-border-color:color-mix(in_oklab,var(--foreground)_50%,transparent)]">
            clip-path
          </code>{" "}
          clips everything an element paints — background, borders, shadows, and
          every pseudo-element. Nothing can draw outside the clipped silhouette.
          So plain borders get notched off at each corner step, and rings
          (box-shadows drawn outside the box) vanish entirely. Every visual has
          to live inside the silhouette as a layer.
        </p>
      </section>
      <section className="flex flex-col gap-3">
        <h2 className="font-medium text-xl tracking-tight">The shape</h2>
        <p className="text-base text-muted-foreground leading-relaxed">
          One polygon traces the staircase corners, sized by{" "}
          <code className="inline-block bg-muted px-2 px-border-md px-rounded-md py-0.5 font-mono text-xs [--pixel-size:3px] [--px-border-color:color-mix(in_oklab,var(--foreground)_50%,transparent)]">
            --pixel-size
          </code>{" "}
          (
          <code className="inline-block bg-muted px-2 px-border-md px-rounded-md py-0.5 font-mono text-xs [--pixel-size:3px] [--px-border-color:color-mix(in_oklab,var(--foreground)_50%,transparent)]">
            px-rounded-sm
          </code>
          /
          <code className="inline-block bg-muted px-2 px-border-md px-rounded-md py-0.5 font-mono text-xs [--pixel-size:3px] [--px-border-color:color-mix(in_oklab,var(--foreground)_50%,transparent)]">
            -md
          </code>
          ). It's used as the element's{" "}
          <code className="inline-block bg-muted px-2 px-border-md px-rounded-md py-0.5 font-mono text-xs [--pixel-size:3px] [--px-border-color:color-mix(in_oklab,var(--foreground)_50%,transparent)]">
            clip-path
          </code>
          , and published as{" "}
          <code className="inline-block bg-muted px-2 px-border-md px-rounded-md py-0.5 font-mono text-xs [--pixel-size:3px] [--px-border-color:color-mix(in_oklab,var(--foreground)_50%,transparent)]">
            --px-shape
          </code>{" "}
          so every other layer can reuse the exact same geometry.
        </p>
      </section>
      <section className="flex flex-col gap-3">
        <h2 className="font-medium text-xl tracking-tight">The layers</h2>
        <CodeBlock code={LAYERS_DIAGRAM} />
        <ul className="flex flex-col gap-2 text-base leading-relaxed">
          <li>
            <span className="font-medium">Ring.</span>{" "}
            <span className="text-muted-foreground">
              The element's own{" "}
              <code className="inline-block bg-muted px-2 px-border-md px-rounded-md py-0.5 font-mono text-xs [--pixel-size:3px] [--px-border-color:color-mix(in_oklab,var(--foreground)_50%,transparent)]">
                background
              </code>{" "}
              fills the whole silhouette, but the face and border cover all of
              it except an outer 2px gutter. On{" "}
              <code className="inline-block bg-muted px-2 px-border-md px-rounded-md py-0.5 font-mono text-xs [--pixel-size:3px] [--px-border-color:color-mix(in_oklab,var(--foreground)_50%,transparent)]">
                :focus-visible
              </code>
              , that background becomes the ring color, so only a 2px band
              lights up — following the pixel corners exactly, because it{" "}
              <em>is</em> the silhouette's edge. This is why variants set face
              color through{" "}
              <code className="inline-block bg-muted px-2 px-border-md px-rounded-md py-0.5 font-mono text-xs [--pixel-size:3px] [--px-border-color:color-mix(in_oklab,var(--foreground)_50%,transparent)]">
                --px-bg
              </code>{" "}
              instead of{" "}
              <code className="inline-block bg-muted px-2 px-border-md px-rounded-md py-0.5 font-mono text-xs [--pixel-size:3px] [--px-border-color:color-mix(in_oklab,var(--foreground)_50%,transparent)]">
                bg-*
              </code>
              : the background is reserved for the ring.
            </span>
          </li>
          <li>
            <span className="font-medium">Face.</span>{" "}
            <span className="text-muted-foreground">
              A pseudo-element inset by the ring width, clipped to{" "}
              <code className="inline-block bg-muted px-2 px-border-md px-rounded-md py-0.5 font-mono text-xs [--pixel-size:3px] [--px-border-color:color-mix(in_oklab,var(--foreground)_50%,transparent)]">
                --px-shape
              </code>{" "}
              at its own smaller size. Hover only ever touches the face, so it
              physically can't spill past the border.
            </span>
          </li>
          <li>
            <span className="font-medium">Border.</span>{" "}
            <span className="text-muted-foreground">
              One polygon that traces the outer silhouette clockwise, then the
              same silhouette shrunk by 2px counter-clockwise. The opposite
              winding punches a hole, leaving a 2px picture frame that hugs the
              staircase at any thickness.
            </span>
          </li>
        </ul>
      </section>
      <section className="flex flex-col gap-3">
        <h2 className="font-medium text-xl tracking-tight">The seam fix</h2>
        <p className="text-base text-muted-foreground leading-relaxed">
          Layers overlap instead of abutting — the face slides under the border,
          and the ring runs under everything. Two clipped edges meeting exactly
          leave a sub-pixel antialiasing gap (a visible hairline); an edge
          sitting over a continuous layer beneath can't.
        </p>
        <p className="text-base text-muted-foreground leading-relaxed">
          One polygon, declared once, worn three ways — clip, face, and
          hollowed-out frame — stacked so every boundary is an overlap, never a
          joint.
        </p>
      </section>
      <DocsPager next={next} prev={prev} />
    </DocsShell>
  );
}
