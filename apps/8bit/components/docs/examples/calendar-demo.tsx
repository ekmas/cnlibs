"use client";

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
}
