import { toTitleCase } from "@/lib/utils/misc";
import { getProductDetailById } from "@/services/product-service";
import ProductImageCarousel from "./product-image-carousel";

interface ProductDetailsProps {
  productId: string;
  usedIn?: "page" | "modal";
}

const ProductDetails = async ({ productId, usedIn }: ProductDetailsProps) => {
  const product = await getProductDetailById(productId);

  if (product === null) {
    return (
      <p className="text-center mt-[100px] text-foreground/50">
        There was an error fetching data.
      </p>
    );
  }

  return (
    <div className="text-center space-y-[12px] w-full">
      <h6 className="text-[16px] font-bold">{toTitleCase(product.title)}</h6>
      <p className="text-muted-foreground">{product.description}</p>
      <ProductImageCarousel
        enableCarouselNav={usedIn === "modal" ? false : true}
        images={product.images}
      />
      <div className="space-y-[12px] !mt-[30px]">
        <p>
          <span className="text-[18px] font-bold">${product.price}</span>{" "}
          <span className="text-[12px] text-muted-foreground">
            {product.discountPercentage}% Off
          </span>
        </p>
        <p className="bg-primary w-max text-white mx-auto text-[12px] rounded-[4px] px-[8px] py-[4px]">
          {product.rating}
        </p>
        <p>
          <span className="text-muted-foreground uppercase text-[12px] tracking-widest">
            Stock:
          </span>{" "}
          {product.stock}
        </p>
        <p>
          <span className="text-muted-foreground uppercase text-[12px] tracking-widest">
            Brand:
          </span>{" "}
          {product.brand}
        </p>
        <p>
          <span className="text-muted-foreground uppercase text-[12px] tracking-widest">
            Category:
          </span>{" "}
          {product.category}
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
