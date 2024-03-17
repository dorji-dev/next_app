import { getProducts } from "@/services/get-products";
import ParamUpdateInput from "@/components/shared/param-update-input";
import TableWithPagination from "./table-with-pagination";

const PAGE_SIZE = 10;

interface ServerSidePaginationImplementationProps {
  page: string;
  search: string;
}

const ServerSidePaginationImplementation = async ({
  page,
  search,
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

  const productsResponse = await getProducts(
    getOffsetValue(),
    PAGE_SIZE,
    search
  );

  if (!productsResponse) {
    return (
      <p className="mt-[100px] text-center text-foreground/50">
        There was an error fetching data
      </p>
    );
  }

  const resetKeysOnSearch = ["page"];

  return (
    <div>
      <div className="mb-[24px] xs:max-w-[340px]">
        <ParamUpdateInput shallow={false} resetParamKeys={resetKeysOnSearch} />
      </div>
      {productsResponse.products.length ? (
        <TableWithPagination
          products={productsResponse.products}
          pageSize={PAGE_SIZE}
          totalItems={productsResponse.total}
        />
      ) : (
        <p className="mt-[100px] text-center text-foreground/50">
          There are no products to display
        </p>
      )}
    </div>
  );
};

export default ServerSidePaginationImplementation;
