import ClientSidePaginationImplementation from "@/components/features/pagination/client-side/implementation";
import FeatureImplementationTemplate from "@/components/templates/feature-implementation";

const ClientSidePaginationPage = () => {
  return (
    <FeatureImplementationTemplate
      resourceLink="https://github.com/dorji-dev/next_app/blob/feat/pagination/src/app/features/pagination/client-side/page.tsx"
      longFeatureTitle="Pagination with client side data fetching with useSWR hook"
    >
      <ClientSidePaginationImplementation />
    </FeatureImplementationTemplate>
  );
};

export default ClientSidePaginationPage;
