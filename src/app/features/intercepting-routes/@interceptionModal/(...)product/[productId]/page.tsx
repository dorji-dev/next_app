import ProductDetailModal from "@/components/features/intercepting-routes/product-detail-modal";

const InterceptedProductDetailPage = ({
  params,
}: {
  params: { productId: string };
}) => {
  return <ProductDetailModal productId={params.productId} />;
};

export default InterceptedProductDetailPage;
