/** The glyph set every ASCII frame in the library is drawn from.
 *
 * Line entries (`top`, `bottom`, `left`, `right`, `divider`) may be a
 * single character or a sequence that repeats to fill the run — `<|>`
 * draws `<|><|><|>…`. Vertical lines repeat one character per row.
 * `junction` is always exactly one character: it sits at corners and
 * wherever a divider meets a side. */
export type AsciiChars = {
  /** Top edge of a box, repeats horizontally. */
  top: string;
  /** Bottom edge of a box, repeats horizontally. */
  bottom: string;
  /** Left edge of a box, repeats vertically (one char per row). */
  left: string;
  /** Right edge of a box, repeats vertically (one char per row). */
  right: string;
  /** Interior horizontal rules: section dividers, separators, table
   * row dividers. Repeats horizontally. */
  divider: string;
  /** Corners and intersections. Single character. */
  junction: string;
};

export const DEFAULT_ASCII_CHARS: AsciiChars = {
  top: "-",
  bottom: "-",
  left: "|",
  right: "|",
  divider: "-",
  junction: "+",
};

/** Repeats `seq` to exactly `n` characters (truncating a partial
 * final repeat). An empty sequence falls back to a space so the
 * layout keeps its width. */
export function fill(n: number, seq = "-") {
  const count = Math.max(n, 0);
  if (count === 0) {
    return "";
  }
  const unit = seq.length > 0 ? seq : " ";
  return unit.repeat(Math.ceil(count / unit.length)).slice(0, count);
}

/** @deprecated use `fill` — kept as an alias for existing call sites. */
export function hRepeat(n: number, char = "-") {
  return fill(n, char);
}

/** The glyph a vertical sequence shows on a given row. */
export function vGlyph(seq: string, row = 0) {
  if (seq.length === 0) {
    return " ";
  }
  return seq[row % seq.length] ?? " ";
}

/** `rows` glyphs of a vertical sequence, one per line. */
export function vColumn(rows: number, seq = "|") {
  const lines: string[] = [];
  for (let row = 0; row < rows; row += 1) {
    lines.push(vGlyph(seq, row));
  }
  return lines.join("\n");
}

/** A single junction glyph — sequences are trimmed to their first
 * character, an empty string falls back to the default. */
export function junctionGlyph(chars: AsciiChars) {
  return chars.junction.length > 0
    ? chars.junction[0]
    : DEFAULT_ASCII_CHARS.junction;
}

export function topBorder(
  width: number,
  title?: string,
  chars: AsciiChars = DEFAULT_ASCII_CHARS
) {
  const j = junctionGlyph(chars);
  if (!title) {
    return `${j}${fill(width - 2, chars.top)}${j}`;
  }
  const label = ` ${title} `;
  const left = 2;
  const right = Math.max(width - 2 - left - label.length, 1);
  return `${j}${fill(left, chars.top)}${label}${fill(right, chars.top)}${j}`;
}

export function bottomBorder(
  width: number,
  chars: AsciiChars = DEFAULT_ASCII_CHARS
) {
  const j = junctionGlyph(chars);
  return `${j}${fill(width - 2, chars.bottom)}${j}`;
}

export function dividerBorder(
  width: number,
  chars: AsciiChars = DEFAULT_ASCII_CHARS
) {
  const j = junctionGlyph(chars);
  return `${j}${fill(width - 2, chars.divider)}${j}`;
}

/** Divider row for a table: a junction at every column boundary,
 * divider glyphs exactly as wide as each column. Its junctions land
 * on the side-glyph positions of rows built as `|cell|cell|…|` with
 * the same widths. */
export function columnDivider(
  widths: number[],
  chars: AsciiChars = DEFAULT_ASCII_CHARS
) {
  const j = junctionGlyph(chars);
  return `${j}${widths.map((w) => fill(w, chars.divider)).join(j)}${j}`;
}

/** Total character width of a table row (and its dividers):
 * one side glyph per boundary plus the column widths. */
export function tableRowWidth(widths: number[]) {
  return widths.reduce((sum, w) => sum + w, 0) + widths.length + 1;
}
