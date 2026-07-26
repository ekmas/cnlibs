"use client";

import { Area, Line } from "@/components/dither-kit/area";
import { AreaChart, LineChart } from "@/components/dither-kit/area-chart";
import { Bar } from "@/components/dither-kit/bar";
import { BarChart } from "@/components/dither-kit/bar-chart";
import { BlockLegend } from "@/components/dither-kit/block-legend";
import type { ChartConfig } from "@/components/dither-kit/chart-context";
import { Grid } from "@/components/dither-kit/grid";
import { Legend } from "@/components/dither-kit/legend";
import { Pie } from "@/components/dither-kit/pie";
import { PieChart } from "@/components/dither-kit/pie-chart";
import { Radar } from "@/components/dither-kit/radar";
import { RadarChart } from "@/components/dither-kit/radar-chart";
import { Sparkline } from "@/components/dither-kit/sparkline";
import { Tooltip } from "@/components/dither-kit/tooltip";
import { XAxis } from "@/components/dither-kit/x-axis";
import { YAxis } from "@/components/dither-kit/y-axis";

const trafficData = [
  { month: "Jan", visits: 420, signups: 180 },
  { month: "Feb", visits: 460, signups: 210 },
  { month: "Mar", visits: 510, signups: 240 },
  { month: "Apr", visits: 480, signups: 220 },
  { month: "May", visits: 560, signups: 260 },
  { month: "Jun", visits: 610, signups: 300 },
];

const trafficConfig = {
  visits: { label: "Visits", color: "blue" },
  signups: { label: "Signups", color: "green" },
} satisfies ChartConfig;

