import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { ComponentDoc } from "./types";

const widths = [16, 12, 12];

const rows = [
  { metric: "requests", today: "128,402", avg: "119,880" },
  { metric: "errors", today: "12", avg: "18" },
  { metric: "p95 latency", today: "84ms", avg: "91ms" },
];

export const doc: ComponentDoc = {
  title: "Table",
  description: "A responsive table component.",
  sections: [
    {
      title: "example",
      code: `<Table widths={[14, 10, 10]}>
  <TableHeader>
    <TableRow>
      <TableHead>metric</TableHead>
      <TableHead align="right">today</TableHead>
      <TableHead align="right">7d avg</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {rows.map((row) => (
      <TableRow key={row.metric}>
        <TableCell>{row.metric}</TableCell>
        <TableCell align="right">{row.today}</TableCell>
        <TableCell align="right">{row.avg}</TableCell>
      </TableRow>
    ))}
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell>totals</TableCell>
      <TableCell align="right">128,414</TableCell>
      <TableCell align="right">119,898</TableCell>
    </TableRow>
  </TableFooter>
</Table>
<TableCaption>Traffic for payments-api, last 24h.</TableCaption>`,
      preview: (
        <div>
          <Table widths={widths}>
            <TableHeader>
              <TableRow>
                <TableHead>metric</TableHead>
                <TableHead align="right">today</TableHead>
                <TableHead align="right">7d avg</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.metric}>
                  <TableCell className="text-ascii-soft">
                    {row.metric}
                  </TableCell>
                  <TableCell align="right">{row.today}</TableCell>
                  <TableCell align="right">{row.avg}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell className="text-ascii-comment">totals</TableCell>
                <TableCell align="right">128,414</TableCell>
                <TableCell align="right">119,898</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
          <TableCaption>Traffic for payments-api, last 24h.</TableCaption>
        </div>
      ),
    },
  ],
};
