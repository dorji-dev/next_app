import ISWSAImplementation from "@/components/features/infinite-scrolling/with-server-action/implementation";
import ISWOSAImplementation from "@/components/features/infinite-scrolling/without-server-action/implementation";
import FeatureImplementationTemplate from "@/components/templates/feature-implementation";
import { InfiniteScrollingPageSearchParams } from "@/lib/types/misc";

const InfiniteScrollingPage = ({
  searchParams,
}: InfiniteScrollingPageSearchParams) => {
  const withServerAction = searchParams.with_server_action !== "false";
  return (
    <FeatureImplementationTemplate
      resourceLink="https://github.com/dorji-dev/next_app/blob/main/src/app/features/infinite-scrolling/page.tsx"
      longFeatureTitle={`Infinite scrolling implementation with server component and ${
        withServerAction ? "with" : "without"
      } server actions`}
      inspirationLink={
        withServerAction
          ? "https://github.com/gabrielelpidio/next-infinite-scroll-server-actions"
          : ""
      }
    >
      {withServerAction ? <ISWSAImplementation /> : <ISWOSAImplementation />}
    </FeatureImplementationTemplate>
  );
};

export default InfiniteScrollingPage;
