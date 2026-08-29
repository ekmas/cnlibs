"use client";

import * as React from "react";
import { DemoRow } from "@/components/ascii/component-docs";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export function SliderDemo() {
  const [concurrency, setConcurrency] = React.useState(8);
  const [replicas, setReplicas] = React.useState(4);

  return (
    <>
      <DemoRow label="interactive">
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
      </DemoRow>
      <DemoRow label="stepped">
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
      </DemoRow>
      <DemoRow label="narrow track">
        <Slider aria-label="Volume" chWidth={12} defaultValue={40} />
      </DemoRow>
    </>
  );
}
