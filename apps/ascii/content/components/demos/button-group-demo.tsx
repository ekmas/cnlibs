"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

const views = ["Day", "Week", "Month"] as const;

export function ButtonGroupDemo() {
  const [view, setView] = React.useState<(typeof views)[number]>("Week");

  return (
    <ButtonGroup>
      {views.map((option) => (
        <Button
          key={option}
          onClick={() => setView(option)}
          variant={option === view ? "default" : "ghost"}
        >
          {option}
        </Button>
      ))}
    </ButtonGroup>
  );
}
