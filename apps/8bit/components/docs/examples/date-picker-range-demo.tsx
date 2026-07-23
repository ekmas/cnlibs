"use client";

import { useState } from "react";
import type { DateRange } from "react-day-picker";
import { DateRangePicker } from "@/components/ui/date-picker";

export function DatePickerRangeDemo() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>();

  return (
    <DateRangePicker dateRange={dateRange} onDateRangeChange={setDateRange} />
  );
}
