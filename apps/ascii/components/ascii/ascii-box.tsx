"use client";

import * as React from "react";

import { useAsciiChars } from "@/components/ascii/ascii-chars";
import {
  type AsciiChars,
  bottomBorder,
  dividerBorder,
  fill,
  junctionGlyph,
  topBorder,
  vColumn,
  vGlyph,
} from "@/lib/ascii";
import { cn } from "@/lib/utils";

type Tone = "primary" | "soft";

/** Which line of the glyph set a rule draws with. */
type AsciiLine = keyof Omit<AsciiChars, "junction">;

/* Every ASCII frame in the app shares one border color (matching the
 * inputs' and menus' rest-state frames). The tone axis is kept as API
 * so emphasis can be reintroduced without touching call sites. */
const toneClass: Record<Tone, string> = {
  primary: "text-primary/60",
  soft: "text-primary/60",
};

const AsciiBoxContext = React.createContext<{
  width: number;
  tone: Tone;
  /** Background utility class of the box surface — dividers repaint it
   * over the absolute side rules so intersections show only junctions. */
  bg: string;
}>({
  width: 40,
  tone: "soft",
  bg: "bg-card",
});

/** The junction glyph ("+" by default) — for corners and intersections
 * drawn outside a full AsciiBox (layout frames, fluid borders). */
function AsciiJunction({
  className,
  ...props
}: Omit<React.ComponentProps<"span">, "children">) {
  const chars = useAsciiChars();
  return (
    <span aria-hidden className={cn("select-none", className)} {...props}>
      {junctionGlyph(chars)}
    </span>
  );
}

/** One glyph of a vertical edge — for single-row frames (inputs,
 * menu items, table rows) that draw their own sides per row. */
function AsciiSide({
  side = "left",
  row = 0,
  className,
  ...props
}: Omit<React.ComponentProps<"span">, "children"> & {
  side?: "left" | "right";
  row?: number;
}) {
  const chars = useAsciiChars();
  return (
    <span aria-hidden className={cn("select-none", className)} {...props}>
      {vGlyph(chars[side], row)}
    </span>
  );
}

/** A fixed-width "+----+" edge row for frames sized in characters —
 * the top (optionally titled) or bottom border of an input, menu,
 * avatar… Rendered as a block span so it can sit inside buttons. */
function AsciiEdge({
  edge,
  width,
  title,
  className,
  ...props
}: Omit<React.ComponentProps<"span">, "children" | "title"> & {
  edge: "top" | "bottom";
  width: number;
  title?: string;
}) {
  const chars = useAsciiChars();
  return (
    <span
      aria-hidden
      className={cn("block select-none whitespace-pre", className)}
      {...props}
    >
      {edge === "top"
        ? topBorder(width, title, chars)
        : bottomBorder(width, chars)}
    </span>
  );
}

/** A column of side glyphs that stretches to match its sibling's
 * height via flex `items-stretch` — real glyphs, clipped by overflow. */
function AsciiVRule({
  tone = "soft",
  side = "left",
  className,
}: {
  tone?: Tone;
  side?: "left" | "right";
  className?: string;
}) {
  const chars = useAsciiChars();
  return (
    <div
      aria-hidden
      className={cn(
        "w-[1ch] shrink-0 select-none overflow-hidden",
        toneClass[tone],
        className
      )}
    >
      <pre className="m-0 font-mono">{vColumn(300, chars[side])}</pre>
    </div>
  );
}

/** One or more literal empty text rows — vertical padding that stays
 * on the character grid instead of arbitrary CSS lengths. */
function AsciiPad({
  rows = 1,
  className,
}: {
  rows?: number;
  className?: string;
}) {
  return (
    <div aria-hidden className={cn("select-none whitespace-pre", className)}>
      {Array.from({ length: rows }, () => " ").join("\n")}
    </div>
  );
}

type AsciiBoxProps = Omit<React.ComponentProps<"div">, "title"> & {
  width: number;
  title?: string;
  tone?: Tone;
  contentClassName?: string;
  /** Empty text rows rendered above and below the content. */
  padY?: number;
  /** Background utility class of the box surface. Pass this instead of a
   * bg-* class in className so dividers can repaint it at intersections. */
  bg?: string;
};

