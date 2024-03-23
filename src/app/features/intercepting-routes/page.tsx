import InterceptingRoutesImplementation from "@/components/features/intercepting-routes/implementation/indext";
import ContentLoader from "@/components/loaders/content-loader";
import FeatureImplementationTemplate from "@/components/templates/feature-implementation";
import { Suspense } from "react";

const InterceptingRoutesPage = () => {
  return (
    <FeatureImplementationTemplate
      apiLink="https://dummyjson.com/"
      resourceLink="https://github.com/dorji-dev/next_app/blob/main/src/app/features/intercepting-routes/page.tsx"
      longFeatureTitle="Route interception demo combined with parallel routing, also known as modal routing"
    >
      <Suspense
        fallback={
          <div className="mt-[100px]">
            <ContentLoader />
          </div>
        }
      >
        <InterceptingRoutesImplementation />
      </Suspense>
    </FeatureImplementationTemplate>
  );
};

export default InterceptingRoutesPage;
