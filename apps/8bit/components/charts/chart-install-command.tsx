"use client";

import { InstallTabs } from "@/components/docs/install-tabs";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function ChartInstallCommand({
  name,
  url,
}: {
  name: string;
  url: string;
}) {
  return (
    <Dialog>
      <DialogTrigger
        render={<Button className="h-12 px-10 text-lg" size="lg" />}
      >
        Install {name} charts
      </DialogTrigger>
      <DialogContent className="sm:max-w-max">
        <DialogHeader>
          <DialogTitle>Install {name} charts</DialogTitle>
          <DialogDescription>
            Copy the command for your package manager below.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <InstallTabs compact subcommand="add" unrounded url={url} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
