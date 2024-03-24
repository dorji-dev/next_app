"use client";

import ContentLoader from "@/components/loaders/content-loader";
import ProductDetails from "@/components/product/product-details";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { Suspense } from "react";

interface ProductDetailModalProps {
  productId: string;
}

const ProductDetailModal = ({ productId }: ProductDetailModalProps) => {
  const router = useRouter();

  return (
    <Dialog open={true} onOpenChange={(open) => !open && router.back()}>
      <DialogContent>
        <div className="py-[10px]">
          <button
            onClick={router.refresh}
            className="text-center text-[12px] text-primary mb-[8px] mx-auto block hover:underline"
          >
            Visit page
          </button>
          <Suspense
            fallback={
              <div className="my-[60px]">
                <ContentLoader />
              </div>
            }
          >
            <ProductDetails productId={productId} usedIn="modal" />
          </Suspense>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailModal;
