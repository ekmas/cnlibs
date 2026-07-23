import { DataTableDemo } from "@/components/docs/examples/data-table-demo";
import type { DocVariant } from "@/content/docs/registry";

export const title = "Data Table";
export const description =
  "Powerful table and datagrids built using TanStack Table.";

export const links = {
  shadcn: "https://ui.shadcn.com/docs/components/data-table",
};

export const variants: DocVariant[] = [
  {
    code: `"use client";

import type { ColumnDef, Row, Table } from "@tanstack/react-table";
import { MoreHorizontalIcon } from "lucide-react";
import { useCallback } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTable, DataTableColumnHeader } from "@/components/ui/data-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Payment {
  amount: number;
  email: string;
  id: string;
  status: "pending" | "processing" | "success" | "failed";
}

const payments: Payment[] = [
  { amount: 100, email: "m@example.com", id: "728ed52f", status: "pending" },
  { amount: 125, email: "example@gmail.com", id: "489e1d42", status: "processing" },
  // ...
];

const statusVariant = {
  failed: "destructive",
  pending: "outline",
  processing: "secondary",
  success: "default",
} as const;

const columns: ColumnDef<Payment>[] = [
  {
    cell: ({ row }) => <SelectRowCell row={row} />,
    enableHiding: false,
    enableSorting: false,
    header: ({ table }) => <SelectAllHeader table={table} />,
    id: "select",
  },
  {
    accessorKey: "status",
    cell: ({ row }) => {
      const status = row.getValue<Payment["status"]>("status");
      return <Badge className="capitalize" variant={statusVariant[status]}>{status}</Badge>;
    },
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
  },
  {
    accessorKey: "amount",
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        currency: "USD",
        style: "currency",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
    header: ({ column }) => (
      <DataTableColumnHeader
        className="justify-end"
        column={column}
        title="Amount"
      />
    ),
  },
  {
    cell: ({ row }) => <PaymentRowActions payment={row.original} />,
    enableHiding: false,
    id: "actions",
  },
];

export function DataTableDemo() {
  return (
    <DataTable
      columns={columns}
      data={payments}
      searchKey="email"
      searchPlaceholder="Filter emails..."
    />
  );
}

function SelectAllHeader({ table }: { table: Table<Payment> }) {
  const onCheckedChange = useCallback(
    (value: boolean) => table.toggleAllPageRowsSelected(value),
    [table]
  );

  return (
    <Checkbox
      aria-label="Select all"
      checked={table.getIsAllPageRowsSelected()}
      indeterminate={
        table.getIsSomePageRowsSelected() && !table.getIsAllPageRowsSelected()
      }
      onCheckedChange={onCheckedChange}
    />
  );
}

function SelectRowCell({ row }: { row: Row<Payment> }) {
  const onCheckedChange = useCallback(
    (value: boolean) => row.toggleSelected(value),
    [row]
  );

  return (
    <Checkbox
      aria-label="Select row"
      checked={row.getIsSelected()}
      onCheckedChange={onCheckedChange}
    />
  );
}

function PaymentRowActions({ payment }: { payment: Payment }) {
  const onCopyId = useCallback(() => {
    navigator.clipboard.writeText(payment.id);
  }, [payment.id]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button size="icon-sm" variant="ghost">
            <span className="sr-only">Open menu</span>
            <MoreHorizontalIcon />
          </Button>
        }
      />
      <DropdownMenuContent align="end">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem onClick={onCopyId}>
            Copy payment ID
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>View customer</DropdownMenuItem>
          <DropdownMenuItem>View payment details</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`,
    description:
      "A full data table with sorting, filtering, column visibility, row selection and pagination, built with @tanstack/react-table.",
    id: "default",
    preview: <DataTableDemo />,
    title: "Default",
  },
];
