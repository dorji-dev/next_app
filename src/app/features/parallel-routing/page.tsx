import ParallelRoutingImplementation from "@/components/features/parallel-routing/implementation";
import FeatureImplementationTemplate from "@/components/templates/feature-implementation";

const ParallelRoutingImplementationPage = () => {
  return (
    <FeatureImplementationTemplate
      resourceLink="https://github.com/dorji-dev/next_app/blob/main/src/app/features/parallel-routing/page.tsx"
      longFeatureTitle="Parallel routing concept demo, rendering multiple pages in one page simultaneously or conditionally"
    >
      <ParallelRoutingImplementation />
    </FeatureImplementationTemplate>
  );
};

export default ParallelRoutingImplementationPage;
