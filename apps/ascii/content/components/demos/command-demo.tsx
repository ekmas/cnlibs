"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Command, type CommandOption } from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function CommandDemo() {
  const [open, setOpen] = React.useState(false);
  const [lastRun, setLastRun] = React.useState<string | null>(null);

  React.useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setOpen((o) => !o);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const run = React.useCallback((item: CommandOption) => {
    setLastRun(item.label);
    setOpen(false);
  }, []);

  const groups = [
    {
      group: "File",
      items: [
        {
          value: "new-file",
          label: "New file",
          hint: "ctrl+n",
          onSelect: () => run({ value: "new-file", label: "New file" }),
        },
        {
          value: "open-settings",
          label: "Open settings",
          hint: "ctrl+,",
          onSelect: () =>
            run({ value: "open-settings", label: "Open settings" }),
        },
      ],
    },
    {
      group: "Account",
      items: [
        {
          value: "sign-out",
          label: "Sign out",
          onSelect: () => run({ value: "sign-out", label: "Sign out" }),
        },
      ],
    },
  ];

  return (
    <div className="flex items-center gap-[2ch]">
      <Dialog onOpenChange={setOpen} open={open}>
        <DialogTrigger render={<Button variant="outline">[ ⌘K ]</Button>} />
        <DialogContent chWidth={50} padY={0}>
          <DialogHeader className="mb-[1lh]">
            <DialogTitle>Command palette</DialogTitle>
          </DialogHeader>
          <Command groups={groups} placeholder="Type a command or search..." />
        </DialogContent>
      </Dialog>
      {lastRun && (
        <span className="text-ascii-comment">
          last run: <span className="text-primary">{lastRun}</span>
        </span>
      )}
    </div>
  );
}
