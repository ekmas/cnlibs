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
      {/* The copy button lives in the top border row — "+---[copy]-+" —
       * so the content area needs no gutter and a line that fits the
       * frame never counts as overflow. */}
      <div className="relative">
        <AsciiHBorder line="top" />
        <button
          type="button"
          onClick={copy}
          aria-label="Copy code"
          className="absolute top-0 right-[2ch] z-20 select-none bg-background text-ascii-comment outline-none hover:text-primary focus-visible:text-primary"
        >
          [{copied ? "copied" : "copy"}]
          <span aria-live="polite" className="sr-only">
            {copied ? "Copied to clipboard" : ""}
          </span>
        </button>
      </div>
      <div className="relative bg-card">
        <AsciiVRule
          side="left"
          className="absolute inset-y-0 left-0 z-10 bg-card"
        />
        {/* The scroll box sits between the side rules (1ch margin each
         * side), so overflowing code scrolls under nothing — the frame
         * always stays on top. Tall snippets scroll vertically at 20lh,
         * with native scrollbars sized to the grid. */}
        <pre className="ascii-scrollbar mx-[1ch] max-h-[20lh] overflow-auto whitespace-pre px-[1ch] text-ascii-soft outline-none">
          {code}
        </pre>
        <AsciiVRule
          side="right"
          className="absolute inset-y-0 right-0 z-10 bg-card"
        />
      </div>
      <AsciiHBorder line="bottom" />
    </div>
  );
}

export { CodeBlock };
