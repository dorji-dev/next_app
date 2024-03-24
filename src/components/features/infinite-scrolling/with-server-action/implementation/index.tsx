import WSALoadMore from "./wsa-load-more";
import ProductList from "@/components/product/product-list";
import { getProducts } from "@/services/product-service";
import ParamUpdateInput from "../../../../shared/param-update-input";

const PAGE_SIZE = 12;

interface ISWithServerActionImplementationProps {
  searchKey: string;
}

const ISWithServerActionImplementation = async ({
  searchKey,
}: ISWithServerActionImplementationProps) => {
  const productsResponse = await getProducts(undefined, PAGE_SIZE, searchKey);

  if (!productsResponse) {
    return <div>No product to display</div>;
  }

  const initialOffset =
    2 * PAGE_SIZE < productsResponse.total ? 2 * PAGE_SIZE : null;

  // fetch products and return Product list and next offset
  const getProductListNodes = async (offset: number) => {
    "use server";
    try {
      const response = await getProducts(offset, PAGE_SIZE, searchKey);
      if (!response) {
        return null;
      }
      // here you could make use of next and previous value from your api to calculate nextOffset
      const nextOffset =
        offset + PAGE_SIZE < response.total ? offset + PAGE_SIZE : null;
      return [
        <ProductList products={response.products} key={offset} />,
        nextOffset,
      ] as const;
    } catch (_) {
      return null;
    }
  };

  return (
    <>
      <div className="mb-[24px] xs:max-w-[340px]">
        <ParamUpdateInput shallow={false} />
      </div>
      {productsResponse.products.length ? (
        <WSALoadMore
          key={searchKey}
          getProductListNodes={getProductListNodes}
          initialOffset={initialOffset}
        >
          <ProductList products={productsResponse.products} />
        </WSALoadMore>
      ) : (
        <p className="text-center mt-[100px] text-foreground/50">
          No products for{" "}
          <span className="text-foreground font-[600]">{searchKey}</span>
        </p>
      )}
    </>
  );
};

export default ISWithServerActionImplementation;
