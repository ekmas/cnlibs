import { CopyButton } from "@/components/docs/copy-button";
import { cn } from "@/lib/utils";

const MAX_VISIBLE_LINES = 13;

export function CodeBlock({
  code,
  roundedTop = true,
}: {
  code: string;
  roundedTop?: boolean;
}) {
  const isScrollable = code.split("\n").length > MAX_VISIBLE_LINES;

  return (
    <div
      className={cn(
        "relative bg-muted/50 [--pixel-size:4px]",
        roundedTop
          ? "px-border-md px-rounded-md"
          : "mx-0.5 px-border-b-md px-rounded-b-md"
      )}
    >
      <pre className="code-scrollbar max-h-[300px] overflow-auto p-4">
        <code className="font-mono text-sm">{code}</code>
      </pre>
      {isScrollable ? (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-muted/50 to-transparent" />
      ) : null}
      <CopyButton className="absolute top-2 right-2" value={code} />
    </div>
  );
}
