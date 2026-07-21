import { CalendarDemo } from "@/components/docs/examples/calendar-demo";
import type { DocVariant } from "@/content/docs/registry";

export const title = "Calendar";
export const description =
  "A date field component that lets users enter and edit dates.";

export const links = {
  shadcn: "https://ui.shadcn.com/docs/components/calendar",
};

export const variants: DocVariant[] = [
  {
    code: `"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

export function CalendarDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Calendar
      className="px-border-md px-rounded-md"
      mode="single"
      onSelect={setDate}
      selected={date}
    />
  );
}`,
    description: "A single-date picker backed by react-day-picker.",
    id: "default",
    preview: <CalendarDemo />,
    title: "Default",
  },
];