export function AreaChartExample() {
  return (
    <div className="aspect-[2/1] w-full">
      <AreaChart config={trafficConfig} data={trafficData}>
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
}

const deviceTrafficData = [
  { day: "Mon", desktop: 220, mobile: 180, tablet: 40 },
  { day: "Tue", desktop: 260, mobile: 210, tablet: 45 },
  { day: "Wed", desktop: 240, mobile: 230, tablet: 50 },
  { day: "Thu", desktop: 280, mobile: 250, tablet: 42 },
  { day: "Fri", desktop: 300, mobile: 270, tablet: 55 },
  { day: "Sat", desktop: 190, mobile: 240, tablet: 60 },
  { day: "Sun", desktop: 170, mobile: 220, tablet: 58 },
];

const deviceTrafficConfig = {
  desktop: { label: "Desktop", color: "blue" },
  mobile: { label: "Mobile", color: "green" },
  tablet: { label: "Tablet", color: "grey" },
} satisfies ChartConfig;

export function StackedAreaChartExample() {
  return (
    <div className="aspect-[2/1] w-full">
      <AreaChart
        config={deviceTrafficConfig}
        data={deviceTrafficData}
        stackType="stacked"
      >
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
}

const uptimeData = [
  { time: "00:00", latency: 42, errors: 2 },
  { time: "04:00", latency: 38, errors: 1 },
  { time: "08:00", latency: 55, errors: 4 },
  { time: "12:00", latency: 61, errors: 6 },
  { time: "16:00", latency: 48, errors: 3 },
  { time: "20:00", latency: 40, errors: 1 },
];

const uptimeConfig = {
  latency: { label: "Latency (ms)", color: "blue" },
  errors: { label: "Errors", color: "red" },
} satisfies ChartConfig;

export function LineChartExample() {
  return (
    <div className="aspect-[2/1] w-full">
      <LineChart config={uptimeConfig} data={uptimeData}>
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
}

const signupsData = [
  { week: "W1", free: 120, pro: 40 },
  { week: "W2", free: 160, pro: 55 },
  { week: "W3", free: 140, pro: 70 },
  { week: "W4", free: 190, pro: 90 },
];

const signupsConfig = {
  free: { label: "Free", color: "grey" },
  pro: { label: "Pro", color: "purple" },
} satisfies ChartConfig;

export function BarChartExample() {
  return (
    <div className="aspect-[2/1] w-full">
      <BarChart config={signupsConfig} data={signupsData}>
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
}

const backlogData = [
  { sprint: "S1", feature: 12, bug: 6, chore: 3 },
  { sprint: "S2", feature: 9, bug: 8, chore: 4 },
  { sprint: "S3", feature: 14, bug: 5, chore: 2 },
  { sprint: "S4", feature: 11, bug: 7, chore: 5 },
];

const backlogConfig = {
  feature: { label: "Feature", color: "green" },
  bug: { label: "Bug", color: "red" },
  chore: { label: "Chore", color: "blue" },
} satisfies ChartConfig;

export function StackedBarChartExample() {
  return (
    <div className="aspect-[2/1] w-full">
      <BarChart config={backlogConfig} data={backlogData} stackType="stacked">
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
}

const retentionData = [
  { cohort: "Jan", renewed: 82, churned: 18 },
  { cohort: "Feb", renewed: 76, churned: 24 },
  { cohort: "Mar", renewed: 88, churned: 12 },
  { cohort: "Apr", renewed: 91, churned: 9 },
];

const retentionConfig = {
  renewed: { label: "Renewed", color: "green" },
  churned: { label: "Churned", color: "red" },
} satisfies ChartConfig;

function formatPercentTick(value: number) {
  return `${Math.round(value * 100)}%`;
}

export function PercentBarChartExample() {
  return (
    <div className="aspect-[2/1] w-full">
      <BarChart
        config={retentionConfig}
        data={retentionData}
        stackType="percent"
      >
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
}

const sourcesData = [
  { source: "Direct", visitors: 380 },
  { source: "Search", visitors: 520 },
  { source: "Social", visitors: 260 },
  { source: "Referral", visitors: 140 },
];

const sourcesConfig = {
  Direct: { label: "Direct", color: "blue" },
  Search: { label: "Search", color: "green" },
  Social: { label: "Social", color: "pink" },
  Referral: { label: "Referral", color: "orange" },
} satisfies ChartConfig;

export function PieChartExample() {
  return (
    <div className="flex flex-col gap-3">
      <div className="aspect-[2/1] w-full">
        <PieChart
          config={sourcesConfig}
          data={sourcesData}
          dataKey="visitors"
          innerRadius={0.6}
          nameKey="source"
        >
          <Pie />
          <Tooltip />
        </PieChart>
      </div>
      <BlockLegend align="center" config={sourcesConfig} />
    </div>
  );
}

const platformData = [
  { platform: "Web", sessions: 640 },
  { platform: "iOS", sessions: 410 },
  { platform: "Android", sessions: 390 },
];

const platformConfig = {
  Web: { label: "Web", color: "blue" },
  iOS: { label: "iOS", color: "green" },
  Android: { label: "Android", color: "grey" },
} satisfies ChartConfig;

export function FullPieChartExample() {
  return (
    <div className="flex flex-col gap-3">
      <div className="aspect-[2/1] w-full">
        <PieChart
          config={platformConfig}
          data={platformData}
          dataKey="sessions"
          nameKey="platform"
        >
          <Pie />
          <Tooltip />
        </PieChart>
      </div>
      <BlockLegend align="center" config={platformConfig} />
    </div>
  );
}

const statsData = [
  { stat: "Power", hero: 80, rival: 65 },
  { stat: "Speed", hero: 70, rival: 90 },
  { stat: "Defense", hero: 85, rival: 60 },
  { stat: "Magic", hero: 60, rival: 75 },
  { stat: "Luck", hero: 75, rival: 55 },
];

const statsConfig = {
  hero: { label: "Hero", color: "green" },
  rival: { label: "Rival", color: "red" },
} satisfies ChartConfig;

export function RadarChartExample() {
  return (
    <div className="aspect-[2/1] w-full">
      <RadarChart config={statsConfig} data={statsData} nameKey="stat">
        <Tooltip />
        <Legend />
        <Radar dataKey="hero" />
        <Radar dataKey="rival" />
      </RadarChart>
    </div>
  );
}

export function SparklineExample() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex items-center gap-4 border p-4 px-border-sm px-rounded-sm [--pixel-size:4px]">
        <div>
          <p className="text-muted-foreground text-xs">Weekly active users</p>
          <p className="font-medium text-2xl">12,480</p>
        </div>
        <div className="h-12 w-32">
          <Sparkline color="blue" data={[30, 45, 42, 60, 55, 70, 68, 80]} />
        </div>
      </div>
      <div className="flex items-center gap-4 border p-4 px-border-sm px-rounded-sm [--pixel-size:4px]">
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
}
