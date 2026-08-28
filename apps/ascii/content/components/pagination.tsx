import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Pagination",
  description: "Page navigation with first, last and ellipsis links.",
  sections: [
    {
      title: "example",
      code: `<Pagination>
  <PaginationContent>
    <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
    <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
    <PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem>
    <PaginationItem><PaginationEllipsis /></PaginationItem>
    <PaginationItem><PaginationNext href="#" /></PaginationItem>
  </PaginationContent>
</Pagination>`,
      preview: (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious render={<a href="#" />} />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink render={<a href="#" />}>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink render={<a href="#" />}>2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink isActive render={<a href="#" />}>
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink render={<a href="#" />}>4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink render={<a href="#" />}>12</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext render={<a href="#" />} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      ),
    },
  ],
};
