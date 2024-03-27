import ParallelRouteLoader from "@/components/features/parallel-routing/parallel-route-loader";
import { PropsWithChildren, ReactNode, Suspense } from "react";

interface ParallelRoutingLayoutProps extends PropsWithChildren {
  firstPage: ReactNode;
  secondPage: ReactNode;
  thirdPage: ReactNode;
  fourthPage: ReactNode;
}

const ParallelRoutingLayout = (props: ParallelRoutingLayoutProps) => {
  const { firstPage, secondPage, thirdPage, fourthPage, children } = props;
  return (
    <div className="space-y-[20px]">
      <div>{children}</div>
      <div className="grid grid-cols-2 gap-[20px]">
        <div className="border flex justify-center items-center rounded-[8px] h-[200px]">
          {/* This is a hack for the loading to work as expected, currently there seems 
            to have a bug that the loading.tsx file of the first parallel route in the
            folder structure is being overwritten by the nearest parent loading.tsx file.
            We have also removed the loading.tsx file of the @firstPage route */}
          <Suspense
            fallback={<ParallelRouteLoader pageName="One" />}
          >
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
  );
};

export default ParallelRoutingLayout;
