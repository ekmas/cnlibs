import { ChartDemo } from "@/components/docs/examples/chart-demo";
import type { DocVariant } from "@/content/docs/registry";

export const title = "Chart";
export const description = "Charts built using Recharts.";

export const links = {
  shadcn: "https://ui.shadcn.com/docs/components/chart",
};

export const variants: DocVariant[] = [
  {
    code: `"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", visitors: 186 },
  { month: "February", visitors: 305 },
  { month: "March", visitors: 237 },
  { month: "April", visitors: 173 },
  { month: "May", visitors: 209 },
  { month: "June", visitors: 214 },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
    color: "var(--primary)",
  },
} satisfies ChartConfig;

function formatMonth(value: string) {
  return value.slice(0, 3);
}

export function ChartDemo() {
  return (
    <ChartContainer className="w-full max-w-md" config={chartConfig}>
      <BarChart data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          axisLine={false}
          dataKey="month"
          tickFormatter={formatMonth}
          tickLine={false}
          tickMargin={10}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="visitors" fill="var(--color-visitors)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}`,
    description: "A bar chart with a themed tooltip driven by a ChartConfig.",
    id: "default",
    preview: <ChartDemo />,
    title: "Default",
  },
];
