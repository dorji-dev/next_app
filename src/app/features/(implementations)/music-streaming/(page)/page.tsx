import MusicStreamingImplementation from "@/components/features/music-streaming/implementation";
import ContentLoader from "@/components/loaders/content-loader";
import FeatureImplementationTemplate from "@/components/templates/feature-implementation";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Music streaming",
  description: "Music streaming with NextJs App Router",
};

const MusicStreamingImplementationPage = () => {
  return (
    <FeatureImplementationTemplate
      resourceLink="https://github.com/dorji-dev/next_app/blob/main/src/app/features/(implementations)/intercepting-routes/(page)/page.tsx"
      longFeatureTitle="Song streaming implementation"
    >
      <Suspense
        fallback={
          <div className="mt-[100px] mb-[20px]">
            <ContentLoader />
          </div>
        }
      >
        <MusicStreamingImplementation />
      </Suspense>
    </FeatureImplementationTemplate>
  );
};

export default MusicStreamingImplementationPage;
