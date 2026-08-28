import { AsciiRule } from "@/components/ascii/ascii-box";

function ComponentHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col pb-[1lh]">
      <h1 className="font-weight-heading text-primary text-sm tracking-tight">
        {title}
      </h1>
      <p className="max-w-2xl text-ascii-soft text-sm">{description}</p>
      <AsciiRule className="w-full" />
    </div>
  );
}

export { ComponentHeader };
