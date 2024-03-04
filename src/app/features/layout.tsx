import MobileFeatureLayoutHeader from "@/components/mobile-feature-layout-header";
import { Separator } from "@/components/ui/separator";
import React, { ReactNode } from "react";

interface FeatureLayoutProps extends React.PropsWithChildren {
  explanation: ReactNode;
}

const FeatureLayout = ({ children, explanation }: FeatureLayoutProps) => {
  return (
    <div className="flex flex-col md:flex-row pt-[10px] md:pt-[24px]  pb-[50px] h-full">
      <MobileFeatureLayoutHeader explanation={explanation} />
      {/* desktop left bar */}
      <div className="hidden md:block w-[250px] lg:w-[300px]">
        <div className="sticky top-[107px] h-[calc(100vh-121px)]">
          {explanation}
        </div>
      </div>
      <Separator
        orientation="vertical"
        className="h-[calc(100vh-160px)] sticky top-[107px] mx-[15px] bg-border/40 hidden md:block"
      />
      {/* Feature implementation */}
      <div className="w-full">{children}</div>
    </div>
  );
};

export default FeatureLayout;