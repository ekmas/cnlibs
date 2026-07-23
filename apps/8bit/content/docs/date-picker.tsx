import { DatePickerDemo } from "@/components/docs/examples/date-picker-demo";
import { DatePickerDobDemo } from "@/components/docs/examples/date-picker-dob-demo";
import { DatePickerRangeDemo } from "@/components/docs/examples/date-picker-range-demo";
import type { DocVariant } from "@/content/docs/registry";

export const title = "Date Picker";
export const description = "A date picker component with range and presets.";

export const links = {
  shadcn: "https://ui.shadcn.com/docs/components/date-picker",
};

export const variants: DocVariant[] = [
  {
    code: `"use client";

import { useState } from "react";
import { DatePicker } from "@/components/ui/date-picker";

export function DatePickerDemo() {
  const [date, setDate] = useState<Date | undefined>();

  return <DatePicker date={date} onDateChange={setDate} />;
}`,
    description:
      "Composed from Popover and Calendar. Pass date and onDateChange to control the selected day.",
    id: "default",
    preview: <DatePickerDemo />,
    title: "Default",
  },
  {
    code: `"use client";

import { useState } from "react";
import type { DateRange } from "react-day-picker";
import { DateRangePicker } from "@/components/ui/date-picker";

export function DatePickerRangeDemo() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>();

  return (
    <DateRangePicker dateRange={dateRange} onDateRangeChange={setDateRange} />
  );
}`,
    description:
      "Set mode to range on the underlying Calendar to select a start and end date.",
    id: "range",
    preview: <DatePickerRangeDemo />,
    title: "Range Picker",
  },
  {
    code: `"use client";

import { useState } from "react";
import { DatePicker } from "@/components/ui/date-picker";

export function DatePickerDobDemo() {
  const [date, setDate] = useState<Date | undefined>();

  return (
    <DatePicker
      captionLayout="dropdown"
      date={date}
      onDateChange={setDate}
      placeholder="Pick your date of birth"
    />
  );
}`,
    description:
      "Set captionLayout to dropdown for quick month and year navigation, useful for dates far in the past.",
    id: "dob",
    preview: <DatePickerDobDemo />,
    title: "Date of Birth",
  },
];
