import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { DocsPagerLink } from "@/lib/docs";

export function DocsPager({
  next,
  prev,
}: {
  next?: DocsPagerLink;
  prev?: DocsPagerLink;
}) {
  if (!(prev || next)) {
    return null;
  }

  return (
    <nav
      aria-label="Docs pagination"
      className="flex items-center justify-between gap-4"
    >
      {prev ? (
        <Button
          nativeButton={false}
          render={<Link href={prev.href} />}
          variant="outline"
        >
          <ChevronLeftIcon data-icon="inline-start" />
          {prev.title}
        </Button>
      ) : (
        <span />
      )}
      {next ? (
        <Button
          nativeButton={false}
          render={<Link href={next.href} />}
          variant="outline"
        >
          {next.title}
          <ChevronRightIcon data-icon="inline-end" />
        </Button>
      ) : (
        <span />
      )}
    </nav>
  );
}
