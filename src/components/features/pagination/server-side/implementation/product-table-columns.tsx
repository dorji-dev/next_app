"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Product } from "@/lib/types/product";
import { lightGrayBlurData } from "@/lib/utils/rgb-data-url";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { IoEyeOutline } from "react-icons/io5";
import PaginationTableHeader from "../../pagination-table-header";

export const getProductColumns = (
  tableRef: React.RefObject<HTMLTableElement>
): ColumnDef<Product>[] => {
  return [
    {
      accessorKey: "id",
      header: () => (
        <PaginationTableHeader
          tableRef={tableRef}
          headerValue="ID"
          tooltipValue="Product ID"
        />
      ),
    },
    {
      accessorKey: "thumbnail",
      header: () => (
        <PaginationTableHeader
          tableRef={tableRef}
          headerValue="Image"
          tooltipValue="Product Image"
        />
      ),
      cell: (data) => (
        <Dialog>
          <DialogTrigger aria-label="View image">
            <IoEyeOutline />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{data.row.getValue("title")}</DialogTitle>
              <DialogDescription>
                {data.row.getValue("description")}
              </DialogDescription>
            </DialogHeader>
            <div className="relative h-[0px] w-full pb-[80%] border rounded-[12px] overflow-hidden">
              <Image
                src={data.getValue() as string}
                alt={data.row.getValue("title")}
                placeholder="blur"
                blurDataURL={lightGrayBlurData}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill
                className="object-cover"
              />
            </div>
          </DialogContent>
        </Dialog>
      ),
    },
    {
      accessorKey: "title",
      header: () => (
        <PaginationTableHeader
          tableRef={tableRef}
          headerValue="Name"
          tooltipValue="Product Name"
        />
      ),
    },
    {
      accessorKey: "category",
      header: () => (
        <PaginationTableHeader
          tableRef={tableRef}
          headerValue="Category"
          tooltipValue="Product Category"
        />
      ),
    },
    {
      accessorKey: "price",
      header: () => (
        <PaginationTableHeader
          tableRef={tableRef}
          headerValue="Price"
          tooltipValue="Product Price"
        />
      ),
    },
    {
      accessorKey: "rating",
      header: () => (
        <PaginationTableHeader
          tableRef={tableRef}
          headerValue="Rating"
          tooltipValue="Product Rating"
        />
      ),
    },
    {
      accessorKey: "stock",
      header: () => (
        <PaginationTableHeader
          tableRef={tableRef}
          headerValue="Stock"
          tooltipValue="Current Stock"
        />
      ),
    },
    {
      accessorKey: "discountPercentage",
      header: () => (
        <PaginationTableHeader
          tableRef={tableRef}
          headerValue="DP"
          tooltipValue="Discount Percentage"
        />
      ),
    },
    // will be hidden by default, only used to image view modal
    {
      accessorKey: "description",
    },
  ];
};
