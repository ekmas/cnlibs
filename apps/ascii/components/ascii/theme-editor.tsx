"use client";

import * as React from "react";
import { useAsciiTheme } from "@/components/ascii/ascii-theme";
import { CodeBlock } from "@/components/ascii/code-block";
import { DocSection } from "@/components/ascii/component-docs";
import { InstallTabs } from "@/components/ascii/install-tabs";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { type AsciiChars, DEFAULT_ASCII_CHARS } from "@/lib/ascii";
import {
  ASCII_CHARS_PRESETS,
  ASCII_COLOR_PRESETS,
  type AsciiColorMode,
  type AsciiColorPreset,
  type AsciiTheme,
  DEFAULT_ASCII_THEME,
  DEFAULT_FONT_FAMILY,
  findColorPreset,
  GOOGLE_MONO_FONTS,
  isDefaultAsciiTheme,
} from "@/lib/ascii-theme";
import { cn } from "@/lib/utils";

const CHAR_FIELDS: {
  key: keyof AsciiChars;
  label: string;
  hint: string;
}[] = [
  { key: "top", label: "top", hint: "top edge, repeats →" },
  { key: "bottom", label: "bottom", hint: "bottom edge, repeats →" },
  { key: "left", label: "left", hint: "left edge, repeats ↓" },
  { key: "right", label: "right", hint: "right edge, repeats ↓" },
  { key: "divider", label: "divider", hint: "inner rules, repeats →" },
  { key: "junction", label: "junction", hint: "corners, single char" },
];

/** Section heading row: title on the left, presets on the right. */
function PresetRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-x-[2ch] gap-y-[1lh]">
      <span className="text-ascii-comment">presets:</span>
      {children}
    </div>
  );
}

function PresetButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "select-none outline-none hover:text-primary focus-visible:text-primary",
        active ? "text-primary" : "text-ascii-soft"
      )}
    >
      {active ? `[ ${children} ]` : `  ${children}  `}
    </button>
  );
}

/** One row of palette names for a mode. */
function PaletteRow({
  mode,
  active,
  onPick,
}: {
  mode: AsciiColorMode;
  active: string | undefined;
  onPick: (preset: AsciiColorPreset) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-x-[2ch] gap-y-[1lh]">
      <span className="w-[6ch] text-ascii-comment">{mode}:</span>
      {ASCII_COLOR_PRESETS.filter((preset) => preset.mode === mode).map(
        (preset) => (
          <button
            key={preset.id}
            type="button"
            aria-pressed={preset.id === active}
            onClick={() => onPick(preset)}
            className={cn(
              "select-none outline-none hover:text-primary focus-visible:text-primary",
              preset.id === active ? "text-primary" : "text-ascii-soft"
            )}
          >
            <span>
              {preset.id === active ? `[ ${preset.name} ]` : preset.name}
            </span>
          </button>
        )
      )}
    </div>
  );
}

/** A text field that keeps its own draft so the user can clear it and
 * retype; only non-empty drafts are committed to the theme. */
function CharField({
  label,
  hint,
  value,
  single = false,
  onCommit,
}: {
  label: string;
  hint: string;
  value: string;
  single?: boolean;
  onCommit: (value: string) => void;
}) {
  const [draft, setDraft] = React.useState(value);
  const [lastValue, setLastValue] = React.useState(value);
  if (value !== lastValue) {
    // Presets and resets change the value from outside — resync.
    setLastValue(value);
    setDraft(value);
  }

  const id = React.useId();

  return (
    <div className="flex items-center gap-[2ch]">
      <label htmlFor={id} className="w-[9ch] shrink-0 text-ascii-soft">
        {label}
      </label>
      <Input
        id={id}
        chWidth={single ? 5 : 12}
        value={draft}
        maxLength={single ? 1 : 12}
        spellCheck={false}
        autoComplete="off"
        onChange={(event) => {
          const next = event.target.value;
          setDraft(next);
          if (next.length > 0) {
            onCommit(single ? next.slice(0, 1) : next);
          }
        }}
        onBlur={() => {
          if (draft.length === 0) {
            setDraft(value);
          }
        }}
      />
      <span className="text-ascii-comment">{hint}</span>
    </div>
  );
}

function sameChars(a: AsciiChars, b: AsciiChars) {
  return CHAR_FIELDS.every(({ key }) => a[key] === b[key]);
}

/** The provider snippet for the user's root layout — only the glyphs
 * that differ from the classic set are listed, since any key left out
 * keeps its default. Empty when nothing changed: no provider needed. */
function charsToProvider(chars: AsciiChars) {
  const changed = CHAR_FIELDS.filter(
    ({ key }) => chars[key] !== DEFAULT_ASCII_CHARS[key]
  );
  if (changed.length === 0) {
    return "// default characters — no provider needed";
  }
  const entries = changed
    .map(({ key }) => `    ${key}: ${JSON.stringify(chars[key])},`)
    .join("\n");
  return `import { AsciiCharsProvider } from "@/components/ascii/ascii-chars";

<AsciiCharsProvider
  chars={{
${entries}
  }}
>
  {children}
</AsciiCharsProvider>`;
}

