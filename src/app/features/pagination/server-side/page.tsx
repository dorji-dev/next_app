import ServerSidePaginationImplementation from "@/components/features/pagination/server-side/implementation";
import FeatureImplementationTemplate from "@/components/templates/feature-implementation";

const ServerSidePaginationPage = () => {
  return (
    <FeatureImplementationTemplate
      resourceLink="https://github.com/dorji-dev/next_app/blob/feat/pagination/src/app/features/pagination/server-side/page.tsx"
      longFeatureTitle="Pagination with server side data fetching amd server components"
    >
      <ServerSidePaginationImplementation />
    </FeatureImplementationTemplate>
  );
};

export default ServerSidePaginationPage;
