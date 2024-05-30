"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface ProductDetailModalProps {
  children: ReactNode;
}

const ProductDetailModal = ({ children }: ProductDetailModalProps) => {
  const router = useRouter();

  return (
    <Dialog open={true} onOpenChange={(open) => !open && router.back()}>
      <DialogContent>
        <div className="py-[10px]">
          <button
            // Next router.refresh doesn't cause full browser refresh that's why using browser api here
            onClick={window.location.reload.bind(window.location)}
            className="text-center text-[12px] text-primary mb-[8px] mx-auto block hover:underline"
          >
            Visit page
          </button>
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailModal;
