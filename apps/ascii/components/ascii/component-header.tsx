function ComponentHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col">
      <h1 className="mb-[1lh] font-heading text-primary text-sm tracking-tight">
        {title}
      </h1>
      <p className="max-w-2xl text-ascii-soft text-sm">{description}</p>
    </div>
  );
}

export { ComponentHeader };
