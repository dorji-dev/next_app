import ServerActionToggle from "@/components/features/infinite-scrolling/server-action-toggle";
import ISWSAExplanation from "@/components/features/infinite-scrolling/with-server-action/explanation";
import ISWOSAExplanation from "@/components/features/infinite-scrolling/without-server-action/explanation";
import FeatureExplanationTemplate from "@/components/templates/feature-explanation";
import { InfiniteScrollingPageSearchParams } from "@/lib/types/misc";

const InfiniteScrollingExplanation = ({
  searchParams,
}: InfiniteScrollingPageSearchParams) => {
  const withServerAction = searchParams.with_server_action !== "false";
  return (
    <FeatureExplanationTemplate
      featureTitle="Infinite loading"
      disclaimer="In order to follow along the explanation, you are expected to go through the linked resource to understand it better."
    >
      <ServerActionToggle className="mb-[20px]" />
      {withServerAction ? <ISWSAExplanation /> : <ISWOSAExplanation />}
    </FeatureExplanationTemplate>
  );
};

export default InfiniteScrollingExplanation;
