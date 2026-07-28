export function SiteFooter() {
  return (
    <footer className="border-t px-6 py-6">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-4 text-muted-foreground text-xs sm:text-sm">
        <p>
          Built by{" "}
          <a
            className="px-underline"
            href="https://samuelbreznjak.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Samuel
          </a>
          . Part of{" "}
          <a
            className="px-underline"
            href="https://cnlibs.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            cnlibs
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
