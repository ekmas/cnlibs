export function hRepeat(n: number, char = "-") {
  return char.repeat(Math.max(n, 0))
}

export function topBorder(width: number, title?: string) {
  if (!title) return `+${hRepeat(width - 2)}+`
  const label = ` ${title} `
  const left = 2
  const right = Math.max(width - 2 - left - label.length, 1)
  return `+${hRepeat(left)}${label}${hRepeat(right)}+`
}

export function bottomBorder(width: number) {
  return `+${hRepeat(width - 2)}+`
}

export function dividerBorder(width: number) {
  return `+${hRepeat(width - 2)}+`
}

/** Divider row for a table: "+" at every column boundary, dashes
 * exactly as wide as each column. Its "+" positions land on the "|"
 * positions of rows built as `|cell|cell|…|` with the same widths. */
export function columnDivider(widths: number[]) {
  return `+${widths.map((w) => hRepeat(w)).join("+")}+`
}

/** Total character width of a table row (and its dividers):
 * one "|" per boundary plus the column widths. */
export function tableRowWidth(widths: number[]) {
  return widths.reduce((sum, w) => sum + w, 0) + widths.length + 1
}
