import { CodeBlock } from "@/components/ascii/code-block";

/** The Usage section: the imports a snippet needs, then the snippet —
 * two separate copyable blocks, like the reference docs. */
function UsageSection({
  imports,
  snippet,
}: {
  imports: string | null;
  snippet: string;
}) {
  return (
    <section className="flex flex-col gap-[1lh]" id="usage">
      <h2
        className="scroll-mt-[1lh] font-heading text-ascii-comment text-sm uppercase tracking-[0.08em]"
        data-title="usage"
        id="usage"
      >
        ## usage
      </h2>
      {imports && <CodeBlock code={imports} />}
      <CodeBlock code={snippet} />
    </section>
  );
}

export { UsageSection };
