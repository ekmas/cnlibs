"use client";

import * as React from "react";

import { SITE_URL } from "@/lib/site";

/* The registry base URL, resolved once on the server (lib/site.ts reads
 * NODE_ENV and PORT, which only exist there) and handed to client
 * components through context — so install commands point at the dev
 * server while developing and at the production domain in a build,
 * instead of whatever the browser bundle inlined. */
const SiteUrlContext = React.createContext<string>(SITE_URL);

function SiteUrlProvider({
  value,
  children,
}: {
  value: string;
  children: React.ReactNode;
}) {
  return (
    <SiteUrlContext.Provider value={value}>{children}</SiteUrlContext.Provider>
  );
}

/** The origin the self-hosted registry is served from, without a trailing slash. */
function useSiteUrl() {
  return React.useContext(SiteUrlContext);
}

export { SiteUrlProvider, useSiteUrl };
