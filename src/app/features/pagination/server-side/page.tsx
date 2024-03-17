import ServerSidePaginationImplementation from "@/components/features/pagination/server-side/implementation";
import ContentLoader from "@/components/loaders/content-loader";
import FeatureImplementationTemplate from "@/components/templates/feature-implementation";
import { Suspense } from "react";

const ServerSidePaginationPage = ({
  searchParams,
}: {
  searchParams: { page: string; search: string };
}) => {
  return (
    <FeatureImplementationTemplate
      resourceLink="https://github.com/dorji-dev/next_app/blob/feat/pagination/src/app/features/pagination/server-side/page.tsx"
      longFeatureTitle="Pagination with server side data fetching amd server components"
    >
      <Suspense
        fallback={
          <div className="mt-[100px]">
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
