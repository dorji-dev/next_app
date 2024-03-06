import ISWithTanstackQueryImplementation from "@/components/features/infinite-scrolling/with-tanstack-query/implementation";
import FeatureImplementationTemplate from "@/components/templates/feature-implementation";

const InfiniteScrollWithTanstackQueryPage = () => {
  return (
    <FeatureImplementationTemplate
      longFeatureTitle="Implementation of infinite scrolling with tanstack query library"
      resourceLink="https://github.com/dorji-dev/next_app/blob/main/src/app/features/infinite-scrolling/with-tanstack-query/page.tsx"
    >
      <ISWithTanstackQueryImplementation />
    </FeatureImplementationTemplate>
  );
};

export default InfiniteScrollWithTanstackQueryPage;
