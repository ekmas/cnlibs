"use client";

import { AsciiBox } from "@/components/ascii/ascii-box";
import { Command, type CommandOption } from "@/components/ui/command";

const groups = [
  {
    group: "Deploy",
    items: [
      { value: "deploy-prod", label: "Deploy to production", hint: "prod" },
      { value: "deploy-staging", label: "Deploy to staging", hint: "stg" },
      { value: "rollback", label: "Roll back last deploy", hint: "undo" },
    ],
  },
  {
    group: "Logs",
    items: [
      { value: "tail", label: "Tail build logs", hint: "logs" },
      { value: "errors", label: "Show recent errors", hint: "err" },
    ],
  },
];

/** Matches the label or the short hint, so "stg" finds staging. */
function matchLabelOrHint(item: CommandOption, query: string) {
  const q = query.trim().toLowerCase();
  if (!q) {
    return true;
  }
  return (
    item.label.toLowerCase().includes(q) ||
    (item.hint?.toLowerCase().includes(q) ?? false)
  );
}

export function CommandFilterDemo() {
  return (
    <AsciiBox padY={0} title="Actions" width={48}>
      <Command
        emptyMessage="Nothing matches — try a hint like stg or err."
        filter={matchLabelOrHint}
        groups={groups}
        placeholder="Search by name or hint..."
      />
    </AsciiBox>
  );
}
