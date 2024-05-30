import ProductDetailModal from "@/components/features/intercepting-routes/product-detail-modal";
import { Suspense } from "react";
import ContentLoader from "@/components/loaders/content-loader";
import ProductDetails from "@/components/product/product-details";

const InterceptedProductDetailPage = () => {
  return (
    <ProductDetailModal>
      <Suspense
        fallback={
          <div className="my-[60px] mb-[20px]">
            <ContentLoader />
          </div>
        }
      >
        <ProductDetails usedIn="modal" />
      </Suspense>
    </ProductDetailModal>
  );
};

export default InterceptedProductDetailPage;
