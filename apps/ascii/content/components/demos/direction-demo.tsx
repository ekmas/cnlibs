"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { DirectionProvider } from "@/components/ui/direction";

export function DirectionDemo() {
  const [direction, setDirection] = React.useState<"ltr" | "rtl">("ltr");

  return (
    <>
      <div className="flex items-center gap-[1ch]">
        <Button
          onClick={() => setDirection((d) => (d === "ltr" ? "rtl" : "ltr"))}
          variant="outline"
        >
          direction: {direction}
        </Button>
      </div>
      <div className="w-[44ch]">
        <DirectionProvider direction={direction}>
          <div className="flex items-center gap-[1ch]" dir={direction}>
            <Button variant="ghost">Back</Button>
            <span className="text-ascii-comment">/</span>
            <span className="text-ascii-soft">docs</span>
            <span className="text-ascii-comment">/</span>
            <span className="text-primary">install</span>
            <Button variant="ghost">Next</Button>
          </div>
        </DirectionProvider>
      </div>
    </>
  );
}
