import ISWithServerActionImplementation from "@/components/features/infinite-scrolling/with-server-action/implementation";
import ContentLoader from "@/components/loaders/content-loader";
import FeatureImplementationTemplate from "@/components/templates/feature-implementation";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Infinite scrolling with server actions",
  description:
    "Implementation of infinite scrolling with server component and server actions",
  openGraph: {
    images: ["/api/og?title=Infinite Scrolling with Server Actions"],
  },
};

const InfiniteScrollWithServerActionPage = async (props: {
  searchParams: Promise<{ search: string }>;
}) => {
  const searchParams = await props.searchParams;
  return (
    <FeatureImplementationTemplate
      resourceLink="https://github.com/dorji-dev/next_app/blob/main/src/app/features/(implementations)/infinite-scrolling/with-server-action/(page)/page.tsx"
      longFeatureTitle={`Infinite scrolling implementation with server component and server actions with search feature`}
      inspirationLink="https://github.com/gabrielelpidio/next-infinite-scroll-server-actions"
      apiLink="https://dummyjson.com/"
    >
      <Suspense
        fallback={
          <div className="mt-[100px] mb-[20px]">
            <ContentLoader />
          </div>
        }
      >
        <ISWithServerActionImplementation searchKey={searchParams.search} />
      </Suspense>
    </FeatureImplementationTemplate>
  );
};

export default InfiniteScrollWithServerActionPage;
