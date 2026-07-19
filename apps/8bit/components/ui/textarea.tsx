import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <div
      data-slot="textarea-wrapper"
      className={cn(
        "px-rounded-sm px-border-sm [--pixel-size:3px] [--px-border-color:var(--input)] has-[textarea:focus-visible]:[--px-border-color:var(--ring)] has-[textarea:disabled]:opacity-50 has-[textarea[aria-invalid=true]]:[--px-border-color:var(--destructive)]",
        className
      )}
    >
      <textarea
        data-slot="textarea"
        className="flex field-sizing-content min-h-16 w-full bg-transparent px-2.5 py-2 text-base transition-[color] outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed md:text-sm"
        {...props}
      />
    </div>
  );
}

export { Textarea };
