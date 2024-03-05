import PaginationImplementation from "@/components/features/pagination/implementation";
import FeatureImplementationTemplate from "@/components/templates/feature-implementation";

const PaginationPage = () => {
  return (
    <FeatureImplementationTemplate
      resourceLink="/"
      longFeatureTitle="Pagination with server component and query state"
    >
      <PaginationImplementation />
    </FeatureImplementationTemplate>
  );
};

export default PaginationPage;
