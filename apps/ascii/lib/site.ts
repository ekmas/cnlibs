// Base URL the self-hosted registry (public/r/*.json) is served from.
// Resolves to the production domain for `next build`/`next start` (NODE_ENV
// is "production" there, set by Next itself) and to the local dev server
// otherwise, so install commands shown in the docs — and any registry item
// built from this value — always point at whichever server is actually
// serving them. Override with NEXT_PUBLIC_SITE_URL to force a specific value
// (e.g. testing a production build against a non-default origin).
const PRODUCTION_SITE_URL = "https://ascii.cnlibs.com";
const DEVELOPMENT_SITE_URL = `http://localhost:${process.env.PORT ?? 3000}`;

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.NODE_ENV === "production"
    ? PRODUCTION_SITE_URL
    : DEVELOPMENT_SITE_URL)
).replace(/\/$/, "");
