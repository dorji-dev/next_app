import { fetchHelper } from "@/helpers/fetch-helper";
import { Product, ProductsResponse } from "@/lib/types/product";

/**
 * Get product listings
 * @param offset 
 * @param pageSize 
 * @param searchKey 
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
  }).catch(() => null);
};

/**
 * Get product details by product ID
 * @param id `productId`
 * @returns `null` if there is an error while fetching, so don't forget to handle it to show appropriate UI
 */
export const getProductDetailById = async (id: string) => {
  const url = `https://dummyjson.com/products/${id}`;
  return fetchHelper<Product>({
    url,
    method: "GET",
  }).catch(() => null);
};
