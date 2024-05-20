import MusicStreamingImplementation from "@/components/features/music-streaming/implementation";
import ContentLoader from "@/components/loaders/content-loader";
import FeatureImplementationTemplate from "@/components/templates/feature-implementation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Music streaming",
  description: "Music streaming with NextJs App Router",
};

const MusicStreamingImplementationPage = () => {
  return (
    <FeatureImplementationTemplate
      resourceLink="https://github.com/dorji-dev/next_app/blob/main/src/app/features/(implementations)/music-streaming/(page)/page.tsx"
      longFeatureTitle="Music streaming implementation"
      inspirationLink="https://github.com/rajput-hemant/infinitunes"
    >
      <div className="space-y-[30px]">
        <Alert>
          <AlertTitle className="text-[13px] tracking-wide">
            Disclaimer
          </AlertTitle>
          <AlertDescription className="text-muted-foreground">
            All songs and images featured on this page are the artistic property
            of their respective creators and is for the educational purposes
            only. And a shout-out to all the talented Bhutanese artists behind
            the songs and images featured here.
          </AlertDescription>
        </Alert>
        <Suspense
          fallback={
            <div className="mt-[100px] mb-[20px]">
              <ContentLoader />
            </div>
          }
        >
          <MusicStreamingImplementation />
        </Suspense>
      </div>
    </FeatureImplementationTemplate>
  );
};

export default MusicStreamingImplementationPage;
