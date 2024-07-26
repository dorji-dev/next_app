import InterceptingRoutesImplementation from "@/components/features/intercepting-routes/implementation/indext";
import ContentLoader from "@/components/loaders/content-loader";
import FeatureImplementationTemplate from "@/components/templates/feature-implementation";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "NextJs intercepting routes",
  description:
    "Implementation of route interception in NextJs app router, also known as modal routing",
  openGraph: {
    images: ["/api/og?title=Route Interception"],
  },
};

const InterceptingRoutesPage = () => {
  return (
    <FeatureImplementationTemplate
      apiLink="https://dummyjson.com/"
      resourceLink="https://github.com/dorji-dev/next_app/blob/main/src/app/features/(implementations)/intercepting-routes/(page)/page.tsx"
      longFeatureTitle="Route interception demo combined with parallel routing, also known as modal routing"
    >
      <Suspense
        fallback={
          <div className="mt-[100px] mb-[20px]">
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
