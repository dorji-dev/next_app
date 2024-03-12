import ISWithUseSWRExplanation from "@/components/features/infinite-scrolling/with-use-swr/explanation";
import FeatureExplanationTemplate from "@/components/templates/feature-explanation";
import { BASE_SEO_KEYWORDS } from "@/lib/constants/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Infinite scrolling with swr",
  description:
    "Implementation of infinite scrolling with swr client side data fetching library",
  keywords: [...BASE_SEO_KEYWORDS, "Infinite scrolling", "useSWR", "SWR"],
};

const ISWithUseSWRExplanationPage = () => {
  return (
    <FeatureExplanationTemplate disclaimer="In order to follow along the explanation, you are expected to go through the linked resource to understand it better.">
      <ISWithUseSWRExplanation />
    </FeatureExplanationTemplate>
  );
};

export default ISWithUseSWRExplanationPage;
