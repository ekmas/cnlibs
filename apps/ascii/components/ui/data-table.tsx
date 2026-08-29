"use client";

import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

type SortDirection = "asc" | "desc";

type DataTableColumn<T> = {
  key: keyof T;
  header: string;
  align?: "left" | "right";
  sortable?: boolean;
  render?: (row: T) => React.ReactNode;
};

function DataTable<T extends Record<string, unknown>>({
  data,
  columns,
  widths,
  getRowKey,
  className,
}: {
  data: T[];
  columns: DataTableColumn<T>[];
  widths: number[];
  getRowKey?: (row: T, index: number) => React.Key;
  className?: string;
}) {
  const [sortKey, setSortKey] = React.useState<keyof T | null>(null);
  const [direction, setDirection] = React.useState<SortDirection>("asc");

  const sorted = React.useMemo(() => {
    if (!sortKey) return data;
    const copy = [...data];
    copy.sort((a, b) => {
      const av = a[sortKey];
      const bv = b[sortKey];
      if (av === bv) return 0;
      const cmp = av! > bv! ? 1 : -1;
      return direction === "asc" ? cmp : -cmp;
    });
    return copy;
  }, [data, sortKey, direction]);

  function handleSort(key: keyof T) {
    if (sortKey === key) {
      setDirection((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setDirection("asc");
    }
  }

  return (
    <div data-slot="data-table" className={cn(className)}>
      <Table widths={widths}>
        <TableHeader>
          <TableRow>
            {columns.map((col) => (
              <TableHead key={String(col.key)} align={col.align}>
                {col.sortable === false ? (
                  <span className="uppercase tracking-[0.04em]">
                    {col.header}
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleSort(col.key)}
                    className={cn(
                      "inline-flex items-center gap-[0.5ch] uppercase tracking-[0.04em] hover:text-primary",
                      sortKey === col.key && "text-primary"
                    )}
                  >
                    {col.header}
                    {/* Same glyphs as the number input's steppers: "<" / ">"
                     * rotated a quarter turn to point up (asc) / down (desc). */}
                    <span aria-hidden className="w-[1ch] text-primary">
                      {sortKey === col.key && (
                        <span className="inline-block rotate-90">
                          {direction === "asc" ? "<" : ">"}
                        </span>
                      )}
                    </span>
                  </button>
                )}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {sorted.map((row, i) => (
            <TableRow key={getRowKey ? getRowKey(row, i) : i}>
              {columns.map((col) => (
                <TableCell key={String(col.key)} align={col.align}>
                  {col.render ? col.render(row) : String(row[col.key] ?? "")}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export type { DataTableColumn };
export { DataTable };
