"use client";

import useSWR from "swr";
import ParamUpdateInput from "@/components/shared/param-update-input";
import { fetchHelper } from "@/helpers/fetch-helper";
import { ProductsResponse } from "@/lib/types/product";
import { useQueryState } from "nuqs";
import ContentLoader from "@/components/loaders/content-loader";
import PaginationDataTable from "../../pagination-data-table";
import PaginationNav from "../../pagination-nav";

const resetKeysOnSearch = ["page"];

const PAGE_SIZE = 6;

// you can abstract away the infinite loading logic in an effect called useInfiniteLoading()
// where both the fetFetchURL and fetcher functions will be defined there
// I have kept it here so that you don't have to switch context to get the concept
const getFetchURL = (offset: number, searchKey: string | null) => {
  const url = `https://dummyjson.com/products${
    searchKey?.trim() ? `/search?q=${searchKey}&` : "?"
  }limit=${PAGE_SIZE}&skip=${offset}`;
  return url; // SWR key
};

const fetcher = async (url: string): Promise<ProductsResponse | null> => {
  return fetchHelper<ProductsResponse>({
    url,
    method: "GET",
  });
};

const ClientSidePaginationImplementation = () => {
  const [searchQuery, _] = useQueryState("search");
  const [page, __] = useQueryState("page");
  // this logic will depend on your backend api
  const getOffsetValue = () => {
    if (page && Number(page)) {
      const toFixedValue = Number(Number(page).toFixed(0));
      return toFixedValue <= 1 ? 0 : (toFixedValue - 1) * PAGE_SIZE;
    } else {
      return 0;
    }
  };

  const {
    data: productsResponse,
    error,
    isLoading,
  } = useSWR(getFetchURL(getOffsetValue(), searchQuery), fetcher);

  if (error) {
    return (
      <p className="mt-[100px] text-center text-foreground/50">
        There was an error fetching data
      </p>
    );
  }

  return (
    <div>
      <div className="mb-[24px] xs:max-w-[340px]">
        <ParamUpdateInput shallow resetParamKeys={resetKeysOnSearch} />
      </div>
      {/* Hiding input field on every search with loader give bad UX so the 
        loader is shown here */}
      {isLoading && (
        <div className="mt-[100px] mb-[20px]">
          <ContentLoader />
        </div>
      )}

      {!isLoading &&
        (productsResponse?.products.length ? (
          <>
            <PaginationDataTable products={productsResponse.products} />
            <div className="mt-[20px] relative">
              <PaginationNav
                pageSize={PAGE_SIZE}
                totalItems={productsResponse.total}
                shallow
              />
            </div>
          </>
        ) : (
          <p className="mt-[100px] text-center text-foreground/50">
            There are no products to display
          </p>
        ))}
    </div>
  );
};

export default ClientSidePaginationImplementation;
