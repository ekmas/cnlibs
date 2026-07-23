"use client";

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
}
