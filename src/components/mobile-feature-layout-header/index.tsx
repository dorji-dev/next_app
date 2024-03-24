"use client";

import { IoMdArrowBack } from "react-icons/io";
import { Button, buttonVariants } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface MobileFeatureLayoutHeaderProps {
  explanation: ReactNode;
}

const MobileFeatureLayoutHeader = ({
  explanation,
}: MobileFeatureLayoutHeaderProps) => {
  const router = useRouter();

  return (
    <div className="md:hidden">
      <Sheet>
        <div className="flex justify-between p-[4px] bg-foreground/5 border border-border/20 rounded-full">
          <Button
            onClick={router.back}
            size="icon"
            variant="secondary"
            aria-label="Back"
          >
            <IoMdArrowBack className="w-[20px] h-[24px]" />
          </Button>
          <SheetTrigger className={cn(buttonVariants({variant: "default"}), "font-normal text-[14px]")}>
            View explanation
          </SheetTrigger>
        </div>
        <SheetContent side="bottom" className="h-[calc(100dvh-40px)]">
          {explanation}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileFeatureLayoutHeader;
