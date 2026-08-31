"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

const views = ["Day", "Week", "Month"] as const;

export function ButtonGroupDemo() {
  const [view, setView] = useState<(typeof views)[number]>("Week");

  return (
    <ButtonGroup>
      {views.map((option) => (
        <Button
          aria-pressed={option === view}
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

/** A primary action with a menu of alternatives sharing its frame. */
export function ButtonGroupSplitDemo() {
  return (
    <ButtonGroup>
      <Button>Deploy</Button>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button aria-label="More deploy options" variant="outline">
              v
            </Button>
          }
        />
        <DropdownMenuContent align="end" chWidth={34}>
          <DropdownMenuItem>Deploy to staging</DropdownMenuItem>
          <DropdownMenuItem>Deploy with cache cleared</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">
            Roll back last deploy
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>
  );
}

/** An input and its submit button share one frame. */
export function ButtonGroupInputDemo() {
  return (
    <ButtonGroup>
      <Input
        aria-label="Invite by email"
        chWidth={30}
        placeholder="sam@paper.design"
      />
      <Button variant="outline">Invite</Button>
    </ButtonGroup>
  );
}
