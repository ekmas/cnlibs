import {
  CalculatorIcon,
  CalendarIcon,
  SettingsIcon,
  SmileIcon,
} from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import type { DocVariant } from "@/content/docs/registry";

export const title = "Command";
export const description = "A fast, composable command menu built on cmdk.";

export const links = {
  shadcn: "https://ui.shadcn.com/docs/components/command",
};

export const variants: DocVariant[] = [
  {
    code: `import {
  CalculatorIcon,
  CalendarIcon,
  SettingsIcon,
  SmileIcon,
} from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

export function CommandDemo() {
  return (
    <Command className="w-full max-w-md border">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <CalendarIcon />
            Calendar
          </CommandItem>
          <CommandItem>
            <SmileIcon />
            Search Emoji
          </CommandItem>
          <CommandItem>
            <CalculatorIcon />
            Calculator
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <SettingsIcon />
            Preferences
            <CommandShortcut>⌘,</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}`,
    description:
      "A static command list grouped into sections, with a search input and keyboard shortcuts.",
    id: "default",
    preview: (
      <Command className="w-full max-w-md border">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <CalendarIcon />
              Calendar
            </CommandItem>
            <CommandItem>
              <SmileIcon />
              Search Emoji
            </CommandItem>
            <CommandItem>
              <CalculatorIcon />
              Calculator
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <SettingsIcon />
              Preferences
              <CommandShortcut>⌘,</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    ),
    title: "Default",
  },
];
