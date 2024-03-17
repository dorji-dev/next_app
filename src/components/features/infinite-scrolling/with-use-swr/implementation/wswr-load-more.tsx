"use client";

import { ProductsResponse } from "@/lib/types/product";
import useSWRInfinite from "swr/infinite";
import { useQueryState } from "nuqs";
import { fetchHelper } from "@/helpers/fetch-helper";
import ContentLoader from "@/components/loaders/content-loader";
import { InView } from "react-intersection-observer";
import ProductList from "@/components/shared/product-list";
import { Separator } from "@/components/ui/separator";

const PAGE_SIZE = 12;

// you can abstract away the infinite loading logic in an effect called useInfiniteLoading()
// where both the fetFetchURL and fetcher functions will be defined there
// I have kept it here so that you don't have to switch context to get the concept
const getFetchURL = (
  pageIndex: number,
  previousPageData: ProductsResponse,
  searchKey: string | null
) => {
  if (previousPageData && !previousPageData.products.length) return null; // reached the end
  const url = `https://dummyjson.com/products${
    searchKey?.trim() ? `/search?q=${searchKey}&` : "?"
  }limit=${PAGE_SIZE}&skip=${pageIndex * PAGE_SIZE}`;
  return url; // SWR key
};

const fetcher = async (url: string): Promise<ProductsResponse | null> => {
  return fetchHelper<ProductsResponse>({
    url,
    method: "GET",
  });
};

// component
const WithUseSWRLoadMore = () => {
  const [searchQuery, _] = useQueryState("search");
  const { data, size, setSize, isLoading, isValidating, error } =
    useSWRInfinite(
      (pageIndex, previousPageData) =>
        getFetchURL(pageIndex, previousPageData, searchQuery),
      fetcher,
      {
        revalidateFirstPage: false,
      }
    );

  if (isLoading && !data) {
    return (
      <div className="mt-[100px]">
        <ContentLoader />
      </div>
    );
  }

  if (error || !data) {
    return (
      <p className="text-center mt-[100px] text-foreground/50">
        There was an error fetching data.
      </p>
    );
  }

  // due to the data structure from the API, I have to check if at least the first page data
  // has some products to show appropriate UI whenever the user makes a search query
  if (data?.[0] && !data[0].products.length && searchQuery) {
    return (
      <p className="text-center mt-[100px] text-foreground/50">
        No products for{" "}
        <span className="text-foreground font-[600]">{searchQuery}</span>
      </p>
    );
  }

  const lastPageData = data[data.length - 1];
  // check if next page exists to control whether to set next size or not
  // when our target element is in view
  const nextPageExists = lastPageData
    ? size * PAGE_SIZE < lastPageData.total
    : false;
  const totalData = lastPageData?.total;

  let totalProducts = 0;
  for (let i = 0; i < data.length; i++) {
    totalProducts += data[i]?.products?.length ?? 0;
  }

  // by the time we reach here, we have at least a data to render
  return (
    <>
      <p className="flex space-x-[8px] mb-[20px] items-center">
        <span className="text-[12px]">Loaded</span>
        <span className="text-primary">({totalProducts}</span>
        <Separator className="h-[14px] rotate-[30deg]" orientation="vertical" />
        <span className="text-foreground/60">{totalData})</span>
        <span className="text-[12px]">products</span>
      </p>
      <div className="grid grid-cols-1 xxs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[15px]">
        {data.map(
          (productData) =>
            productData?.products && (
              <ProductList
                products={productData.products}
                key={productData.skip}
              />
            )
        )}
      </div>
      <InView
        as="div"
        onChange={(inView) => nextPageExists && inView && setSize(size + 1)}
      >
        <div></div>
      </InView>

      {/* isValidating means that the next page is fetching and will be false if there is no next
        page to fetch based on what we return from the  getFetchURL function */}

      {isValidating && (
        <div className="relative mt-[60px]">
          <ContentLoader />
        </div>
      )}
    </>
  );
};

export default WithUseSWRLoadMore;
