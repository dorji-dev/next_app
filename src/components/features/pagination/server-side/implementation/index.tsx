import { DataTable } from "@/components/shared/data-table";
import { getProducts } from "@/services/get-products";
import { productColumns } from "./product-table-columns";
import PaginationNav from "./pagination-nav";

const PAGE_SIZE = 12;

interface ServerSidePaginationImplementationProps {
  page: string;
}

const ServerSidePaginationImplementation = async ({
  page,
}: ServerSidePaginationImplementationProps) => {
  // this logic will depend on your backend api
  const getOffsetValue = () => {
    if (page && Number(page)) {
      const toFixedValue = Number(Number(page).toFixed(0));
      return toFixedValue <= 1 ? 0 : (toFixedValue - 1) * PAGE_SIZE;
    } else {
      return 0;
    }
  };

  const productsResponse = await getProducts(getOffsetValue(), PAGE_SIZE);

  if (!productsResponse) {
    return (
      <p className="mt-[100px] text-center text-foreground/50">
        There was an error fetching data
      </p>
    );
  }

  if (!productsResponse.products.length) {
    return (
      <p className="mt-[100px] text-center text-foreground/50">
        There are no products to display
      </p>
    );
  }

  return (
    <div>
      <DataTable
        data={productsResponse.products}
        columns={productColumns}
        columnsToHide={["description"]}
      />
      <div className="mt-[20px]">
        <PaginationNav
          pageSize={PAGE_SIZE}
          totalItems={productsResponse.total}
        />
      </div>
    </div>
  );
};

export default ServerSidePaginationImplementation;
