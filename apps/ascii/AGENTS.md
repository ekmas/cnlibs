# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

# ascii.cnlibs.com

An ascii-styled shadcn/ui-based component library. This app lives at `apps/ascii` inside the `cnlibs` pnpm/turbo monorepo. Freshly scaffolded — mirrors the structure and conventions of `apps/8bit` (see its AGENTS.md for the patterns this app will follow as it grows).

## Registry

- `registry.json` (repo root) + `public/r/*.json` + `public/r/themes/*.json` — the self-hosted registry consumed by `shadcn add`/`shadcn init`, built by `scripts/generate-registry.mjs` exactly like 8bit's. Component items follow imports under `@/components/ui/`, `@/hooks/`, `@/components/ascii/`, `@/lib/` (except utils) and `@/registry/` so the frame primitives ship alongside each component. **Regenerate after touching anything in `components/ui/`, `components/ascii/`, `lib/ascii*` or `registry/themes.ts`**: `pnpm registry:build` from the repo root (committed artifacts, baked with the production `SITE_URL` from `lib/site.ts`).
- `registry/themes.ts` — the palette registry's single source of truth (7 dark + 7 light, import-free). Feeds the `/styling` palette rows (via `lib/ascii-theme.ts`) and compiles to `registry:style` items carrying the full `cssVars` (`@theme inline` mappings, `:root` tokens) plus the base CSS (`ASCII_THEME_CSS`). Add a palette by appending an entry, then `pnpm registry:build`.

## Commands

- `pnpm dev` / `build` / `start` — this app (from `apps/ascii`, or via root `turbo run dev` etc.)
- `pnpm check-types` — `tsc --noEmit`
- `pnpm lint` / `pnpm format` — Biome, scoped to this app
- `pnpm check` / `pnpm fix` (repo root) — Ultracite, repo-wide

## Conventions

- `cn()` = `clsx` + `tailwind-merge` (`lib/utils.ts`).
- Tailwind v4, theme tokens in `app/globals.css` (`:root` / `.dark` + `@theme inline`). Class order enforced by Biome/Ultracite — run `pnpm lint` / `pnpm format` after editing `className` strings.
- Theming: `next-themes` with `attribute="class"` via `components/theme-provider.tsx`.
- ASCII theme (font / colors / border glyphs): `components/ascii/ascii-theme.tsx` provides `useAsciiChars()` — every framed component draws its edges from it, never from literal `+`/`-`/`|`. Use the primitives in `components/ascii/ascii-box.tsx` (`AsciiEdge`, `AsciiSide`, `AsciiVRule`, `AsciiRule`, `AsciiHBorder`, `AsciiJunction`) or pass `chars` to the `lib/ascii.ts` helpers. Lines may be repeating sequences (`<|>`); junctions are one char. Persisted in localStorage (`lib/ascii-theme.ts`), edited at `/styling`. `components/ascii/ascii-chars.tsx` holds the bare glyph context (`useAsciiChars`, static `AsciiCharsProvider`) so installed components don't drag the editor provider along.
