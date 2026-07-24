import type { Metadata } from "next";
import {
  AreaChartExample,
  BarChartExample,
  FullPieChartExample,
  LineChartExample,
  PercentBarChartExample,
  PieChartExample,
  RadarChartExample,
  SparklineExample,
  StackedAreaChartExample,
  StackedBarChartExample,
} from "@/components/charts/chart-examples";
import { InstallTabs } from "@/components/docs/install-tabs";
import { VariantSection } from "@/components/docs/variant-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { DocVariant } from "@/content/docs/registry";

export const metadata: Metadata = {
  description:
    "Dithered, canvas-rendered charts from dither-kit — area, line, bar, pie, and radar examples with install commands.",
  title: "Charts",
};

// dither-kit is a separate, self-hosted registry (not part of 8bit/ui's own
// registry.json) — installs vendor straight from tripwire.sh, same shadcn
// CLI mechanism as any other registry item. Colors come from the site's own
// --chart-1..5 (and --destructive/--muted-foreground) theme tokens — see
// components/dither-kit/palette.ts — so every chart below recolors with
// light/dark mode.
const DITHER_KIT_REGISTRY_URL = "https://tripwire.sh/r";

interface ChartFamily {
  description: string;
  id: string;
  registryName: string;
  title: string;
  variants: DocVariant[];
}

