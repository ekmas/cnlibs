"use client";

import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { docsNav } from "@/content/docs/manifest";

const PAGES: { href: string; title: string }[] = [
  { href: "/docs", title: "Introduction" },
  ...docsNav.map((doc) => ({ href: `/docs/${doc.slug}`, title: doc.title })),
];

const MAC_PLATFORM_PATTERN = /Mac|iPhone|iPad/;

export function DocsSearch() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    setIsMac(MAC_PLATFORM_PATTERN.test(navigator.platform));
  }, []);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setOpen((value) => !value);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const openDialog = useCallback(() => setOpen(true), []);

  const handleSelect = useCallback(
    (title: string) => {
      const page = PAGES.find((candidate) => candidate.title === title);
      if (page) {
        setOpen(false);
        router.push(page.href);
      }
    },
    [router]
  );

  return (
    <>
      <Button
        className="ml-auto h-9 w-9 justify-center p-0 text-muted-foreground sm:w-64 sm:justify-start sm:gap-2 sm:px-3"
        onClick={openDialog}
        size="sm"
        variant="outline"
      >
        <SearchIcon data-icon="inline-start" />
        <span className="hidden flex-1 text-left sm:inline">
          Search docs...
        </span>
        <KbdGroup className="hidden sm:inline-flex">
          <Kbd>{isMac ? "⌘" : "Ctrl"}</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      </Button>
      <CommandDialog
        description="Search for a docs page"
        onOpenChange={setOpen}
        open={open}
        title="Search docs"
      >
        <Command>
          <CommandInput placeholder="Search docs..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Getting Started">
              <CommandItem onSelect={handleSelect} value="Introduction">
                Introduction
              </CommandItem>
            </CommandGroup>
            <CommandGroup heading="Components">
              {docsNav.map((doc) => (
                <CommandItem
                  key={doc.slug}
                  onSelect={handleSelect}
                  value={doc.title}
                >
                  {doc.title}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
}
