export function SiteFooter() {
  return (
    <footer className="border-t px-6 py-6">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 text-muted-foreground text-sm sm:flex-row">
        <p>
          Built by{" "}
          <a
            className="font-medium underline underline-offset-4 hover:text-foreground"
            href="https://x.com/ekmas"
            rel="noopener noreferrer"
            target="_blank"
          >
            ekmas
          </a>
          . Part of{" "}
          <a
            className="font-medium underline underline-offset-4 hover:text-foreground"
            href="https://cnlibs.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            cnlibs
          </a>
          .
        </p>
        <nav className="flex items-center gap-4">
          <a
            className="hover:text-foreground"
            href="https://github.com/ekmas/cnlibs/tree/main/apps/8bit"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <a
            className="hover:text-foreground"
            href="https://x.com/ekmas"
            rel="noopener noreferrer"
            target="_blank"
          >
            X
          </a>
        </nav>
      </div>
    </footer>
  );
}
