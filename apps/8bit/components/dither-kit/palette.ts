export type Rgb = [number, number, number]

export type DitherColor =
  | "green"
  | "blue"
  | "purple"
  | "pink"
  | "orange"
  | "red"
  | "grey"

export type Seed = { fill: Rgb; line: Rgb; star: Rgb }

// Diverges from the upstream dither-kit palette (which hardcodes 7 fixed
// hexes): each dither colour is instead read from the *site's own* theme
// tokens, so charts recolour with light/dark mode and with whatever palette
// is applied on /theme. "chart" colours map to the standard shadcn
// --chart-1..5 tokens; red/grey reuse the semantically closest existing
// token rather than adding new ones.
const CSS_VAR_OF: Record<DitherColor, string> = {
  green: "--chart-1",
  blue: "--chart-2",
  purple: "--chart-3",
  pink: "--chart-4",
  orange: "--chart-5",
  red: "--destructive",
  grey: "--muted-foreground",
}

// Pre-hydration/SSR value — deliberately identical on the server and the
// client's first render (no DOM access happens during render), so charts
// paint immediately and React never sees a hydration mismatch. The real
// theme colour swaps in a moment later, once mounted (see initDitherPalette
// below and its callers in cartesian-root.tsx / polar-root.tsx).
const FALLBACK: Record<DitherColor, Rgb> = {
  green: [40, 210, 110],
  blue: [53, 143, 243],
  purple: [150, 110, 255],
  pink: [240, 90, 190],
  orange: [255, 150, 50],
  red: [240, 70, 70],
  grey: [92, 92, 100],
}

function lighten([r, g, b]: Rgb, amount: number): Rgb {
  return [
    r + (255 - r) * amount,
    g + (255 - g) * amount,
    b + (255 - b) * amount,
  ]
}

// Each seed: the area-fill hue, the bright series line, and the star
// sparkle — the latter two are lightened tiers of the same resolved hue.
function seedFromFill(fill: Rgb): Seed {
  return { fill, line: lighten(fill, 0.35), star: lighten(fill, 0.65) }
}

function buildFallbackPalette(): Record<DitherColor, Seed> {
  const result = {} as Record<DitherColor, Seed>
  for (const color of Object.keys(CSS_VAR_OF) as DitherColor[]) {
    result[color] = seedFromFill(FALLBACK[color])
  }
  return result
}

// getComputedStyle(...).color does NOT reliably return "rgb(...)" — modern
// browsers (and this app's Tailwind/Lightning CSS build, which normalizes
// oklch() further) may report the resolved colour in lab()/oklch()/etc, and
// naively regex-matching numbers out of that string silently misreads those
// channels as if they were 0-255 RGB. A 1x1 canvas sidesteps the format
// entirely: canvas fillStyle accepts any valid CSS <color>, and
// getImageData always reads back concrete sRGB bytes.
let probeCanvasCtx: CanvasRenderingContext2D | null = null

function resolveCssColor(varName: string): Rgb | null {
  const probe = document.createElement("span")
  probe.style.color = `var(${varName})`
  probe.style.display = "none"
  document.body.appendChild(probe)
  const computed = getComputedStyle(probe).color
  document.body.removeChild(probe)

  probeCanvasCtx ??= document.createElement("canvas").getContext("2d")
  if (!probeCanvasCtx) return null
  probeCanvasCtx.fillStyle = computed
  probeCanvasCtx.fillRect(0, 0, 1, 1)
  const data = probeCanvasCtx.getImageData(0, 0, 1, 1).data
  return [data[0]!, data[1]!, data[2]!]
}

function buildLivePalette(): Record<DitherColor, Seed> {
  const result = {} as Record<DitherColor, Seed>
  for (const color of Object.keys(CSS_VAR_OF) as DitherColor[]) {
    const fill = resolveCssColor(CSS_VAR_OF[color]) ?? FALLBACK[color]
    result[color] = seedFromFill(fill)
  }
  return result
}

let cache: Record<DitherColor, Seed> = buildFallbackPalette()
// Bumped on every refresh() — RAF paint loops (bar-canvas, cartesian-canvas)
// poll this each frame to notice a colour swap even when nothing else they
// already track (hover, selection, animation progress) happened to change.
let revision = 0
const listeners = new Set<() => void>()
let observing = false

function refresh() {
  cache = buildLivePalette()
  revision++
  for (const listener of listeners) listener()
}

// Called from a useEffect in cartesian-root.tsx / polar-root.tsx — never
// during render, so the DOM reads here can't cause a hydration mismatch.
// Safe to call from every chart root: the observer only gets wired once.
export function initDitherPalette() {
  refresh()
  if (observing) return
  observing = true
  // Theme changes land as attribute mutations on <html> — next-themes
  // toggles the `dark` class, and the /theme preset picker sets CSS vars as
  // inline `style`. Either one triggers a fresh resolve + re-render.
  const observer = new MutationObserver(refresh)
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class", "style"],
  })
}

export function subscribeDitherPalette(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

// Same reference for both getSnapshot and getServerSnapshot until
// initDitherPalette's first refresh() — that's what keeps the very first
// client render identical to the server-rendered one.
export function getDitherPaletteSnapshot() {
  return cache
}

export function getDitherPaletteRevision() {
  return revision
}

export const rgb = ([r, g, b]: Rgb, k = 1, a = 1) =>
  `rgba(${Math.round(r * k)},${Math.round(g * k)},${Math.round(b * k)},${a})`

export const seedOfColor = (color: DitherColor): Seed => cache[color]

export const isDitherColor = (value: unknown): value is DitherColor =>
  typeof value === "string" && value in CSS_VAR_OF
