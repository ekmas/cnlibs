<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# 8bit.cnlibs.com

A shadcn/ui-based component library with a retro, pixel-cornered "8-bit" look, built on [Base UI](https://base-ui.com) primitives. This app lives at `apps/8bit` inside the `cnlibs` pnpm/turbo monorepo; the repo root also owns `registry.json` and the script that builds this app's self-hosted component registry.

## The magic: pixel corners (`app/globals.css`)

Every notched "8-bit" corner is a `clip-path: polygon(...)` silhouette, not `border-radius`. The utilities:

- **`px-rounded-sm` / `px-rounded-md`** — clip the element itself into a notched shape. `-sm` cuts one square per corner, `-md` cuts a two-step staircase. Size is controlled by `--pixel-size` (set it via an arbitrary property, e.g. `[--pixel-size:4px]`).
- **`px-rounded-tl-md` / `-tr-md` / `-rounded-b-sm`** — single-edge variants for elements that sit flush against a neighbor on every side but one (e.g. the first/last tab in a strip, or a panel directly under one).
- **`px-border-sm` / `-md` / `-b-sm`** — draw a notched *border* as a `::before` pseudo-element, matching the corresponding `px-rounded-*` silhouette. Color via `--px-border-color` (falls back to `var(--border)`), thickness via `--px-border-width` (default `2px`).
- **`px-ring`** — the focus-ring mechanism. On `:focus-visible` the **element's own `background-color`** becomes `var(--px-ring-color, var(--ring))`. A `::after` pseudo, inset by `--px-face-offset` (default `--px-ring-width`, `2px`) and clipped to `--px-shape`, paints the actual visible face using `--px-bg`.

**The one rule that matters:** on any `px-ring` element, set the face color with `--px-bg`, never with a `bg-*` utility — the real background is reserved for the ring. **If `--px-bg` is left `transparent` while an element is focused, the ring's background-color shows through the *entire* box, not just a thin edge** (see gotchas below).

`--px-shape` is shared: whichever `px-rounded-*` utility runs last defines it, and `px-border-*`/`px-ring` both read it, so a border/ring always matches whatever corner shape the element (or its shape-defining ancestor) declared.

## Project structure

- `components/ui/*` — vendored shadcn components (Base UI primitive + `cva` variants + `cn`), each with a matching registry entry.
- `registry.json` (repo root) + `public/r/*.json` — the self-hosted registry consumed by `shadcn add`/`shadcn init`. **Regenerate after touching anything in `components/ui/` or `registry/themes.ts`**: `pnpm registry:build` from the repo root (runs `scripts/generate-registry.mjs`, which walks component imports to resolve each item's files/dependencies, and separately compiles theme entries).
- `registry/themes.ts` — the theme registry's single source of truth: one `ThemeRegistryEntry` per theme (`slug`, `title`, `description`, `cssVars: { theme?, light, dark }`), matching shadcn's `registry-item` `cssVars` shape directly. Feeds three things: the live preview/select on `/theme`, the compiled `registry:theme` items in `public/r/themes/{slug}.json`, and `registry.json`. Fully self-hosted — no runtime or build-time dependency on an external theme source. Add a theme by appending an entry here, then re-running `pnpm registry:build`.
- `content/docs/*.tsx` — one module per documented component, exporting `title`, `description`, optional `links`, and `variants: DocVariant[]` (each variant has a `preview` node and a `code` string shown in the docs' Preview/Code tabs). Registered in `lib/docs.ts`'s `docs` map and `content/docs/manifest.ts`'s nav.
- `app/docs/` — the docs routes (`/docs`, `/docs/[slug]`) that render `content/docs/*` via `lib/docs.ts`.
- `app/theme/` + `components/theme/` — the `/theme` page: pick a registry theme, preview it live across components (`ThemePreview`), and copy a `shadcn add` (existing project) or `shadcn init` (scaffold new project) command for it (`ThemeInstallCommand`). Selection persists via `lib/theme-preset.ts` (localStorage) and is applied by `components/theme-preset-sync.tsx` (sets CSS vars directly on `<html>`).
- `components/docs/` — docs-only UI: code blocks, install tabs, sidebar, search, pager, copy buttons.
- `components/site-header.tsx` / `site-footer.tsx` — shared chrome across the marketing page, docs, and other routes.
- `lib/` — `utils.ts` (`cn`), `site.ts` (`SITE_URL`, used to build install commands), `docs.ts`, `package-manager.ts` (persisted npm/pnpm/yarn/bun choice), `theme-preset.ts` (persisted `/theme` selection), `use-copy-to-clipboard.ts`.

## Conventions

- `cn()` = `clsx` + `tailwind-merge` (`lib/utils.ts`). Later classes win on genuine conflicts, including matching arbitrary properties like `[--px-bg:...]`.
- Tailwind v4. Class order is enforced by Biome/Ultracite (`useSortedClasses`) — run `pnpm lint` / `pnpm format` (or `pnpm check` / `pnpm fix` from the repo root) after editing `className` strings instead of hand-sorting.
- Components wrap Base UI primitives; trigger/content parts commonly accept a `render` prop to swap in a custom element (e.g. `<DropdownMenuTrigger render={<Button variant="outline">Open</Button>} />`, `<AlertDialogCancel render={<Button variant="outline" />} />`).
- Every part carries a `data-slot="..."` attribute for external targeting/testing.
- Theming: `next-themes` with `attribute="class"`, wired in `app/layout.tsx` via `components/theme-provider.tsx`; toggle lives in `components/theme-toggle.tsx`. Dark values are the `.dark { ... }` block in `globals.css` — no per-component dark-mode overrides needed beyond `dark:` variants that already exist.

## Gotchas learned the hard way

- **`transition-all` + `px-ring` can make the focus ring "blink."** If a `--px-bg`/`--px-shape` custom property flips instantly on state change while `background-color` is still mid-`transition`, there's a window where the ring color shows unmasked. Fix by narrowing the transitioned properties, e.g. `[transition-property:color]!`, rather than adding more custom-property overrides.
- **Disabled Base UI triggers often stay keyboard-focusable on purpose** (`focusableWhenDisabled`, an accessibility choice) — they get `aria-disabled="true"`, not the native `disabled` attribute. `aria-disabled:pointer-events-none` blocks mouse hover but *not* `:focus-visible`; neutralize `aria-disabled:[--px-ring-color:transparent]` too if the ring shouldn't appear when disabled.
- **Scope new state variants to the same `group-data-[variant=x]/name:` prefix as the rule they're patching.** An unscoped `focus-visible:` or `data-active:` override meant for one variant (e.g. `line` tabs) will leak into every other variant of that component.
- Always verify with `git diff`/a fresh `Read` after an edit if the IDE reports a parse error — transient diagnostics during multi-step edits are common and usually stale; `biome check <file>` is the source of truth.

## Commands

- `pnpm dev` / `build` / `start` — this app (from `apps/8bit`, or via root `turbo run dev` etc.)
- `pnpm check-types` — `tsc --noEmit`
- `pnpm lint` / `pnpm format` — Biome, scoped to this app
- `pnpm check` / `pnpm fix` (repo root) — Ultracite, repo-wide
- `pnpm registry:build` (repo root) — regenerate `registry.json` + `public/r/*.json` from `components/ui/*.tsx` and `public/r/themes/*.json` from `registry/themes.ts`
