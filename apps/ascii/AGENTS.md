# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

# ascii.cnlibs.com

An ascii-styled shadcn/ui-based component library. This app lives at `apps/ascii` inside the `cnlibs` pnpm/turbo monorepo. Freshly scaffolded — mirrors the structure and conventions of `apps/8bit` (see its AGENTS.md for the patterns this app will follow as it grows).

## Commands

- `pnpm dev` / `build` / `start` — this app (from `apps/ascii`, or via root `turbo run dev` etc.)
- `pnpm check-types` — `tsc --noEmit`
- `pnpm lint` / `pnpm format` — Biome, scoped to this app
- `pnpm check` / `pnpm fix` (repo root) — Ultracite, repo-wide

## Conventions

- `cn()` = `clsx` + `tailwind-merge` (`lib/utils.ts`).
- Tailwind v4, theme tokens in `app/globals.css` (`:root` / `.dark` + `@theme inline`). Class order enforced by Biome/Ultracite — run `pnpm lint` / `pnpm format` after editing `className` strings.
- Theming: `next-themes` with `attribute="class"` via `components/theme-provider.tsx`.
- ASCII theme (font / colors / border glyphs): `components/ascii/ascii-theme.tsx` provides `useAsciiChars()` — every framed component draws its edges from it, never from literal `+`/`-`/`|`. Use the primitives in `components/ascii/ascii-box.tsx` (`AsciiEdge`, `AsciiSide`, `AsciiVRule`, `AsciiRule`, `AsciiHBorder`, `AsciiJunction`) or pass `chars` to the `lib/ascii.ts` helpers. Lines may be repeating sequences (`<|>`); junctions are one char. Persisted in localStorage (`lib/ascii-theme.ts`), edited at `/styling`.
