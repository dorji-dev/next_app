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
    <div className="md:hidden flex justify-between items-center">
      <AppBreadCrumb />
      <Sheet>
        <SheetTrigger className="text-primary underline decoration-border underline-offset-[4px]">
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
