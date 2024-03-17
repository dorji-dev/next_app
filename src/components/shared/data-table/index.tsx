"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ForwardedRef, forwardRef } from "react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  columnsToHide?: string[];
}

function DataTableInner<TData, TValue>(
  { columns, data, columnsToHide = [] }: DataTableProps<TData, TValue>,
  tableRef: ForwardedRef<HTMLTableElement>
) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      columnVisibility: columnsToHide.reduce<{ [index: string]: boolean }>(
        (visibilityObject, columnName) => {
          visibilityObject[columnName] = false;
          return visibilityObject;
        },
        {}
      ),
    },
  });

  return (
    <div className="rounded-md border">
      <Table ref={tableRef}>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.parentId}
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

const DataTable = forwardRef(DataTableInner) as <TData, TValue>(
  props: DataTableProps<TData, TValue> & {
    ref?: ForwardedRef<HTMLTableElement>;
  }
) => ReturnType<typeof DataTableInner>;

export default DataTable;
