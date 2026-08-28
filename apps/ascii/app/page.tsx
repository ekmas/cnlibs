import Link from "next/link";
import { AsciiBox, AsciiBoxDivider } from "@/components/ascii/ascii-box";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Kbd } from "@/components/ui/kbd";
import { Progress } from "@/components/ui/progress";
import { Spinner } from "@/components/ui/spinner";
import { Switch } from "@/components/ui/switch";
import { asciiComponents } from "@/lib/ascii-components";

export default function Home() {
  const readyCount = asciiComponents.filter((c) => c.status === "ready").length;

  return (
    <main className="flex flex-1 flex-col items-center justify-center overflow-y-auto px-[2ch] py-[1lh]">
      <div className="flex w-full max-w-6xl flex-wrap items-center justify-center gap-x-[8ch] gap-y-8">
        <div className="flex max-w-xl flex-col gap-8">
          <div className="flex flex-col gap-3">
            <span className="text-ascii-comment text-sm uppercase tracking-[0.08em]">
              {"/// ui kit — monospace + ascii borders"}
            </span>
            <h1 className="font-weight-heading text-primary text-sm tracking-tight">
              ASCII UI
            </h1>
            <p className="max-w-lg text-ascii-soft text-sm">
              A shadcn/ui component library, typed out in IBM Plex Mono. Real,
              accessible components — just, dressed for the terminal.
            </p>
          </div>

          <pre className="w-max whitespace-pre border border-primary/50 bg-card px-[2ch] py-[1lh] font-mono text-primary text-sm">
            {`+----------------+  +----------------+
|    ${readyCount} / ${asciiComponents.length}       |  |  VIEW LIBRARY  |
+----------------+  +----------------+`}
          </pre>

          <div className="flex items-center gap-3">
            <Button
              nativeButton={false}
              render={<Link href="/components/button" />}
            >
              Browse components
            </Button>
            <Button
              nativeButton={false}
              render={<Link href="/components" />}
              variant="outline"
            >
              Full index
            </Button>
          </div>

          <p className="text-ascii-comment text-sm">
            {`// ${readyCount} components wired up and interactive, the rest are on the way`}
          </p>
        </div>

        <AsciiBox
          width={44}
          title="live preview"
          contentClassName="flex flex-col gap-3"
        >
          <div className="flex items-center gap-[2ch]">
            <Badge>v1.0</Badge>
            <Badge variant="secondary">beta</Badge>
            <Badge variant="destructive">unstable</Badge>
          </div>

          <AsciiBoxDivider />

          <Input chWidth={36} placeholder="> grep the ui..." />

          <div className="flex items-center gap-[4ch] text-ascii-soft text-sm">
            <span className="flex items-center gap-[1ch]">
              <Checkbox defaultChecked /> dark mode
            </span>
            <span className="flex items-center gap-[1ch]">
              <Switch defaultChecked /> autosave
            </span>
          </div>

          <Progress
            value={Math.round((readyCount / asciiComponents.length) * 100)}
          />

          <AsciiBoxDivider />

          <div className="flex items-center justify-between text-ascii-comment text-sm">
            <span className="flex items-center gap-[1ch]">
              <Spinner /> shipping components...
            </span>
            <span>
              <Kbd>ctrl</Kbd>+<Kbd>k</Kbd>
            </span>
          </div>
        </AsciiBox>
      </div>
    </main>
  );
}
