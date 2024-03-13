"use client"

import { ColumnDef } from "@tanstack/react-table";

export const userColumns: ColumnDef<any>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "category.name",
    header: "Category",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
];
