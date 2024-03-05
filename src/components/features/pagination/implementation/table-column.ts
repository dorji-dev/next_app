"use client"

import { Product } from "@/lib/types/product";
import { ColumnDef } from "@tanstack/react-table";

export const userColumns: ColumnDef<Product>[] = [
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
