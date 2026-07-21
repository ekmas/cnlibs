"use client";

import { CheckIcon, ClipboardIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCopyToClipboard } from "@/lib/use-copy-to-clipboard";

export function CopyMarkdownButton({ markdown }: { markdown: string }) {
  const [copied, copy] = useCopyToClipboard(markdown);

  return (
    <Button onClick={copy} size="sm" variant="outline">
      {copied ? (
        <CheckIcon data-icon="inline-start" />
      ) : (
        <ClipboardIcon data-icon="inline-start" />
      )}
      {copied ? "Copied" : "Copy as Markdown"}
    </Button>
  );
}
