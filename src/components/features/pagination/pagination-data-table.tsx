"use client";

import DataTable from "@/components/shared/data-table";
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

interface PaginationDataTableProps {
  products: ProductsResponse["products"];
}

const PaginationDataTable = ({
  products,
}: PaginationDataTableProps) => {
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
    description: false,
  });
  const [sorting, setSorting] = useState<SortingState>([]);
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
      <div className="my-[20px] flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} product(s) selected.
        </div>
        {/* Column visibility toggle */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="text-[14px] rounded-md">
              Columns <GoChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="text-[14px]">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <p className="text-[10px] -mt-[10px] mb-[8px] text-center text-foreground/40">
        Table powered by{" "}
        <a
          href="https://tanstack.com/table/latest"
          target="_blank"
          className="text-primary hover:underline underline-offset-2"
        >
          @tanstack/table
        </a>
      </p>
      <DataTable
        table={table}
        columnLength={products.length}
        tableRef={tableRef}
      />
    </>
  );
};

export default PaginationDataTable;
