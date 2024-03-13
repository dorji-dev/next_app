import ClientSidePaginationImplementation from "@/components/features/pagination/client-side/implementation";
import FeatureImplementationTemplate from "@/components/templates/feature-implementation";

const ClientSidePaginationPage = () => {
  return (
    <FeatureImplementationTemplate
      resourceLink="/"
      longFeatureTitle="Pagination with client side data fetching with useSWR hook"
    >
      <ClientSidePaginationImplementation />
    </FeatureImplementationTemplate>
  );
};

export default ClientSidePaginationPage;
