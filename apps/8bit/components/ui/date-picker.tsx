"use client";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import type { DateRange } from "react-day-picker";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface DatePickerProps {
  captionLayout?: React.ComponentProps<typeof Calendar>["captionLayout"];
  className?: string;
  date?: Date;
  disabled?: boolean;
  onDateChange?: (date: Date | undefined) => void;
  placeholder?: string;
}

function DatePicker({
  captionLayout = "label",
  className,
  date,
  disabled,
  onDateChange,
  placeholder = "Pick a date",
}: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button
            className={cn(
              "justify-start text-left font-normal data-[empty=true]:text-muted-foreground",
              className
            )}
            data-empty={!date}
            disabled={disabled}
            variant="outline"
          />
        }
      >
        <CalendarIcon />
        {date ? format(date, "PPP") : <span>{placeholder}</span>}
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          captionLayout={captionLayout}
          className="px-border-md px-rounded-md"
          mode="single"
          onSelect={onDateChange}
          selected={date}
        />
      </PopoverContent>
    </Popover>
  );
}

interface DateRangePickerProps {
  className?: string;
  dateRange?: DateRange;
  disabled?: boolean;
  onDateRangeChange?: (dateRange: DateRange | undefined) => void;
  placeholder?: string;
}

function DateRangePicker({
  className,
  dateRange,
  disabled,
  onDateRangeChange,
  placeholder = "Pick a date range",
}: DateRangePickerProps) {
  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button
            className={cn(
              "justify-start text-left font-normal data-[empty=true]:text-muted-foreground",
              className
            )}
            data-empty={!dateRange?.from}
            disabled={disabled}
            variant="outline"
          />
        }
      >
        <CalendarIcon />
        {dateRange?.from ? (
          dateRange.to ? (
            <>
              {format(dateRange.from, "LLL dd, y")} –{" "}
              {format(dateRange.to, "LLL dd, y")}
            </>
          ) : (
            format(dateRange.from, "LLL dd, y")
          )
        ) : (
          <span>{placeholder}</span>
        )}
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          className="px-border-md px-rounded-md"
          mode="range"
          numberOfMonths={2}
          onSelect={onDateRangeChange}
          selected={dateRange}
        />
      </PopoverContent>
    </Popover>
  );
}

export { DatePicker, DateRangePicker };
