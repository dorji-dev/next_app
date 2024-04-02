import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { ReactNode } from "react";
import AppBreadCrumb from "../app-breadcrumb";

interface MobileFeatureLayoutHeaderProps {
  explanation: ReactNode;
}

const MobileFeatureLayoutHeader = ({
  explanation,
}: MobileFeatureLayoutHeaderProps) => {
  return (
    <div className="md:hidden flex justify-between items-center mt-[10px] px-[4px]">
      <AppBreadCrumb />
      <Sheet>
        <SheetTrigger className="text-primary underline decoration-border/40 underline-offset-[2px]">
          View explanation
        </SheetTrigger>
        <SheetContent side="bottom" className="h-[calc(100dvh-40px)]">
          {explanation}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileFeatureLayoutHeader;
