import type { Metadata } from "next";
import Link from "next/link";
import { DocsPager } from "@/components/docs/docs-pager";
import { DocsShell } from "@/components/docs/docs-shell";
import { InstallTabs } from "@/components/docs/install-tabs";
import { getDocsPager } from "@/lib/docs";
import { SITE_URL } from "@/lib/site";

const TITLE = "Installation";
const DESCRIPTION = "How to install 8bit components in your project.";

export const metadata: Metadata = {
  description: DESCRIPTION,
  title: TITLE,
};

export default function DocsInstallationPage() {
  const { next, prev } = getDocsPager("/docs/installation");

  return (
    <DocsShell>
      <header className="flex flex-col gap-2">
        <h1 className="font-medium text-3xl tracking-tight">{TITLE}</h1>
        <p className="text-base text-muted-foreground leading-relaxed">
          {DESCRIPTION}
        </p>
      </header>
      <section className="flex flex-col gap-3">
        <h2 className="font-medium text-xl tracking-tight">1. Pick a theme</h2>
        <p className="text-base text-muted-foreground leading-relaxed">
          Head to the{" "}
          <Link className="px-underline" href="/theme">
            theme page
          </Link>
          , pick the styling you want, and copy the scaffold command shown there
          to init a brand new project already themed — or the "add to existing
          project" command if you're adding 8bit to a project you already have.
        </p>
      </section>
      <section className="flex scroll-mt-20 flex-col gap-3" id="installation">
        <h2 className="font-medium text-xl tracking-tight">
          2. Add a component
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed">
          Every component in the{" "}
          <Link className="px-underline" href="/docs/components">
            registry
          </Link>{" "}
          installs the same way — swap the URL for the one shown on that
          component's docs page. Button is used here as an example.
        </p>
        <InstallTabs url={`${SITE_URL}/r/button.json`} />
      </section>
      <section className="flex flex-col gap-3">
        <h2 className="font-medium text-xl tracking-tight">
          Prefer to copy by hand?
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed">
          Every component doc has a "Manual" tab with its full source, so you
          can paste it in without touching the CLI.
        </p>
      </section>
      <DocsPager next={next} prev={prev} />
    </DocsShell>
  );
}
