"use client";

import { useAsciiChars } from "@/components/ascii/ascii-chars";
import { bottomBorder, topBorder, vGlyph } from "@/lib/ascii";

const BOX_WIDTH = 18;

function center(text: string, width: number) {
  const inner = Math.max(width - 2, text.length);
  const left = Math.floor((inner - text.length) / 2);
  return `${" ".repeat(left)}${text}${" ".repeat(inner - text.length - left)}`;
}

/** The two side-by-side boxes on the landing page — drawn from the
 * theme's glyph set so they follow the theme like every component. */
function HeroBoxes({ labels }: { labels: [string, string] }) {
  const chars = useAsciiChars();
  const top = topBorder(BOX_WIDTH, undefined, chars);
  const bottom = bottomBorder(BOX_WIDTH, chars);
  const left = vGlyph(chars.left);
  const right = vGlyph(chars.right);
  const middle = (label: string) =>
    `${left}${center(label, BOX_WIDTH)}${right}`;

  return (
    <pre className="w-max whitespace-pre border border-primary/50 bg-card px-[2ch] py-[1lh] font-mono text-primary text-sm">
      {`${top}  ${top}\n${middle(labels[0])}  ${middle(labels[1])}\n${bottom}  ${bottom}`}
    </pre>
  );
}

export { HeroBoxes };
