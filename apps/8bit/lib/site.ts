// Base URL the self-hosted registry (public/r/*.json) is served from.
// Override with NEXT_PUBLIC_SITE_URL once the app has a production domain.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://8bit.cnlibs.com"
).replace(/\/$/, "");