const FAMILIES: ChartFamily[] = [
  {
    id: "area-chart",
    title: "Area & Line Chart",
    description:
      "Composable area/line chart — dithered fill, a gliding scrub tooltip, and multi-series support. Ships with Sparkline for the decorative case.",
    registryName: "area-chart",
    variants: [
      {
        id: "area-gradient",
        title: "Gradient",
        preview: <AreaChartExample />,
        code: `"use client";

import { Area } from "@/components/dither-kit/area";
import { AreaChart } from "@/components/dither-kit/area-chart";
import type { ChartConfig } from "@/components/dither-kit/chart-context";
import { Grid } from "@/components/dither-kit/grid";
import { Legend } from "@/components/dither-kit/legend";
import { Tooltip } from "@/components/dither-kit/tooltip";
import { XAxis } from "@/components/dither-kit/x-axis";
import { YAxis } from "@/components/dither-kit/y-axis";

const data = [
  { month: "Jan", visits: 420, signups: 180 },
  { month: "Feb", visits: 460, signups: 210 },
  { month: "Mar", visits: 510, signups: 240 },
  { month: "Apr", visits: 480, signups: 220 },
  { month: "May", visits: 560, signups: 260 },
  { month: "Jun", visits: 610, signups: 300 },
];

const config = {
  visits: { label: "Visits", color: "blue" },
  signups: { label: "Signups", color: "green" },
} satisfies ChartConfig;

export function AreaChartExample() {
  return (
    <div className="h-72 w-full">
      <AreaChart config={config} data={data}>
        <Grid />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area dataKey="visits" />
        <Area dataKey="signups" />
      </AreaChart>
    </div>
  );
}`,
      },
      {
        id: "area-stacked",
        title: "Stacked",
        description: 'stackType="stacked", one series per fill variant.',
        preview: <StackedAreaChartExample />,
        code: `"use client";

import { Area } from "@/components/dither-kit/area";
import { AreaChart } from "@/components/dither-kit/area-chart";
import type { ChartConfig } from "@/components/dither-kit/chart-context";
import { Grid } from "@/components/dither-kit/grid";
import { Legend } from "@/components/dither-kit/legend";
import { Tooltip } from "@/components/dither-kit/tooltip";
import { XAxis } from "@/components/dither-kit/x-axis";
import { YAxis } from "@/components/dither-kit/y-axis";

const data = [
  { day: "Mon", desktop: 220, mobile: 180, tablet: 40 },
  { day: "Tue", desktop: 260, mobile: 210, tablet: 45 },
  { day: "Wed", desktop: 240, mobile: 230, tablet: 50 },
  { day: "Thu", desktop: 280, mobile: 250, tablet: 42 },
  { day: "Fri", desktop: 300, mobile: 270, tablet: 55 },
  { day: "Sat", desktop: 190, mobile: 240, tablet: 60 },
  { day: "Sun", desktop: 170, mobile: 220, tablet: 58 },
];

const config = {
  desktop: { label: "Desktop", color: "blue" },
  mobile: { label: "Mobile", color: "green" },
  tablet: { label: "Tablet", color: "grey" },
} satisfies ChartConfig;

export function StackedAreaChartExample() {
  return (
    <div className="h-72 w-full">
      <AreaChart config={config} data={data} stackType="stacked">
        <Grid />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area dataKey="desktop" variant="dotted" />
        <Area dataKey="mobile" />
        <Area dataKey="tablet" variant="hatched" />
      </AreaChart>
    </div>
  );
}`,
      },
      {
        id: "line",
        title: "Line",
        description: "Same root, LineChart + <Line> instead of <Area>.",
        preview: <LineChartExample />,
        code: `"use client";

import { Line } from "@/components/dither-kit/area";
import { LineChart } from "@/components/dither-kit/area-chart";
import type { ChartConfig } from "@/components/dither-kit/chart-context";
import { Grid } from "@/components/dither-kit/grid";
import { Legend } from "@/components/dither-kit/legend";
import { Tooltip } from "@/components/dither-kit/tooltip";
import { XAxis } from "@/components/dither-kit/x-axis";
import { YAxis } from "@/components/dither-kit/y-axis";

const data = [
  { time: "00:00", latency: 42, errors: 2 },
  { time: "04:00", latency: 38, errors: 1 },
  { time: "08:00", latency: 55, errors: 4 },
  { time: "12:00", latency: 61, errors: 6 },
  { time: "16:00", latency: 48, errors: 3 },
  { time: "20:00", latency: 40, errors: 1 },
];

const config = {
  latency: { label: "Latency (ms)", color: "blue" },
  errors: { label: "Errors", color: "red" },
} satisfies ChartConfig;

export function LineChartExample() {
  return (
    <div className="h-72 w-full">
      <LineChart config={config} data={data}>
        <Grid />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line dataKey="latency" />
        <Line dataKey="errors" />
      </LineChart>
    </div>
  );
}`,
      },
      {
        id: "sparkline",
        title: "Sparkline",
        description:
          "Decorative — no axes/grid/tooltip. Drop it in a stat card.",
        preview: <SparklineExample />,
        code: `"use client";

import { Sparkline } from "@/components/dither-kit/sparkline";

export function SparklineExample() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex items-center gap-4 border p-4">
        <div>
          <p className="text-muted-foreground text-xs">Weekly active users</p>
          <p className="font-medium text-2xl">12,480</p>
        </div>
        <div className="h-12 w-32">
          <Sparkline color="blue" data={[30, 45, 42, 60, 55, 70, 68, 80]} />
        </div>
      </div>
      <div className="flex items-center gap-4 border p-4">
        <div>
          <p className="text-muted-foreground text-xs">Refund rate</p>
          <p className="font-medium text-2xl">3.2%</p>
        </div>
        <div className="h-12 w-32">
          <Sparkline
            color="red"
            data={[20, 24, 22, 30, 34, 31, 40, 44]}
            variant="dotted"
          />
        </div>
      </div>
    </div>
  );
}`,
      },
    ],
  },
  {
    id: "bar-chart",
    title: "Bar Chart",
    description:
      "Grouped, stacked, or percent-stacked bar series with the same dither fill and tooltip.",
    registryName: "bar-chart",
    variants: [
      {
        id: "bar-grouped",
        title: "Grouped",
        preview: <BarChartExample />,
        code: `"use client";

import { Bar } from "@/components/dither-kit/bar";
import { BarChart } from "@/components/dither-kit/bar-chart";
import type { ChartConfig } from "@/components/dither-kit/chart-context";
import { Grid } from "@/components/dither-kit/grid";
import { Legend } from "@/components/dither-kit/legend";
import { Tooltip } from "@/components/dither-kit/tooltip";
import { XAxis } from "@/components/dither-kit/x-axis";
import { YAxis } from "@/components/dither-kit/y-axis";

const data = [
  { week: "W1", free: 120, pro: 40 },
  { week: "W2", free: 160, pro: 55 },
  { week: "W3", free: 140, pro: 70 },
  { week: "W4", free: 190, pro: 90 },
];

const config = {
  free: { label: "Free", color: "grey" },
  pro: { label: "Pro", color: "purple" },
} satisfies ChartConfig;

export function BarChartExample() {
  return (
    <div className="h-72 w-full">
      <BarChart config={config} data={data}>
        <Grid />
        <XAxis dataKey="week" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="free" />
        <Bar dataKey="pro" />
      </BarChart>
    </div>
  );
}`,
      },
      {
        id: "bar-stacked",
        title: "Stacked",
        preview: <StackedBarChartExample />,
        code: `"use client";

import { Bar } from "@/components/dither-kit/bar";
import { BarChart } from "@/components/dither-kit/bar-chart";
import type { ChartConfig } from "@/components/dither-kit/chart-context";
import { Grid } from "@/components/dither-kit/grid";
import { Legend } from "@/components/dither-kit/legend";
import { Tooltip } from "@/components/dither-kit/tooltip";
import { XAxis } from "@/components/dither-kit/x-axis";
import { YAxis } from "@/components/dither-kit/y-axis";

const data = [
  { sprint: "S1", feature: 12, bug: 6, chore: 3 },
  { sprint: "S2", feature: 9, bug: 8, chore: 4 },
  { sprint: "S3", feature: 14, bug: 5, chore: 2 },
  { sprint: "S4", feature: 11, bug: 7, chore: 5 },
];

const config = {
  feature: { label: "Feature", color: "green" },
  bug: { label: "Bug", color: "red" },
  chore: { label: "Chore", color: "blue" },
} satisfies ChartConfig;

export function StackedBarChartExample() {
  return (
    <div className="h-72 w-full">
      <BarChart config={config} data={data} stackType="stacked">
        <Grid />
        <XAxis dataKey="sprint" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="feature" />
        <Bar dataKey="bug" />
        <Bar dataKey="chore" />
      </BarChart>
    </div>
  );
}`,
      },
      {
        id: "bar-percent",
        title: "Percent",
        description: 'stackType="percent" — every bar sums to 100%.',
        preview: <PercentBarChartExample />,
        code: `"use client";

import { Bar } from "@/components/dither-kit/bar";
import { BarChart } from "@/components/dither-kit/bar-chart";
import type { ChartConfig } from "@/components/dither-kit/chart-context";
import { Grid } from "@/components/dither-kit/grid";
import { Legend } from "@/components/dither-kit/legend";
import { Tooltip } from "@/components/dither-kit/tooltip";
import { XAxis } from "@/components/dither-kit/x-axis";
import { YAxis } from "@/components/dither-kit/y-axis";

const data = [
  { cohort: "Jan", renewed: 82, churned: 18 },
  { cohort: "Feb", renewed: 76, churned: 24 },
  { cohort: "Mar", renewed: 88, churned: 12 },
  { cohort: "Apr", renewed: 91, churned: 9 },
];

const config = {
  renewed: { label: "Renewed", color: "green" },
  churned: { label: "Churned", color: "red" },
} satisfies ChartConfig;

function formatPercentTick(value: number) {
  return \`\${Math.round(value * 100)}%\`;
}

export function PercentBarChartExample() {
  return (
    <div className="h-72 w-full">
      <BarChart config={config} data={data} stackType="percent">
        <Grid />
        <XAxis dataKey="cohort" />
        <YAxis tickFormatter={formatPercentTick} />
        <Tooltip />
        <Legend />
        <Bar dataKey="renewed" />
        <Bar dataKey="churned" />
      </BarChart>
    </div>
  );
}`,
      },
    ],
  },
  {
    id: "pie-chart",
    title: "Pie Chart",
    description:
      "Donut mode via innerRadius, with the in-flow BlockLegend for slice counts higher than the overlay Legend can hold.",
    registryName: "pie-chart",
    variants: [
      {
        id: "pie-donut",
        title: "Donut",
        preview: <PieChartExample />,
        code: `"use client";

import { BlockLegend } from "@/components/dither-kit/block-legend";
import type { ChartConfig } from "@/components/dither-kit/chart-context";
import { Pie } from "@/components/dither-kit/pie";
import { PieChart } from "@/components/dither-kit/pie-chart";
import { Tooltip } from "@/components/dither-kit/tooltip";

const data = [
  { source: "Direct", visitors: 380 },
  { source: "Search", visitors: 520 },
  { source: "Social", visitors: 260 },
  { source: "Referral", visitors: 140 },
];

const config = {
  Direct: { label: "Direct", color: "blue" },
  Search: { label: "Search", color: "green" },
  Social: { label: "Social", color: "pink" },
  Referral: { label: "Referral", color: "orange" },
} satisfies ChartConfig;

export function PieChartExample() {
  return (
    <div className="flex flex-col gap-3">
      <div className="h-64 w-full">
        <PieChart
          config={config}
          data={data}
          dataKey="visitors"
          innerRadius={0.6}
          nameKey="source"
        >
          <Pie />
          <Tooltip />
        </PieChart>
      </div>
      <BlockLegend align="center" config={config} />
    </div>
  );
}`,
      },
      {
        id: "pie-full",
        title: "Full pie",
        description: "innerRadius omitted (defaults to 0) for a solid wedge.",
        preview: <FullPieChartExample />,
        code: `"use client";

import { BlockLegend } from "@/components/dither-kit/block-legend";
import type { ChartConfig } from "@/components/dither-kit/chart-context";
import { Pie } from "@/components/dither-kit/pie";
import { PieChart } from "@/components/dither-kit/pie-chart";
import { Tooltip } from "@/components/dither-kit/tooltip";

const data = [
  { platform: "Web", sessions: 640 },
  { platform: "iOS", sessions: 410 },
  { platform: "Android", sessions: 390 },
];

const config = {
  Web: { label: "Web", color: "blue" },
  iOS: { label: "iOS", color: "green" },
  Android: { label: "Android", color: "grey" },
} satisfies ChartConfig;

export function FullPieChartExample() {
  return (
    <div className="flex flex-col gap-3">
      <div className="h-64 w-full">
        <PieChart config={config} data={data} dataKey="sessions" nameKey="platform">
          <Pie />
          <Tooltip />
        </PieChart>
      </div>
      <BlockLegend align="center" config={config} />
    </div>
  );
}`,
      },
    ],
  },
  {
    id: "radar-chart",
    title: "Radar Chart",
    description: "Composable radar — one closed polygon per series.",
    registryName: "radar-chart",
    variants: [
      {
        id: "radar-default",
        title: "Default",
        description: "Two overlapping series across five spokes.",
        preview: <RadarChartExample />,
        code: `"use client";

import type { ChartConfig } from "@/components/dither-kit/chart-context";
import { Legend } from "@/components/dither-kit/legend";
import { Radar } from "@/components/dither-kit/radar";
import { RadarChart } from "@/components/dither-kit/radar-chart";
import { Tooltip } from "@/components/dither-kit/tooltip";

const data = [
  { stat: "Power", hero: 80, rival: 65 },
  { stat: "Speed", hero: 70, rival: 90 },
  { stat: "Defense", hero: 85, rival: 60 },
  { stat: "Magic", hero: 60, rival: 75 },
  { stat: "Luck", hero: 75, rival: 55 },
];

const config = {
  hero: { label: "Hero", color: "green" },
  rival: { label: "Rival", color: "red" },
} satisfies ChartConfig;

export function RadarChartExample() {
  return (
    <div className="h-72 w-full">
      <RadarChart config={config} data={data} nameKey="stat">
        <Tooltip />
        <Legend />
        <Radar dataKey="hero" />
        <Radar dataKey="rival" />
      </RadarChart>
    </div>
  );
}`,
      },
    ],
  },
];

