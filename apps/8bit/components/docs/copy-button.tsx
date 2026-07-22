"use client";

import { CheckIcon, CopyIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCopyToClipboard } from "@/lib/use-copy-to-clipboard";
import { cn } from "@/lib/utils";

export function CopyButton({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const [copied, copy] = useCopyToClipboard(value);

  return (
    <Button
      className={cn(
        "shrink-0 [transition-property:color]! focus-visible:[--px-bg:var(--muted)] dark:focus-visible:[--px-bg:color-mix(in_oklab,var(--muted)_50%,transparent)]",
        className
      )}
      onClick={copy}
      size="icon-sm"
      variant="ghost"
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
      <span className="sr-only">Copy</span>
    </Button>
  );
}
