"use client";

import * as React from "react";
import { useAsciiTheme } from "@/components/ascii/ascii-theme";
import { CodeBlock } from "@/components/ascii/code-block";
import { DocSection } from "@/components/ascii/component-docs";
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
import type { AsciiChars } from "@/lib/ascii";
import {
  ASCII_CHARS_PRESETS,
  ASCII_COLOR_PRESETS,
  ASCII_COLOR_VARIABLES,
  ASCII_FONT_VAR,
  type AsciiColorMode,
  type AsciiColorPreset,
  type AsciiTheme,
  DEFAULT_ASCII_THEME,
  DEFAULT_FONT_FAMILY,
  findColorPreset,
  fontFamilyValue,
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

/** The generated CSS the user can paste into their own globals.css. */
function themeToCss(theme: AsciiTheme) {
  const lines = ASCII_COLOR_VARIABLES.map(
    (variable) => `  ${variable}: ${theme.colors[variable]};`
  );
  if (theme.font) {
    lines.push(`  ${ASCII_FONT_VAR}: ${fontFamilyValue(theme.font)};`);
  }
  return `:root {\n${lines.join("\n")}\n}`;
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
      </DocSection>

      <DocSection title="export">
        <p className="max-w-2xl text-ascii-soft">
          Your theme is saved in this browser. Copy the config to ship it: paste
          the CSS into your globals.css and pass the characters to{" "}
          <span className="text-primary">AsciiThemeProvider</span>.
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

/** "copy config" — opens a modal with the theme as CSS variables and
 * as the JSON the provider persists, each in its own copyable block. */
function ThemeConfigDialog({ theme }: { theme: AsciiTheme }) {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline">copy config</Button>} />
      <DialogContent chWidth={76}>
        <DialogHeader>
          <DialogTitle>Theme config</DialogTitle>
          <DialogDescription>
            CSS for your globals.css, and the full theme as JSON.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-[1lh] flex max-h-[60dvh] flex-col gap-[1lh] overflow-y-auto">
          <span className="text-ascii-comment">{"// globals.css"}</span>
          <CodeBlock code={themeToCss(theme)} />
          <span className="text-ascii-comment">{"// theme.json"}</span>
          <CodeBlock code={JSON.stringify(theme, null, 2)} />
        </div>
        <DialogFooter showCloseButton className="mt-[1lh]" />
      </DialogContent>
    </Dialog>
  );
}

export { ThemeEditor };
