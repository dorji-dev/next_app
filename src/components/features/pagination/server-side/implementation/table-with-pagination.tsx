"use client";

import DataTable from "@/components/shared/data-table";
import PaginationNav from "./pagination-nav";
import { ProductsResponse } from "@/lib/types/product";
import { getProductColumns } from "./product-table-columns";
import { useRef } from "react";

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
  const tableRef = useRef<HTMLTableElement>(null);
  const productColumns = getProductColumns(tableRef);
  return (
    <>
      <DataTable
        data={products}
        columns={productColumns}
        columnsToHide={["description"]}
        ref={tableRef}
      />
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
