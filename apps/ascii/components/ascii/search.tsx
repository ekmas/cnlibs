"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  type CommandGroupData,
  type CommandOption,
} from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Kbd } from "@/components/ui/kbd";
import { docsHref, docsNav } from "@/content/docs/manifest";
import { useIsMobile } from "@/hooks/use-mobile";
import { asciiComponents } from "@/lib/ascii-components";

// Mirrors the header nav (minus the brand links) so every destination
// is reachable from the palette; external entries open in a new tab.
const NAV_ITEMS: CommandOption[] = [
  { value: "/docs", label: "Docs" },
  { value: "/components", label: "Components" },
  { value: "/styling", label: "Styling" },
  {
    value: "https://github.com/ekmas/cnlibs",
    label: "Github",
    hint: "external",
  },
  { value: "https://x.com/samuelbreznjak", label: "X", hint: "external" },
];

const groups: CommandGroupData[] = [
  { group: "Navigation", items: NAV_ITEMS },
  {
    group: "Getting started",
    items: docsNav.map((entry) => ({
      value: docsHref(entry.slug),
      label: entry.title,
    })),
  },
  {
    group: "Components",
    items: asciiComponents.map((entry) => ({
      value: `/components/${entry.slug}`,
      label: entry.name,
    })),
  },
];

/** Matches the query against names and descriptions, so e.g. "modal"
 * finds Dialog and "one-time" finds Input OTP. */
const descriptionByHref = new Map<string, string>([
  ...docsNav.map((entry) => [docsHref(entry.slug), entry.description] as const),
  ...asciiComponents.map(
    (entry) => [`/components/${entry.slug}`, entry.description] as const
  ),
]);

function matchesQuery(item: CommandOption, query: string) {
  const q = query.trim().toLowerCase();
  if (!q) {
    return true;
  }
  if (item.label.toLowerCase().includes(q)) {
    return true;
  }
  return (descriptionByHref.get(item.value) ?? "").toLowerCase().includes(q);
}

function isEditingTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) {
    return false;
  }
  return (
    target.isContentEditable ||
    target instanceof HTMLInputElement ||
    target instanceof HTMLTextAreaElement ||
    target instanceof HTMLSelectElement
  );
}

/** The docs search: the nav's [ search ] button plus a ctrl+K / "/"
 * command palette that jumps to any page or component. */
export function SearchButton() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setOpen((o) => !o);
      } else if (event.key === "/" && !isEditingTarget(event.target)) {
        event.preventDefault();
        setOpen(true);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const openDialog = useCallback(() => setOpen(true), []);

  const goTo = useCallback(
    (item: CommandOption) => {
      setOpen(false);
      if (item.value.startsWith("http")) {
        window.open(item.value, "_blank", "noopener,noreferrer");
        return;
      }
      router.push(item.value);
    },
    [router]
  );

  return (
    <>
      <Button onClick={openDialog} variant="outline">
        Search
        <Kbd className="max-sm:hidden">Ctrl + K</Kbd>
      </Button>
      <Dialog onOpenChange={setOpen} open={open}>
        <DialogContent chWidth={isMobile ? 40 : 50} padY={0}>
          <DialogHeader className="mb-[1lh]">
            <DialogTitle>Search</DialogTitle>
          </DialogHeader>
          <Command
            emptyMessage="Nothing matches that query."
            filter={matchesQuery}
            groups={groups}
            onValueChange={goTo}
            placeholder="Search docs..."
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
