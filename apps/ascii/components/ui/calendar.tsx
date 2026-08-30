"use client";

import * as React from "react";

import { AsciiBox, AsciiBoxDivider } from "@/components/ascii/ascii-box";
import { cn } from "@/lib/utils";

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function startOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function daysInMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

type CalendarProps = {
  className?: string;
  chWidth?: number;
  selected?: Date;
  defaultMonth?: Date;
  onSelect?: (date: Date) => void;
};

function Calendar({
  className,
  chWidth = 30,
  selected,
  defaultMonth,
  onSelect,
}: CalendarProps) {
  const [month, setMonth] = React.useState(() =>
    startOfMonth(defaultMonth ?? selected ?? new Date())
  );
  const today = new Date();

  const firstWeekday = new Date(
    month.getFullYear(),
    month.getMonth(),
    1
  ).getDay();
  const totalDays = daysInMonth(month);
  const cells: (Date | null)[] = [
    ...Array.from({ length: firstWeekday }, () => null),
    ...Array.from(
      { length: totalDays },
      (_, i) => new Date(month.getFullYear(), month.getMonth(), i + 1)
    ),
  ];
  while (cells.length % 7 !== 0) {
    cells.push(null);
  }

  const monthLabel = month.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  function goToMonth(offset: number) {
    setMonth(
      (current) =>
        new Date(current.getFullYear(), current.getMonth() + offset, 1)
    );
  }

  return (
    <AsciiBox
      data-slot="calendar"
      width={chWidth}
      tone="soft"
      padY={0}
      className={className}
      contentClassName="flex flex-col"
    >
      {/* Same 7-column grid as the days, so "<" and ">" sit exactly on
          the Su / Sa columns. */}
      <div className="grid grid-cols-7 items-center text-center">
        <button
          type="button"
          aria-label="Previous month"
          className="text-primary outline-none hover:text-primary/70 focus-visible:text-primary"
          onClick={() => goToMonth(-1)}
        >
          {"<"}
        </button>
        <span className="col-span-5 font-heading tracking-[0.04em] text-primary uppercase">
          {monthLabel}
        </span>
        <button
          type="button"
          aria-label="Next month"
          className="text-primary outline-none hover:text-primary/70 focus-visible:text-primary"
          onClick={() => goToMonth(1)}
        >
          {">"}
        </button>
      </div>
      <AsciiBoxDivider pad={false} />
      <div className="grid grid-cols-7 text-center">
        {WEEKDAYS.map((day) => (
          <span key={day} className="text-ascii-comment">
            {day}
          </span>
        ))}
        {cells.map((date, i) => {
          if (!date) {
            return <span key={i} />;
          }
          const isToday = isSameDay(date, today);
          const isSelected = selected != null && isSameDay(date, selected);
          return (
            <button
              key={i}
              type="button"
              aria-pressed={isSelected}
              onClick={() => onSelect?.(date)}
              className={cn(
                "text-foreground outline-none hover:text-primary focus-visible:text-primary",
                isToday && !isSelected && "font-heading text-primary",
                isSelected && "bg-primary text-primary-foreground"
              )}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>
    </AsciiBox>
  );
}

export { Calendar };
