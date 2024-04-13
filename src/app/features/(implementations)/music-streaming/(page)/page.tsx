import MusicStreamingImplementation from "@/components/features/music-streaming/implementation";
import ContentLoader from "@/components/loaders/content-loader";
import FeatureImplementationTemplate from "@/components/templates/feature-implementation";
import { Suspense } from "react";

const MusicStreamingImplementationPage = () => {
  return (
    <FeatureImplementationTemplate
      resourceLink="https://github.com/dorji-dev/next_app/blob/main/src/app/features/(implementations)/intercepting-routes/(page)/page.tsx"
      longFeatureTitle="Music streaming implementation"
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
