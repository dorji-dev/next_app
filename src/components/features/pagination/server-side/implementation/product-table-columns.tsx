"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Product } from "@/lib/types/product";
import { lightGrayBlurData } from "@/lib/utils/rgb-data-url";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { IoEyeOutline } from "react-icons/io5";

export const productColumns: ColumnDef<Product>[] = [
  {
    accessorKey: "id",
    header: () => (
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
            <span>ID</span>
          </TooltipTrigger>
          <TooltipContent side="bottom" sideOffset={12}>
            <p>Product ID</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ),
  },
  {
    accessorKey: "thumbnail",
    header: () => (
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
            <span>Image</span>
          </TooltipTrigger>
          <TooltipContent side="bottom" sideOffset={12}>
            <p>Product Image</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
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
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
            <span>Name</span>
          </TooltipTrigger>
          <TooltipContent side="bottom" sideOffset={12}>
            <p>Product name</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ),
  },
  {
    accessorKey: "category",
    header: () => (
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
            <span>Category</span>
          </TooltipTrigger>
          <TooltipContent side="bottom" sideOffset={12}>
            <p>Product category</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ),
  },
  {
    accessorKey: "price",
    header: () => (
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
            <span>Price</span>
          </TooltipTrigger>
          <TooltipContent side="bottom" sideOffset={12}>
            <p>Product price</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ),
  },
  {
    accessorKey: "rating",
    header: () => (
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
            <span>Rating</span>
          </TooltipTrigger>
          <TooltipContent side="bottom" sideOffset={12}>
            <p>Product rating</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ),
  },
  {
    accessorKey: "stock",
    header: () => (
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
            <span>Stock</span>
          </TooltipTrigger>
          <TooltipContent side="bottom" sideOffset={12}>
            <p>Current stock</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ),
  },
  {
    accessorKey: "discountPercentage",
    header: () => (
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
            <span>DP</span>
          </TooltipTrigger>
          <TooltipContent side="bottom" sideOffset={12}>
            <p>Discount percentage</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ),
  },
  // will be hidden by default, only used on image view modal
  {
    accessorKey: "description",
  },
];
