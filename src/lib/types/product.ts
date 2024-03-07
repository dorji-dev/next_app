export interface ProductsResponse {
  products: {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    branch: string;
    category: string;
    thumbnail: string;
    images: string[];
  }[];
  total: number;
  skip: number;
  limit: number;
}