function ThemeEditor() {
  const { theme, hydrated, setChars, setColors, setFont, setTheme, reset } =
    useAsciiTheme();
  const activePalette = findColorPreset(theme.colors);

  const selectedFont = theme.font ?? DEFAULT_FONT_FAMILY;

  return (
    <div
      className={cn(
        "flex flex-col gap-[2lh] text-sm transition-opacity",
        hydrated ? "opacity-100" : "opacity-0"
      )}
    >
      <DocSection title="font">
        <p className="max-w-2xl text-ascii-soft">
          Monospace families from Google Fonts.
        </p>
        <Select
          value={selectedFont}
          onValueChange={(value: string | null) => {
            if (value) {
              setFont(value === DEFAULT_FONT_FAMILY ? null : value);
            }
          }}
        >
          <SelectTrigger chWidth={30} aria-label="Google mono font">
            <SelectValue />
          </SelectTrigger>
          <SelectContent chWidth={30}>
            {GOOGLE_MONO_FONTS.map((font) => (
              <SelectItem key={font.family} value={font.family}>
                {font.family}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <p className="text-ascii-comment">
          {`// now: ${selectedFont}${theme.font ? " (google fonts)" : " (bundled default)"}`}
        </p>
      </DocSection>

      <DocSection title="colors">
        <p className="max-w-2xl text-ascii-soft">
          Seven dark and seven light palettes. Pick one — it applies to every
          token at once.
        </p>
        <PaletteRow
          mode="dark"
          active={activePalette?.id}
          onPick={(preset) => setColors(preset.colors)}
        />
        <PaletteRow
          mode="light"
          active={activePalette?.id}
          onPick={(preset) => setColors(preset.colors)}
        />
      </DocSection>

      <DocSection title="border characters">
        <p className="max-w-2xl text-ascii-soft">
          Lines take a single character or a sequence that repeats along the
          edge — <span className="text-primary">{"<|>"}</span> draws{" "}
          <span className="text-primary">{"<|><|><|>"}</span>. Junctions
          (corners and intersections) are always one character.
        </p>
        <PresetRow>
          {ASCII_CHARS_PRESETS.map((preset) => (
            <PresetButton
              key={preset.id}
              active={sameChars(theme.chars, preset.chars)}
              onClick={() => setChars(preset.chars)}
            >
              {preset.name}
            </PresetButton>
          ))}
        </PresetRow>
        <div className="grid grid-cols-1 gap-x-[4ch] xl:grid-cols-2">
          {CHAR_FIELDS.map((field) => (
            <CharField
              key={field.key}
              label={field.label}
              hint={field.hint}
              single={field.key === "junction"}
              value={theme.chars[field.key]}
              onCommit={(value) => setChars({ [field.key]: value })}
            />
          ))}
        </div>
        <p className="max-w-2xl text-ascii-soft">
          Components draw the classic set with no setup. If you change it, wrap
          your app once in{" "}
          <span className="text-primary">AsciiCharsProvider</span> (in the root
          layout) with the characters you picked — copy the snippet from the
          config below.
        </p>
      </DocSection>

      <DocSection title="install">
        <p className="max-w-2xl text-ascii-soft">
          Every palette is a registry item. Scaffold a new project with it, or
          add it to one you already have — it ships the tokens, the type scale
          and the ASCII frame primitives.
        </p>
        {activePalette ? (
          <>
            <p className="text-ascii-soft">Scaffold a new project:</p>
            <InstallTabs
              item={`themes/${activePalette.id}`}
              subcommand="init"
              className="max-w-[96ch]"
            />
            <p className="text-ascii-soft">
              Or add the theme to an existing project:
            </p>
            <InstallTabs
              item={`themes/${activePalette.id}`}
              className="max-w-[96ch]"
            />
          </>
        ) : (
          <p className="text-ascii-comment">
            {"// pick a palette above to get its install command"}
          </p>
        )}
      </DocSection>

      <DocSection title="export">
        <p className="max-w-2xl text-ascii-soft">
          Your theme is saved in this browser. The palette ships with the
          install command above; if you changed the characters, copy the
          provider into your root layout.
        </p>
        <div className="flex flex-wrap items-center gap-[2ch]">
          <ThemeConfigDialog theme={theme} />
          <Button
            variant="outline"
            disabled={isDefaultAsciiTheme(theme)}
            onClick={reset}
          >
            reset to defaults
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              setTheme({ ...DEFAULT_ASCII_THEME, colors: theme.colors })
            }
          >
            reset font + characters
          </Button>
        </div>
      </DocSection>
    </div>
  );
}

/** "copy ascii provider" — opens a modal with the glyph provider snippet for
 * the root layout. The palette itself needs no copying: it installs as
 * a registry item via the command in the install section. */
function ThemeConfigDialog({ theme }: { theme: AsciiTheme }) {
  return (
    <Dialog>
      <DialogTrigger
        render={<Button variant="outline">copy ascii provider</Button>}
      />
      <DialogContent chWidth={76}>
        <DialogHeader>
          <DialogTitle>Glyph provider</DialogTitle>
          <DialogDescription>
            Wrap your root layout in this to draw every frame with the
            characters you picked.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-[1lh] flex max-h-[60dvh] flex-col gap-[1lh] overflow-y-auto">
          <span className="text-ascii-comment">{"// app/layout.tsx"}</span>
          <CodeBlock code={charsToProvider(theme.chars)} />
        </div>
        <DialogFooter showCloseButton className="mt-[1lh]" />
      </DialogContent>
    </Dialog>
  );
}

export { ThemeEditor };
