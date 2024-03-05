import { fetchHelper } from "@/helpers/fetch-helper";
import { Product } from "@/lib/types/product";

/**
 * Fetch fake products
 * @param offset 
 * @param pageSize 
 * @returns 
 */
export const getProducts = async (offset: number = 0, pageSize: number) =>
  await fetchHelper<Product[]>({
    url: `https://api.escuelajs.co/api/v1/products?limit=${pageSize}&offset=${offset}`,
    method: "GET",
  });
