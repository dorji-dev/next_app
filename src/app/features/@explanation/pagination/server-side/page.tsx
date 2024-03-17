import ServerSidePaginationExplanation from "@/components/features/pagination/server-side/explanation";
import FeatureExplanationTemplate from "@/components/templates/feature-explanation";

const ServerSidePaginationExplanationPage = () => {
  return (
    <FeatureExplanationTemplate disclaimer="In order to follow along the explanation, you are expected to go through the linked resource to understand it better.">
      <ServerSidePaginationExplanation />
    </FeatureExplanationTemplate>
  );
};

export default ServerSidePaginationExplanationPage;
