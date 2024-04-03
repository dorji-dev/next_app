import ClientSidePaginationExplanation from "@/components/features/pagination/client-side/explanation";
import FeatureExplanationTemplate from "@/components/templates/feature-explanation";

const ClientSidePaginationExplanationPage = () => {
  return (
    <FeatureExplanationTemplate disclaimer="In order to follow along the explanation, you are expected to go through the linked resource to understand it better.">
      <ClientSidePaginationExplanation />
    </FeatureExplanationTemplate>
  );
};

export default ClientSidePaginationExplanationPage;
