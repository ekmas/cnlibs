"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";

export function CalendarDemo() {
  const [selected, setSelected] = React.useState<Date | undefined>(new Date());

  return <Calendar onSelect={setSelected} selected={selected} />;
}
