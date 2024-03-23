import { ProductsResponse } from "@/lib/types/product";
import ProductCard from "./product-card";

interface ProductListProps {
  products: ProductsResponse["products"];
}

const ProductList = ({ products }: ProductListProps) => {
  return products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
};

export default ProductList;
