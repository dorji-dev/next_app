import ISWithUseSWRExplanation from "@/components/features/infinite-scrolling/with-use-swr/explanation";
import FeatureExplanationTemplate from "@/components/templates/feature-explanation";

const ISWithUseSWRExplanationPage = () => {
  return (
    <FeatureExplanationTemplate disclaimer="In order to follow along the explanation, you are expected to go through the linked resource to understand it better.">
      <ISWithUseSWRExplanation />
    </FeatureExplanationTemplate>
  );
};

export default ISWithUseSWRExplanationPage;