function AsciiBox({
  width,
  title,
  tone = "soft",
  bg = "bg-card",
  className,
  contentClassName,
  padY = 0,
  children,
  ...props
}: AsciiBoxProps) {
  const chars = useAsciiChars();
  return (
    <AsciiBoxContext.Provider value={{ width, tone, bg }}>
      <div
        data-slot="ascii-box"
        className={cn(
          "inline-flex flex-col font-mono text-card-foreground text-sm",
          bg,
          className
        )}
        style={{ width: `${width}ch` }}
        {...props}
      >
        <div
          aria-hidden
          className={cn("select-none whitespace-pre", toneClass[tone])}
        >
          {topBorder(width, title, chars)}
        </div>
        <div className="relative">
          <AsciiVRule
            tone={tone}
            side="left"
            className="absolute inset-y-0 left-0"
          />
          {padY > 0 && <AsciiPad rows={padY} />}
          <div className={cn("min-w-0 px-[2ch]", contentClassName)}>
            {children}
          </div>
          {padY > 0 && <AsciiPad rows={padY} />}
          <AsciiVRule
            tone={tone}
            side="right"
            className="absolute inset-y-0 right-0"
          />
        </div>
        <div
          aria-hidden
          className={cn("select-none whitespace-pre", toneClass[tone])}
        >
          {bottomBorder(width, chars)}
        </div>
      </div>
    </AsciiBoxContext.Provider>
  );
}

/** A "+---+" divider spanning the box's full content width, flanked
 * by one empty text row on each side (disable with pad={false}) —
 * for separating sections (header/content/footer) inside an AsciiBox. */
function AsciiBoxDivider({
  className,
  pad = true,
}: {
  className?: string;
  pad?: boolean;
}) {
  const { width, tone, bg } = React.useContext(AsciiBoxContext);
  const chars = useAsciiChars();
  return (
    <div
      aria-hidden
      className={cn(
        "-mx-[2ch] select-none whitespace-pre",
        toneClass[tone],
        className
      )}
    >
      {pad && <div> </div>}
      {/* Positioned above the box's absolute side rules and repainting
       * the surface, so the intersection cells show only junctions. */}
      <div className={cn("relative z-10", bg)}>
        <span>{dividerBorder(width, chars)}</span>
      </div>
      {pad && <div> </div>}
    </div>
  );
}

/** A single side-glyph-flanked line — for list-style rows (menus, table
 * rows) that need their own hover/selection background per row. */
function AsciiBoxRow({
  className,
  contentClassName,
  children,
  ...props
}: React.ComponentProps<"div"> & { contentClassName?: string }) {
  const { tone } = React.useContext(AsciiBoxContext);
  return (
    <div className={cn("-mx-[2ch] flex items-center", className)} {...props}>
      <AsciiSide side="left" className={cn("shrink-0", toneClass[tone])} />
      <div className={cn("min-w-0 flex-1 px-[1ch]", contentClassName)}>
        {children}
      </div>
      <AsciiSide side="right" className={cn("shrink-0", toneClass[tone])} />
    </div>
  );
}

/** A fluid single-character-tall rule for contexts where the exact
 * character width isn't known ahead of time (e.g. spans a flexible
 * container). Renders real repeated glyphs, clipped by overflow.
 *
 * Draws with the theme's `divider` line (horizontal) or `left` line
 * (vertical) unless `line` picks another edge; `char` overrides the
 * theme entirely. */
function AsciiRule({
  className,
  char,
  line,
  tone = "soft",
  orientation = "horizontal",
}: {
  className?: string;
  char?: string;
  line?: AsciiLine;
  tone?: Tone;
  orientation?: "horizontal" | "vertical";
}) {
  const chars = useAsciiChars();
  const vertical = orientation === "vertical";
  const seq = char ?? chars[line ?? (vertical ? "left" : "divider")];
  return (
    <div
      aria-hidden
      className={cn(
        "select-none overflow-hidden whitespace-pre text-nowrap",
        toneClass[tone],
        className
      )}
    >
      {vertical ? vColumn(300, seq) : fill(400, seq)}
    </div>
  );
}

/** A fluid "+----+" row: junction, a horizontal line that fills the
 * available width, junction. For box edges whose width is set by
 * layout rather than a character count. */
function AsciiHBorder({
  line = "top",
  tone = "soft",
  className,
  ...props
}: Omit<React.ComponentProps<"div">, "children"> & {
  line?: AsciiLine;
  tone?: Tone;
}) {
  return (
    <div
      aria-hidden
      className={cn("flex select-none", toneClass[tone], className)}
      {...props}
    >
      <AsciiJunction className="shrink-0" />
      <AsciiRule line={line} tone={tone} className="min-w-0 flex-1" />
      <AsciiJunction className="shrink-0" />
    </div>
  );
}

export type { AsciiLine };
export {
  AsciiBox,
  AsciiBoxContext,
  AsciiBoxDivider,
  AsciiBoxRow,
  AsciiEdge,
  AsciiHBorder,
  AsciiJunction,
  AsciiPad,
  AsciiRule,
  AsciiSide,
  AsciiVRule,
};
