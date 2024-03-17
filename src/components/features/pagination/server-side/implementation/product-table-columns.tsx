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
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const getProductColumns = (
  tableRef: React.RefObject<HTMLTableElement>
): ColumnDef<Product>[] => {
  return [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          className="mr-[10px]"
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
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
          <DialogTrigger aria-label="View image" asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <IoEyeOutline className="h-4 w-4" />
            </Button>
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
      header: ({ column }) => (
        <PaginationTableHeader
          tableRef={tableRef}
          headerValue="Name"
          tooltipValue="Product Name"
          column={column}
        />
      ),
      sortingFn: "alphanumericCaseSensitive",
    },
    {
      accessorKey: "category",
      header: ({ column }) => (
        <PaginationTableHeader
          tableRef={tableRef}
          headerValue="Category"
          tooltipValue="Product Category"
          column={column}
        />
      ),
    },
    {
      accessorKey: "price",
      header: ({ column }) => (
        <PaginationTableHeader
          tableRef={tableRef}
          headerValue="Price"
          tooltipValue="Product Price"
          column={column}
        />
      ),
    },
    {
      accessorKey: "rating",
      header: ({ column }) => (
        <PaginationTableHeader
          tableRef={tableRef}
          headerValue="Rating"
          tooltipValue="Product Rating"
          column={column}
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
    {
      id: "actions",
      cell: ({ row }) => {
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <HiOutlineDotsHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="text-[14px]">
              <DropdownMenuLabel className="flex justify-between items-center">
                Actions <span className="text-[12px] font-normal bg-foreground/10 p-[4px] rounded-[4px]">ID {`= ${row.original.id}`}</span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                Compare
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                View vendor details
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                View product details
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                Checkout instantly with Discover
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];
};
