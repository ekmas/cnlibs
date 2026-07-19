import { Input as InputPrimitive } from "@base-ui/react/input";
import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <div
      data-slot="input-wrapper"
      className={cn(
        "px-rounded-sm px-border-sm [--pixel-size:3px] [--px-border-color:var(--input)] has-[input:focus-visible]:[--px-border-color:var(--ring)] has-[input:disabled]:opacity-50 has-[input[aria-invalid=true]]:[--px-border-color:var(--destructive)]",
        className
      )}
    >
      <InputPrimitive
        type={type}
        data-slot="input"
        className="h-9 w-full min-w-0 bg-transparent px-2.5 py-1 text-base transition-[color] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed md:text-sm"
        {...props}
      />
    </div>
  );
}

export { Input };
