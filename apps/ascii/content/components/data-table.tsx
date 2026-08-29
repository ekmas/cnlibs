import { DataTableDemo } from "./demos/data-table-demo";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Data Table",
  description: "A sortable table with client-side data.",
  sections: [
    {
      title: "example",
      code: `const columns: DataTableColumn<Deployment>[] = [
  // Every column sorts on header click unless sortable: false.
  { key: "name", header: "name" },
  {
    key: "status",
    header: "status",
    sortable: false,
    render: (row) => <span className={statusColor[row.status]}>{row.status}</span>,
  },
  // Sorts by the raw durationMs, displays the formatted duration.
  { key: "durationMs", header: "duration", align: "right", render: (row) => row.duration },
]

<DataTable
  data={deployments}
  columns={columns}
  widths={[16, 10, 10]}
  getRowKey={(row) => row.name}
/>`,
      preview: <DataTableDemo />,
    },
  ],
};
