import ProductDetails from "@/components/product/product-details";
import BackNavigation from "@/components/shared/back-navigation";

const ProductDetailPage = ({ params }: { params: { productId: string } }) => {
  return (
    <div className="space-y-[20px] my-[30px]">
      <div className="flex justify-center">
        <BackNavigation />
      </div>
      <div>
        <ProductDetails productId={params.productId} />
      </div>
    </div>
  );
};

export default ProductDetailPage;
