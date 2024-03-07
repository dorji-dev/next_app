import { ProductsResponse } from "@/lib/types/product";
import { toTitleCase } from "@/lib/utils/misc";
import { rgbDataURL } from "@/lib/utils/rgb-data-url";
import Image from "next/image";

interface ProductListProps {
  products: ProductsResponse["products"];
}

const ProductList = ({ products }: ProductListProps) => {

  return products.map((product) => (
    <div
      key={product.id}
      className="flex flex-col border border-border rounded-[8px] p-[8px]"
    >
      <div className="relative h-[0px] w-full pb-[120%] border border-foreground/5 rounded-t-[8px]">
        <Image
          src={product.thumbnail}
          alt={product.title}
          placeholder="blur"
          blurDataURL={rgbDataURL(229, 228, 226)}
          style={{
            borderTopLeftRadius: 7,
            borderTopRightRadius: 7,
          }}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="pb-[10px] pt-[10px]">
        <p>{toTitleCase(product.title)}</p>
        <p className="text-[12px] text-foreground/50">{toTitleCase(product.category)}</p>
        <p><span className="mr-[2px] font-[600]">Nu.{product.price}</span> <span className="text-[11px]">{product.discountPercentage}%Off</span></p>
      </div>
    </div>
  ));
};

export default ProductList;
