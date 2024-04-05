import ParallelRouteLoader from "@/components/features/parallel-routing/parallel-route-loader";
import FeatureImplementationExplanationLayout from "@/components/layouts/feature-implementation-explanation";
import ParallelRouteChildrenSkeleton from "@/components/parallel-route-children-skeleton";
import { PropsWithChildren, ReactNode, Suspense } from "react";

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
        <div>
          <Suspense fallback={<ParallelRouteChildrenSkeleton />}>
            {children}
          </Suspense>
        </div>
        <div className="grid xs:grid-cols-2 gap-[20px]">
          <div className="border flex justify-center items-center rounded-[8px] h-[200px]">
            {/* This is a hack for the loading to work as expected, currently there seems 
            to have a bug that the loading.tsx file of the first parallel route in the
            folder structure is being overwritten by the nearest parent loading.tsx file.
            We have also removed the loading.tsx file of the @firstPage route */}
            <Suspense fallback={<ParallelRouteLoader pageName="One" />}>
              {firstPage}
            </Suspense>
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
