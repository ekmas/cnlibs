import {
  AsciiBox,
  AsciiBoxDivider,
  AsciiBoxRow,
  AsciiHBorder,
  AsciiRule,
  AsciiVRule,
} from "@/components/ascii/ascii-box";
import { AsciiCharsProvider } from "@/components/ascii/ascii-chars";
import { DemoRow } from "@/components/ascii/component-docs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Marker } from "@/components/ui/marker";
import { Progress } from "@/components/ui/progress";
import { ASCII_CHARS_PRESETS } from "@/lib/ascii-theme";
import { THEMES } from "@/registry/themes";

/* Live previews embedded in the getting-started MDX pages. Kept here
 * so the markdown stays prose and the JSX stays typed. */

/** Theming: one framed panel drawn with a named glyph preset. */
function GlyphPreview({ preset }: { preset: string }) {
  const entry = ASCII_CHARS_PRESETS.find((p) => p.id === preset);
  if (!entry) {
    return null;
  }
  return (
    <AsciiCharsProvider chars={entry.chars}>
      <AsciiBox contentClassName="flex flex-col" title={entry.name} width={26}>
        <span className="flex items-center gap-[1ch]">
          <Marker tone="success" /> online
        </span>
        <AsciiBoxDivider pad={false} />
        <Button variant="outline">Restart</Button>
      </AsciiBox>
    </AsciiCharsProvider>
  );
}

/** Theming: the four bundled presets side by side. */
function GlyphPresets() {
  return (
    <div className="grid w-fit grid-cols-2 gap-x-[2ch] gap-y-[1lh]">
      <GlyphPreview preset="classic" />
      <GlyphPreview preset="double" />
      <GlyphPreview preset="stars" />
      <GlyphPreview preset="arrows" />
    </div>
  );
}

/** Theming: palette slugs by mode. */
function PaletteList() {
  const dark = THEMES.filter((t) => t.mode === "dark");
  const light = THEMES.filter((t) => t.mode === "light");
  return (
    <div className="flex flex-col">
      <DemoRow label="dark">
        <span className="text-ascii-soft">
          {dark.map((t) => t.slug).join(" · ")}
        </span>
      </DemoRow>
      <DemoRow label="light">
        <span className="text-ascii-soft">
          {light.map((t) => t.slug).join(" · ")}
        </span>
      </DemoRow>
    </div>
  );
}

/** Theming: the token roles, each rendered in its own color. */
function TokenTable() {
  const rows: { name: string; className?: string; description: string }[] = [
    {
      name: "ascii-primary",
      className: "text-primary",
      description:
        "The scheme's signature color: active text, filled indicators, focused frames. Also --primary and --ring.",
    },
    {
      name: "ascii-soft",
      className: "text-ascii-soft",
      description:
        "Reading text inside components — descriptions, list rows, body copy.",
    },
    {
      name: "ascii-text",
      className: "text-foreground",
      description: "The strongest text: headings, values, --foreground.",
    },
    {
      name: "ascii-comment",
      className: "text-ascii-comment",
      description:
        "The quietest text: labels, hints, placeholders, resting frames of ghost controls.",
    },
    {
      name: "muted-foreground",
      className: "text-muted-foreground",
      description: "Disabled and secondary labels.",
    },
    {
      name: "ascii-dim",
      description:
        "The darkest step of the signature color; --border and --input.",
    },
    {
      name: "ascii-surface",
      description:
        "Raised panels: --card and --popover backgrounds (dialogs, menus, code blocks).",
    },
    { name: "background", description: "The page." },
    { name: "secondary", description: "Secondary buttons and badges." },
    {
      name: "primary-foreground",
      description:
        "Text on a primary-colored fill (selection, OTP select-all).",
    },
    {
      name: "destructive",
      className: "text-destructive",
      description:
        "Errors and destructive actions. Rendered as text and frames, never as a filled surface.",
    },
  ];
  return (
    <dl className="flex max-w-[80ch] flex-col text-sm">
      {rows.map((row) => (
        <div className="flex gap-[2ch]" key={row.name}>
          <dt
            className={`w-[20ch] shrink-0 ${row.className ?? "text-ascii-soft"}`}
          >
            {row.name}
          </dt>
          <dd className="min-w-0 text-ascii-soft">{row.description}</dd>
        </div>
      ))}
    </dl>
  );
}

/** Grid: a 25-cell ruler over a 25ch input. */
function CellRuler() {
  return (
    <DemoRow label="1ch cells">
      <div className="flex flex-col text-ascii-comment">
        <span className="whitespace-pre">{"0123456789012345678901234"}</span>
        <Input chWidth={25} defaultValue="chWidth={25}" />
      </div>
    </DemoRow>
  );
}

/** Grid: fixed vs fluid frames side by side. */
function FrameKinds() {
  return (
    <div className="flex flex-col">
      <DemoRow label="fixed">
        <AsciiBox width={24}>width={"{24}"}</AsciiBox>
      </DemoRow>
      <DemoRow label="fluid">
        <Button variant="outline">sizes to its label</Button>
        <Button className="w-[30ch]" variant="outline">
          or to a width
        </Button>
      </DemoRow>
    </div>
  );
}

/** Grid: the AsciiBox reference example. */
function BoxExample() {
  return (
    <AsciiBox bg="bg-card" title="deploy.log" width={40}>
      <p className="text-ascii-soft">Build finished in 48s.</p>
      <AsciiBoxDivider pad={false} />
      <AsciiBoxRow>
        <span className="flex justify-between">
          <span>web-app</span>
          <Badge>live</Badge>
        </span>
      </AsciiBoxRow>
      <AsciiBoxRow>
        <span className="flex justify-between">
          <span>worker</span>
          <Badge variant="destructive">failed</Badge>
        </span>
      </AsciiBoxRow>
    </AsciiBox>
  );
}

/** Grid: a fluid frame built from the primitives (how CodeBlock works). */
function FluidFrame() {
  return (
    <div className="w-full max-w-[60ch]">
      <AsciiHBorder line="top" />
      <div className="relative">
        <AsciiVRule className="absolute inset-y-0 left-0" side="left" />
        <div className="px-[2ch] text-ascii-soft">
          A fluid frame: as wide as its container, as tall as its content.
          Resize the window and the rules follow.
        </div>
        <AsciiVRule className="absolute inset-y-0 right-0" side="right" />
      </div>
      <AsciiHBorder line="bottom" />
    </div>
  );
}

/** Grid: the status-panel recipe. */
function StatusPanel() {
  return (
    <AsciiBox contentClassName="flex flex-col" title="services" width={44}>
      <ul className="flex flex-col text-ascii-soft">
        <li className="flex items-center gap-[1ch]">
          <Marker tone="success" /> api
          <span className="ml-auto text-ascii-comment">12ms</span>
        </li>
        <li className="flex items-center gap-[1ch]">
          <Marker tone="warning" /> queue
          <span className="ml-auto text-ascii-comment">lagging</span>
        </li>
        <li className="flex items-center gap-[1ch]">
          <Marker tone="neutral" /> cron
          <span className="ml-auto text-ascii-comment">idle</span>
        </li>
      </ul>
      <AsciiBoxDivider pad={false} />
      <Progress label="disk 72%" value={72} />
      <AsciiRule />
      <Button className="self-end" variant="outline">
        Refresh
      </Button>
    </AsciiBox>
  );
}

export {
  BoxExample,
  CellRuler,
  FluidFrame,
  FrameKinds,
  GlyphPresets,
  GlyphPreview,
  PaletteList,
  StatusPanel,
  TokenTable,
};
