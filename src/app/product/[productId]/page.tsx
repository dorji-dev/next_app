import AppBreadCrumb from "@/components/app-breadcrumb";
import ProductDetails from "@/components/product/product-details";
import BackNavigation from "@/components/shared/back-navigation";

const ProductDetailPage = () => {
  return (
    <div className="space-y-[20px] my-[30px]">
      <div className="flex justify-center">
        <AppBreadCrumb />
      </div>
      <div className="flex justify-center">
        <BackNavigation />
      </div>
      <div>
        <ProductDetails />
      </div>
    </div>
  );
};

export default ProductDetailPage;
