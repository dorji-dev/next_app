import ISWithServerActionExplanation from "@/components/features/infinite-scrolling/with-server-action/explanation";
import FeatureExplanationTemplate from "@/components/templates/feature-explanation";

const WithServerActionExplanationPage = () => {
  return (
    <FeatureExplanationTemplate
      featureTitle="Infinite loading"
      disclaimer="In order to follow along the explanation, you are expected to go through the linked resource to understand it better."
    >
      <ISWithServerActionExplanation />
    </FeatureExplanationTemplate>
  );
};

export default WithServerActionExplanationPage;
