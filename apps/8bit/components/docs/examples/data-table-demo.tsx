"use client";

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
  {
    amount: 125,
    email: "example@gmail.com",
    id: "489e1d42",
    status: "processing",
  },
  { amount: 250, email: "lena@acme.io", id: "a91f0c3b", status: "success" },
  {
    amount: 75,
    email: "sam.rivera@corp.dev",
    id: "5c7d8e19",
    status: "failed",
  },
  { amount: 340, email: "priya@studio.co", id: "f3b2a904", status: "success" },
  { amount: 60, email: "jonas@mail.de", id: "9e0d4c6a", status: "pending" },
  {
    amount: 210,
    email: "noor@hexa.app",
    id: "c1a5b7e2",
    status: "processing",
  },
  { amount: 180, email: "tom@buildlab.io", id: "d84f6b13", status: "success" },
];

const statusVariant = {
  failed: "destructive",
  pending: "outline",
  processing: "secondary",
  success: "default",
} as const;

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
}

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
      return (
        <Badge className="capitalize" variant={statusVariant[status]}>
          {status}
        </Badge>
      );
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
