"use client";

import { DataTable, type DataTableColumn } from "@/components/ui/data-table";

type Deployment = {
  name: string;
  status: "success" | "failed" | "building";
  duration: string;
  durationMs: number;
};

const deployments: Deployment[] = [
  { name: "web-app", status: "success", duration: "48s", durationMs: 48_000 },
  {
    name: "api-gateway",
    status: "success",
    duration: "1m 12s",
    durationMs: 72_000,
  },
  {
    name: "worker-queue",
    status: "failed",
    duration: "22s",
    durationMs: 22_000,
  },
  { name: "docs-site", status: "building", duration: "—", durationMs: 0 },
  {
    name: "billing-service",
    status: "success",
    duration: "2m 03s",
    durationMs: 123_000,
  },
  {
    name: "mobile-api",
    status: "success",
    duration: "35s",
    durationMs: 35_000,
  },
];

const statusColor: Record<Deployment["status"], string> = {
  success: "text-primary",
  failed: "text-destructive",
  building: "text-ascii-comment",
};

const columns: DataTableColumn<Deployment>[] = [
  { key: "name", header: "name" },
  {
    key: "status",
    header: "status",
    // Columns sort on click by default; opt this one out.
    sortable: false,
    render: (row) => (
      <span className={statusColor[row.status]}>{row.status}</span>
    ),
  },
  {
    key: "durationMs",
    header: "duration",
    align: "right",
    render: (row) => row.duration,
  },
];

export function DataTableDemo() {
  return (
    <DataTable
      columns={columns}
      data={deployments}
      getRowKey={(row) => row.name}
      widths={[20, 12, 12]}
    />
  );
}
