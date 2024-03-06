import ISWithServerActionExplanation from "@/components/features/infinite-scrolling/with-server-action/explanation";
import FeatureExplanationTemplate from "@/components/templates/feature-explanation";
import { BASE_SEO_KEYWORDS } from "@/lib/constants/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Infinite scrolling with server actions",
  description:
    "Implementation of infinite scrolling with server component and server actions",
  keywords: [...BASE_SEO_KEYWORDS, "Infinite scrolling"],
};

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
