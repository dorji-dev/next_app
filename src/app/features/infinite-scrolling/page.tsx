import ISWSAImplementation from "@/components/features/infinite-scrolling/with-server-action/implementation";
import ISWOSAImplementation from "@/components/features/infinite-scrolling/without-server-action/implementation";
import Loader from "@/components/loader";
import FeatureImplementationTemplate from "@/components/templates/feature-implementation";
import { BASE_SEO_KEYWORDS } from "@/lib/constants/metadata";
import { InfiniteScrollingPageSearchParams } from "@/lib/types/misc";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: 'Infinite scrolling with server actions',
  description: 'Implementation of infinite scrolling with server component and server actions',
  keywords: [...BASE_SEO_KEYWORDS, 'Infinite scrolling']
}

const InfiniteScrollingPage = ({
  searchParams,
}: InfiniteScrollingPageSearchParams) => {
  const withServerAction = searchParams.with_server_action !== "false";
  return (
    <FeatureImplementationTemplate
      resourceLink="https://github.com/dorji-dev/next_app/blob/main/src/app/features/infinite-scrolling/page.tsx"
      longFeatureTitle={`Infinite scrolling implementation with server component and ${
        withServerAction ? "with" : "without"
      } server actions`}
      inspirationLink={
        withServerAction
          ? "https://github.com/gabrielelpidio/next-infinite-scroll-server-actions"
          : ""
      }
      apiLink="https://pokeapi.co/"
    >
      {withServerAction ? (
        <Suspense
          fallback={
            <div className="mt-[100px]">
              <Loader />
            </div>
          }
        >
          <ISWSAImplementation />
        </Suspense>
      ) : (
        <Suspense
          fallback={
            <div className="mt-[100px]">
              <Loader />
            </div>
          }
        >
          <ISWOSAImplementation />
        </Suspense>
      )}
    </FeatureImplementationTemplate>
  );
};

export default InfiniteScrollingPage;
