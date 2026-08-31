"use client";

import * as React from "react";

import { AsciiSide } from "@/components/ascii/ascii-box";
import { useAsciiChars } from "@/components/ascii/ascii-chars";
import { columnDivider } from "@/lib/ascii";
import { cn } from "@/lib/utils";

const TableWidthsContext = React.createContext<number[]>([]);

function Table({
  widths,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & { widths: number[] }) {
  const sections = React.Children.toArray(children).filter(Boolean);

  return (
    <TableWidthsContext.Provider value={widths}>
      <div
        role="table"
        data-slot="table"
        className={cn(
          "inline-flex flex-col font-mono text-sm text-card-foreground select-none",
          className
        )}
        {...props}
      >
        <Divider widths={widths} />
        {sections.map((section, i) => (
          <React.Fragment key={i}>
            {section}
            <Divider widths={widths} />
          </React.Fragment>
        ))}
      </div>
    </TableWidthsContext.Provider>
  );
}

function Divider({ widths }: { widths: number[] }) {
  const chars = useAsciiChars();
  return (
    <div aria-hidden className="whitespace-pre text-primary/60">
      {columnDivider(widths, chars)}
    </div>
  );
}

function TableHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      role="rowgroup"
      data-slot="table-header"
      className={cn("font-heading text-foreground", className)}
      {...props}
    />
  );
}

function TableBody({ ...props }: React.ComponentProps<"div">) {
  return <div role="rowgroup" data-slot="table-body" {...props} />;
}

function TableFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      role="rowgroup"
      data-slot="table-footer"
      className={cn("font-heading", className)}
      {...props}
    />
  );
}

function TableRow({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  const widths = React.useContext(TableWidthsContext);
  const cells = React.Children.toArray(children).filter(Boolean);

  return (
    <div
      role="row"
      data-slot="table-row"
      className={cn(
        "flex items-stretch text-foreground hover:text-primary hover:**:data-[slot=table-cell]:text-primary hover:**:data-[slot=table-head]:text-primary",
        className
      )}
      {...props}
    >
      <AsciiSide
        side="left"
        data-slot="table-row-rule"
        className="shrink-0 text-primary/60"
      />
      {cells.map((cell, i) => (
        <React.Fragment key={i}>
          {React.isValidElement<{ style?: React.CSSProperties }>(cell)
            ? React.cloneElement(cell, {
                style: { width: `${widths[i]}ch`, ...cell.props.style },
              })
            : cell}
          <AsciiSide
            side="right"
            data-slot="table-row-rule"
            className="shrink-0 text-primary/60"
          />
        </React.Fragment>
      ))}
    </div>
  );
}

function TableHead({
  className,
  align = "left",
  ...props
}: React.ComponentProps<"div"> & { align?: "left" | "right" }) {
  return (
    <div
      role="columnheader"
      data-slot="table-head"
      className={cn(
        "shrink-0 truncate px-[2ch]",
        align === "right" && "text-right",
        className
      )}
      {...props}
    />
  );
}

function TableCell({
  className,
  align = "left",
  ...props
}: React.ComponentProps<"div"> & { align?: "left" | "right" }) {
  return (
    <div
      role="cell"
      data-slot="table-cell"
      className={cn(
        "shrink-0 truncate px-[2ch]",
        align === "right" && "text-right",
        className
      )}
      {...props}
    />
  );
}

function TableCaption({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="table-caption"
      className={cn("text-sm text-ascii-comment", className)}
      {...props}
    />
  );
}

export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
};
