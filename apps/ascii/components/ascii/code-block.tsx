"use client";

import * as React from "react";

import { AsciiHBorder, AsciiVRule } from "@/components/ascii/ascii-box";
import { cn } from "@/lib/utils";

/** A bordered, copyable code snippet in the ASCII frame style. */
function CodeBlock({ code, className }: { code: string; className?: string }) {
  const [copied, setCopied] = React.useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard unavailable — nothing to do
    }
  };

  return (
    <div
      data-slot="code-block"
      className={cn(
        "relative w-full max-w-[80ch] font-mono text-sm",
        className
      )}
    >
      <AsciiHBorder line="top" />
      <div className="relative bg-card">
        <AsciiVRule side="left" className="absolute inset-y-0 left-0" />
        <pre className="overflow-x-auto whitespace-pre pr-[10ch] pl-[2ch] text-ascii-soft outline-none">
          {code}
        </pre>
        <AsciiVRule side="right" className="absolute inset-y-0 right-0" />
      </div>
      <AsciiHBorder line="bottom" />
      <button
        type="button"
        onClick={copy}
        aria-label="Copy code"
        className="absolute top-[1lh] right-[2ch] select-none bg-card pl-[1ch] text-ascii-comment outline-none hover:text-primary focus-visible:text-primary"
      >
        [{copied ? "copied" : "copy"}]
        <span aria-live="polite" className="sr-only">
          {copied ? "Copied to clipboard" : ""}
        </span>
      </button>
    </div>
  );
}

export { CodeBlock };
