import ISWithUseSWRImplementation from "@/components/features/infinite-scrolling/with-use-swr/implementation";
import FeatureImplementationTemplate from "@/components/templates/feature-implementation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Infinite scrolling with useSWR",
  description:
    "Implementation of infinite scrolling with useSWR and client side rendering",
  openGraph: {
    images: ["/api/og?Infinite Scrolling with useSWR"],
  },
};

const InfiniteScrollWithUseSWRPage = () => {
  return (
    <FeatureImplementationTemplate
      longFeatureTitle="Implementation of infinite scrolling with useSWR"
      apiLink="https://dummyjson.com/"
      resourceLink="https://github.com/dorji-dev/next_app/blob/main/src/app/features/(implementations)/infinite-scrolling/with-use-swr/(page)/page.tsx"
    >
      <ISWithUseSWRImplementation />
    </FeatureImplementationTemplate>
  );
};

export default InfiniteScrollWithUseSWRPage;
