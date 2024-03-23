import ProductCard from "@/components/product/product-card";
import { getProducts } from "@/services/product-service";
import Link from "next/link";
const PAGE_SIZE = 12;

const InterceptingRoutesImplementation = async () => {
  const productsResponse = await getProducts(undefined, PAGE_SIZE);

  if (productsResponse === null) {
    return <div>Error fetching products</div>;
  }

  return (
    <div>
      {productsResponse.products.length ? (
        <div className="grid grid-cols-1 xxs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[15px]">
          {productsResponse.products.map((product) => (
            <Link
              href={`/product/${product.id}`}
              scroll={false}
              key={product.id}
            >
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center mt-[100px] text-foreground/50">No products</p>
      )}
    </div>
  );
};

export default InterceptingRoutesImplementation;
