import ServerSidePaginationImplementation from "@/components/features/pagination/server-side/implementation";
import FeatureImplementationTemplate from "@/components/templates/feature-implementation";

const ServerSidePaginationPage = () => {
  return (
    <FeatureImplementationTemplate
      resourceLink="/"
      longFeatureTitle="Pagination with server side data fetching amd server components"
    >
      <ServerSidePaginationImplementation />
    </FeatureImplementationTemplate>
  );
};

export default ServerSidePaginationPage;
