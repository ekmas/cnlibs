"use client";

import * as React from "react";

import { bottomBorder, hRepeat, topBorder } from "@/lib/ascii";
import { cn } from "@/lib/utils";

type Tone = "primary" | "soft";

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
   * over the absolute side rules so intersections show only "+". */
  bg: string;
}>({
  width: 40,
  tone: "soft",
  bg: "bg-card",
});

/** A column of "|" characters that stretches to match its sibling's
 * height via flex `items-stretch` — real glyphs, clipped by overflow. */
function AsciiVRule({
  tone = "soft",
  className,
}: {
  tone?: Tone;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "w-[1ch] shrink-0 select-none overflow-hidden",
        toneClass[tone],
        className
      )}
    >
      <pre className="m-0 font-mono">{"|\n".repeat(300)}</pre>
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
  padY = 1,
  children,
  ...props
}: AsciiBoxProps) {
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
          {topBorder(width, title)}
        </div>
        <div className="relative">
          <AsciiVRule tone={tone} className="absolute inset-y-0 left-0" />
          {padY > 0 && <AsciiPad rows={padY} />}
          <div className={cn("min-w-0 px-[2ch]", contentClassName)}>
            {children}
          </div>
          {padY > 0 && <AsciiPad rows={padY} />}
          <AsciiVRule tone={tone} className="absolute inset-y-0 right-0" />
        </div>
        <div
          aria-hidden
          className={cn("select-none whitespace-pre", toneClass[tone])}
        >
          {bottomBorder(width)}
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
      {/* Positioned above the box's absolute "|" rules and repainting the
       * surface, so the intersection cells show only the "+" glyphs. */}
      <div className={cn("relative z-10", bg)}>
        <span>{`+${hRepeat(width - 2)}+`}</span>
      </div>
      {pad && <div> </div>}
    </div>
  );
}

/** A single "|...|"-flanked line — for list-style rows (menus, table
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
      <span aria-hidden className={cn("shrink-0 select-none", toneClass[tone])}>
        |
      </span>
      <div className={cn("min-w-0 flex-1 px-[1ch]", contentClassName)}>
        {children}
      </div>
      <span aria-hidden className={cn("shrink-0 select-none", toneClass[tone])}>
        |
      </span>
    </div>
  );
}

/** A fluid single-character-tall rule for contexts where the exact
 * character width isn't known ahead of time (e.g. spans a flexible
 * container). Renders real repeated glyphs, clipped by overflow. */
function AsciiRule({
  className,
  char = "-",
  tone = "soft",
  orientation = "horizontal",
}: {
  className?: string;
  char?: string;
  tone?: Tone;
  orientation?: "horizontal" | "vertical";
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "select-none overflow-hidden whitespace-pre text-nowrap",
        toneClass[tone],
        className
      )}
    >
      {orientation === "vertical" ? `${char}\n`.repeat(300) : char.repeat(400)}
    </div>
  );
}

export {
  AsciiBox,
  AsciiBoxContext,
  AsciiBoxDivider,
  AsciiBoxRow,
  AsciiPad,
  AsciiRule,
  AsciiVRule,
};
