import ISWithServerActionImplementation from "@/components/features/infinite-scrolling/with-server-action/implementation";
import Loader from "@/components/loader";
import FeatureImplementationTemplate from "@/components/templates/feature-implementation";
import { BASE_SEO_KEYWORDS } from "@/lib/constants/metadata";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Infinite scrolling with server actions",
  description:
    "Implementation of infinite scrolling with server component and server actions",
  keywords: [...BASE_SEO_KEYWORDS, "Infinite scrolling"],
};

const InfiniteScrollWithServerActionPage = ({
  searchParams,
}: {
  searchParams: { search: string };
}) => {
  return (
    <FeatureImplementationTemplate
      resourceLink="https://github.com/dorji-dev/next_app/blob/main/src/app/features/infinite-scrolling/with-server-action/page.tsx"
      longFeatureTitle={`Infinite scrolling implementation with server component and server actions with search feature`}
      inspirationLink="https://github.com/gabrielelpidio/next-infinite-scroll-server-actions"
      apiLink="https://dummyjson.com/"
    >
      <Suspense
        fallback={
          <div className="mt-[100px]">
            <Loader />
          </div>
        }
      >
        <ISWithServerActionImplementation searchKey={searchParams.search} />
      </Suspense>
    </FeatureImplementationTemplate>
  );
};

export default InfiniteScrollWithServerActionPage;
