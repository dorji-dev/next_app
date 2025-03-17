import ParallelRoutingImplementation from "@/components/features/parallel-routing/implementation";
import FeatureImplementationTemplate from "@/components/templates/feature-implementation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NextJs parallel routing",
  description: "Demonstration of parallel routing concept in NextJs app router",
  openGraph: {
    images: ["/api/og?title=Parallel Routing"],
  },
};

const ParallelRoutingImplementationPage = () => {
  return (
    <FeatureImplementationTemplate
      resourceLink="https://github.com/dorji-dev/next_app/blob/main/src/app/features/(implementations)/parallel-routing/page.tsx"
      longFeatureTitle="Parallel routing concept demo, rendering multiple pages in one page simultaneously or conditionally"
    >
      <ParallelRoutingImplementation />
    </FeatureImplementationTemplate>
  );
};

export default ParallelRoutingImplementationPage;
