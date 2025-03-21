import ServerSidePaginationImplementation from "@/components/features/pagination/server-side/implementation";
import ContentLoader from "@/components/loaders/content-loader";
import FeatureImplementationTemplate from "@/components/templates/feature-implementation";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Pagination with server side data fetching",
  description:
    "Implementation pagination in NextJs with server side data fetching",
  openGraph: {
    images: ["/api/og?title=Pagination Server Side"],
  },
};

const ServerSidePaginationPage = async (props: {
  searchParams: Promise<{ page: string; search: string }>;
}) => {
  const searchParams = await props.searchParams;
  return (
    <FeatureImplementationTemplate
      apiLink="https://dummyjson.com/"
      resourceLink="https://github.com/dorji-dev/next_app/blob/main/src/app/features/(implementations)/pagination/server-side/(page)/page.tsx"
      longFeatureTitle="Pagination with server side data fetching and client side sorting with column visibility toggle"
    >
      <Suspense
        fallback={
          <div className="mt-[100px] mb-[20px]">
            <ContentLoader />
          </div>
        }
      >
        <ServerSidePaginationImplementation
          page={searchParams.page}
          search={searchParams.search}
        />
      </Suspense>
    </FeatureImplementationTemplate>
  );
};

export default ServerSidePaginationPage;
