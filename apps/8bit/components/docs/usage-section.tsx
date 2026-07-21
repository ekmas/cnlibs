import { CodeBlock } from "@/components/docs/code-block";
import { splitUsageCode } from "@/lib/docs";

export function UsageSection({ code }: { code: string }) {
  const { imports, snippet } = splitUsageCode(code);

  return (
    <section className="flex scroll-mt-20 flex-col gap-3" id="usage">
      <h2 className="font-medium text-xl tracking-tight">Usage</h2>
      {imports ? <CodeBlock code={imports} /> : null}
      <CodeBlock code={snippet} />
    </section>
  );
}
