"use client";

import DataTable from "@/components/shared/data-table";
import PaginationNav from "./pagination-nav";
import { ProductsResponse } from "@/lib/types/product";
import { getProductColumns } from "./product-table-columns";
import { useRef, useState } from "react";
import {
  SortingState,
  VisibilityState,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { GoChevronDown } from "react-icons/go";

interface TableWithPaginationProps {
  products: ProductsResponse["products"];
  pageSize: number;
  totalItems: number;
}

const TableWithPagination = ({
  products,
  pageSize,
  totalItems,
}: TableWithPaginationProps) => {
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
    description: false,
  });
  const [sorting, setSorting] = useState<SortingState>([])
  const tableRef = useRef<HTMLTableElement>(null);
  const productColumns = getProductColumns(tableRef);

  const table = useReactTable({
    data: products,
    columns: productColumns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnVisibility,
    },
  });

  return (
    <>
      <div className="my-[20px] flex items-center">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        {/* Column visibility toggle */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto text-[14px]">
              Columns <GoChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="text-[14px]">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  column.id !== "description" && (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  )
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <DataTable table={table} columnLength={products.length} ref={tableRef} />
      <div className="mt-[20px] relative">
        <PaginationNav
          pageSize={pageSize}
          totalItems={totalItems}
          shallow={false}
        />
      </div>
    </>
  );
};

export default TableWithPagination;
