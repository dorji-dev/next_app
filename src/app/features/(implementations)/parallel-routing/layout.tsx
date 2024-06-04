import FeatureImplementationExplanationLayout from "@/components/layouts/feature-implementation-explanation";
import { PropsWithChildren, ReactNode } from "react";

interface ParallelRoutingLayoutProps extends PropsWithChildren {
  firstPage: ReactNode;
  secondPage: ReactNode;
  thirdPage: ReactNode;
  fourthPage: ReactNode;
  explanation: ReactNode;
}

const ParallelRoutingLayout = (props: ParallelRoutingLayoutProps) => {
  const {
    firstPage,
    secondPage,
    thirdPage,
    fourthPage,
    children,
    explanation,
  } = props;
  return (
    <FeatureImplementationExplanationLayout explanation={explanation}>
      <div className="space-y-[20px]">
        <div>{children}</div>
        <div className="grid xs:grid-cols-2 gap-[20px]">
          <div className="border flex justify-center items-center rounded-[8px] h-[200px]">
            {firstPage}
          </div>
          <div className="border flex justify-center items-center rounded-[8px] h-[200px]">
            {secondPage}
          </div>
          <div className="border flex justify-center items-center rounded-[8px] h-[200px]">
            {thirdPage}
          </div>
          <div className="border flex justify-center items-center rounded-[8px] h-[200px]">
            {fourthPage}
          </div>
        </div>
      </div>
    </FeatureImplementationExplanationLayout>
  );
};

export default ParallelRoutingLayout;
