"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

/** A controlled slider with its value echoed beside the label. */
export function SliderControlledDemo() {
  const [concurrency, setConcurrency] = useState(8);

  return (
    <div className="flex w-[36ch] flex-col">
      <div className="flex items-center justify-between">
        <Label htmlFor="slider-concurrency">Concurrency limit</Label>
        <span className="text-primary">{concurrency}</span>
      </div>
      <Slider
        aria-label="Concurrency limit"
        id="slider-concurrency"
        max={32}
        min={1}
        onValueChange={(value) => setConcurrency(value as number)}
        value={concurrency}
      />
    </div>
  );
}

/** Snaps to multiples of `step`. */
export function SliderSteppedDemo() {
  const [replicas, setReplicas] = useState(4);

  return (
    <div className="flex w-[36ch] flex-col">
      <div className="flex items-center justify-between">
        <Label htmlFor="slider-replicas">Replicas (step 2)</Label>
        <span className="text-primary">{replicas}</span>
      </div>
      <Slider
        aria-label="Replicas"
        id="slider-replicas"
        max={16}
        min={0}
        onValueChange={(value) => setReplicas(value as number)}
        step={2}
        value={replicas}
      />
    </div>
  );
}
