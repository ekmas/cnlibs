import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function FooterLink({ href, children }: { href: string; children: string }) {
  return (
    <Button
      className="self-center"
      nativeButton={false}
      render={<a href={href} rel="noopener noreferrer" target="_blank" />}
      variant="link"
    >
      {children}
    </Button>
  );
}

/** Attribution line at the foot of every page. */
function SiteFooter({ className }: { className?: string }) {
  return (
    <footer
      className={cn(
        "flex flex-wrap items-center whitespace-pre px-[2ch] py-[1lh] font-mono text-ascii-comment text-sm",
        className
      )}
    >
      <span>Built by </span>
      <FooterLink href="https://samuelbreznjak.com">Samuel</FooterLink>
      <span>. Part of </span>
      <FooterLink href="https://cnlibs.com">cnlibs</FooterLink>
      <span>.</span>
    </footer>
  );
}

export { SiteFooter };
