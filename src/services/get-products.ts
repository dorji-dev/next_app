import { fetchHelper } from "@/helpers/fetch-helper";
import { ProductsResponse } from "@/lib/types/product";

/**
 * Fetch fake products
 * @param offset
 * @param pageSize
 * @returns `null` if there is an error while fetching, so don't forget to handle it to show appropriate UI
 */
export const getProducts = async (
  offset: number = 0,
  pageSize: number,
  searchKey: string = ""
) => {
  // modify url based on existence of search key
  const url = `https://dummyjson.com/products${
    searchKey?.trim() ? `/search?q=${searchKey}&` : "?"
  }limit=${pageSize}&skip=${offset}`;
  return fetchHelper<ProductsResponse>({
    url,
    method: "GET",
  }).catch(_ => null);
};