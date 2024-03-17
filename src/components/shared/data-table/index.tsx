"use client";

import { flexRender, Table as ReactTable } from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ForwardedRef, forwardRef } from "react";

interface DataTableProps<TData> {
  table: ReactTable<TData>;
  columnLength: number;
}

function DataTableInner<TData>(
  { table, columnLength }: DataTableProps<TData>,
  tableRef: ForwardedRef<HTMLTableElement>
) {
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
              <TableCell
                colSpan={columnLength}
                className="h-[96px] text-center"
              >
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

/**
 * Reusable tanstack table component. All the table config should be passed from the parent component.
 */
const DataTable = forwardRef(DataTableInner) as <TData>(
  props: DataTableProps<TData> & {
    ref?: ForwardedRef<HTMLTableElement>;
  }
) => ReturnType<typeof DataTableInner>;

export default DataTable;