export default function ChartsPage() {
  return (
    <div className="flex h-[calc(100dvh-50px)] min-h-0 flex-col bg-background px-rounded-md [--pixel-size:10px]">
      <SiteHeader />
      <main className="no-scrollbar min-h-0 flex-1 overflow-y-auto">
        <div className="flex flex-col gap-8 py-10">
          <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-6">
            <header className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h1 className="font-medium text-3xl tracking-tight">Charts</h1>
                <p className="text-muted-foreground">
                  Canvas-rendered, dithered charts from{" "}
                  <a
                    className="underline underline-offset-4 hover:text-foreground"
                    href="https://www.tripwire.sh/dither-kit"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    dither-kit
                  </a>{" "}
                  — a separate, self-hosted registry, not part of 8bit/ui's own.
                  Every chart shares a <code>core</code> item (scales, contexts,
                  axes, tooltip) that installs automatically as a registry
                  dependency. Colors are read live from this site's own{" "}
                  <code>--chart-1..5</code> theme tokens, so every chart
                  recolors with light/dark mode.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="mx-0.5 text-muted-foreground text-sm">
                  Install every chart at once:
                </p>
                <InstallTabs
                  url={`${DITHER_KIT_REGISTRY_URL}/dither-kit.json`}
                />
              </div>
            </header>
          </div>

          <div className="px-6">
            <div className="columns-1 gap-8 sm:columns-2 lg:columns-3 xl:columns-4">
              {FAMILIES.flatMap((family) =>
                family.variants.map((variant) => (
                  <div className="mb-8 break-inside-avoid" key={variant.id}>
                    <VariantSection
                      variant={{
                        ...variant,
                        title: `${family.title} — ${variant.title}`,
                      }}
                    />
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-6">
            <div className="flex flex-col gap-2">
              <h2 className="font-medium text-2xl tracking-tight">
                Installation
              </h2>
              <p className="text-muted-foreground text-sm">
                Each family below is a separate registry item — install only the
                charts you use.
              </p>
            </div>
            {FAMILIES.map((family) => (
              <div className="flex flex-col gap-2" key={family.id}>
                <h3 className="font-medium tracking-tight">{family.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {family.description}
                </p>
                <InstallTabs
                  url={`${DITHER_KIT_REGISTRY_URL}/${family.registryName}.json`}
                />
              </div>
            ))}
          </div>
        </div>
        <SiteFooter />
      </main>
    </div>
  );
}
