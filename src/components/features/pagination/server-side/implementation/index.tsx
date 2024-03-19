import { getProducts } from "@/services/get-products";
import ParamUpdateInput from "@/components/shared/param-update-input";
import PaginationDataTable from "../../pagination-data-table";
import PaginationNav from "../../pagination-nav";

const PAGE_SIZE = 6;

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
        <>
          <PaginationDataTable products={productsResponse.products} />
          <div className="mt-[20px] relative">
            <PaginationNav
              pageSize={PAGE_SIZE}
              totalItems={productsResponse.total}
              shallow={false}
            />
          </div>
        </>
      ) : (
        <p className="mt-[100px] text-center text-foreground/50">
          There are no products to display
        </p>
      )}
    </div>
  );
};

export default ServerSidePaginationImplementation;
