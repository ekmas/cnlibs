import Link from "next/link";
import { AsciiBox, AsciiBoxDivider } from "@/components/ascii/ascii-box";
import { SiteFooter } from "@/components/ascii/site-footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Kbd } from "@/components/ui/kbd";
import { Progress } from "@/components/ui/progress";
import { Spinner } from "@/components/ui/spinner";
import { Switch } from "@/components/ui/switch";
import { asciiComponents } from "@/lib/ascii-components";

const PREVIEW_WIDTH = 44;

const POINTS = [
  "every shadcn/ui component, drawn in characters",
  "built on Base UI — keyboard, focus and ARIA included",
  "one grid: ch across, lh down, frames that are text",
  "install from a registry, own the source",
];

export default function Home() {
  const readyCount = asciiComponents.filter((c) => c.status === "ready").length;
  const percent = Math.round((readyCount / asciiComponents.length) * 100);

  return (
    <>
      <main className="flex flex-1 flex-col items-center overflow-y-auto px-[2ch] py-[1lh]">
        <div className="my-auto flex w-full max-w-6xl flex-wrap items-center justify-center gap-x-[8ch] gap-y-[2lh]">
          <div className="flex max-w-[64ch] flex-col gap-[2lh]">
            <div className="flex flex-col gap-[1lh]">
              <h1 className="font-heading text-primary text-sm tracking-tight">
                ascii
              </h1>
              <p className="max-w-[56ch] text-ascii-soft text-sm">
                A shadcn/ui component library, typed out in a monospace font.
                Real, accessible components — just, dressed for the terminal.
              </p>
            </div>

            <ul className="flex flex-col text-ascii-soft text-sm">
              {POINTS.map((point) => (
                <li className="flex gap-[1ch]" key={point}>
                  <span aria-hidden className="text-primary">
                    *
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-[2ch]">
              <Button nativeButton={false} render={<Link href="/docs" />}>
                Get started
              </Button>
              <Button
                nativeButton={false}
                render={<Link href="/components" />}
                variant="outline"
              >
                Browse components
              </Button>
            </div>
          </div>

          {/* A small "status panel" built only from library components, so
           * the landing page shows real widgets on the grid: one row per
           * control, sections split by dividers, no CSS-length spacing. */}
          <div className="max-w-full overflow-x-auto">
            <AsciiBox
              contentClassName="flex flex-col"
              title="live preview"
              width={PREVIEW_WIDTH}
            >
              <div className="flex flex-col gap-[1lh] py-[1lh]">
                <div className="flex items-center gap-[2ch]">
                  <Badge>v1.0</Badge>
                  <Badge variant="secondary">beta</Badge>
                  <Badge variant="destructive">unstable</Badge>
                </div>
                <Input
                  chWidth={PREVIEW_WIDTH - 4}
                  placeholder="> grep the ui..."
                />
              </div>

              <AsciiBoxDivider pad={false} />

              <div className="flex flex-col gap-[1lh] py-[1lh] text-ascii-soft text-sm">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-[1ch]">
                    <Checkbox defaultChecked /> dark mode
                  </span>
                  <span className="flex items-center gap-[1ch]">
                    <Switch defaultChecked /> autosave
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-ascii-comment">components</span>
                  <Progress barWidth={PREVIEW_WIDTH - 24} value={percent} />
                </div>
              </div>

              <AsciiBoxDivider pad={false} />

              <div className="flex items-center justify-between py-[1lh] text-ascii-comment text-sm">
                <span className="flex items-center gap-[1ch]">
                  <Spinner /> shipping components...
                </span>
                <span>
                  <Kbd>ctrl</Kbd>+<Kbd>k</Kbd>
                </span>
              </div>
            </AsciiBox>
          </div>
        </div>
      </main>
      <SiteFooter className="justify-center" />
    </>
  );
}
