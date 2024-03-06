import ISWithTanstackQueryExplanation from "@/components/features/infinite-scrolling/with-tanstack-query/explanation";
import FeatureExplanationTemplate from "@/components/templates/feature-explanation";

const WithTanstackQueryExplanation = () => {
  return (
    <FeatureExplanationTemplate
      featureTitle="Infinite scrolling with tanstack query"
      disclaimer="In order to follow along the explanation, you are expected to go through the linked resource to understand it better."
    >
      <ISWithTanstackQueryExplanation />
    </FeatureExplanationTemplate>
  );
};

export default WithTanstackQueryExplanation;
