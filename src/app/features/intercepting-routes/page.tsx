import FeatureImplementationTemplate from "@/components/templates/feature-implementation";

const InterceptingRoutesPage = () => {
  return (
    <FeatureImplementationTemplate
      apiLink="https://dummyjson.com/"
      resourceLink="https://github.com/dorji-dev/next_app/blob/main/src/app/features/pagination/server-side/page.tsx"
      longFeatureTitle="Route interception demo, also known as modal routing."
    >
      Intercepting routes
    </FeatureImplementationTemplate>
  );
};

export default InterceptingRoutesPage;
