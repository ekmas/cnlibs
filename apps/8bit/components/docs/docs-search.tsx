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
import { docsNav, gettingStartedNav } from "@/content/docs/manifest";

const COMPONENT_PAGES: { href: string; title: string }[] = [
  { href: "/charts", title: "Charts" },
  ...docsNav.map((doc) => ({ href: `/docs/${doc.slug}`, title: doc.title })),
].sort((a, b) => a.title.localeCompare(b.title));

// Search-only addition — not part of gettingStartedNav since that list also
// drives the docs sidebar, and /theme isn't a docs page.
const SEARCH_GETTING_STARTED: { href: string; title: string }[] = [
  ...gettingStartedNav,
  { href: "/theme", title: "Theme" },
];

const PAGES: { href: string; title: string }[] = [
  ...SEARCH_GETTING_STARTED,
  ...COMPONENT_PAGES,
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
        className="ml-auto h-9 w-9 justify-center p-0 text-muted-foreground md:w-36 md:justify-start md:gap-2 md:px-3 lg:w-64"
        onClick={openDialog}
        size="sm"
        variant="outline"
      >
        <SearchIcon data-icon="inline-start" />
        <span className="hidden flex-1 text-left md:inline">
          Search docs...
        </span>
        <KbdGroup className="hidden lg:inline-flex">
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
              {SEARCH_GETTING_STARTED.map((page) => (
                <CommandItem
                  key={page.href}
                  onSelect={handleSelect}
                  value={page.title}
                >
                  {page.title}
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandGroup heading="Components">
              {COMPONENT_PAGES.map((page) => (
                <CommandItem
                  key={page.href}
                  onSelect={handleSelect}
                  value={page.title}
                >
                  {page.title}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
}
