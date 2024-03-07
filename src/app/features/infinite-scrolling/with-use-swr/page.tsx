import ISWithUseSWRImplementation from "@/components/features/infinite-scrolling/with-use-swr/implementation";
import FeatureImplementationTemplate from "@/components/templates/feature-implementation";

const InfiniteScrollWithUseSWRPage = () => {
  return (
    <FeatureImplementationTemplate
      longFeatureTitle="Implementation of infinite scrolling with useSWR"
      resourceLink="https://github.com/dorji-dev/next_app/blob/main/src/app/features/infinite-scrolling/with-use-swr/page.tsx"
    >
      <ISWithUseSWRImplementation />
    </FeatureImplementationTemplate>
  );
};

export default InfiniteScrollWithUseSWRPage;
