import { CodeBlock } from "@/components/docs/code-block";
import { splitUsageCode } from "@/lib/docs";

export function UsageSection({
  code,
  note,
}: {
  code: string;
  note?: { code: string; description?: string };
}) {
  const { imports, setup, snippet } = splitUsageCode(code);
  const header = [imports, setup].filter(Boolean).join("\n\n");

  return (
    <section className="flex scroll-mt-20 flex-col gap-3" id="usage">
      <h2 className="font-heading font-weight-heading text-xl tracking-tight">
        Usage
      </h2>
      {note ? (
        <>
          {note.description ? (
            <p className="text-muted-foreground text-sm">{note.description}</p>
          ) : null}
          <CodeBlock code={note.code} />
        </>
      ) : null}
      {header ? <CodeBlock code={header} /> : null}
      <CodeBlock code={snippet} />
    </section>
  );
}
