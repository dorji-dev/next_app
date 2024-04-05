import FeatureImplementationExplanationLayout from "@/components/layouts/feature-implementation-explanation";
import { PropsWithChildren, ReactNode } from "react";

interface InterceptingRouteLayoutProps extends PropsWithChildren {
  interceptionModal: ReactNode;
  explanation: ReactNode;
}

// Since the route interception is inside "intercepting-routes" segment,
// it must have a layout.{ts, tsx, js, jsx} file that receives the slot
// "interceptionModal" and renders it.
const InterceptingRouteLayout = ({
  children,
  interceptionModal,
  explanation,
}: InterceptingRouteLayoutProps) => {
  return (
    <>
      {interceptionModal}
      <FeatureImplementationExplanationLayout explanation={explanation}>
        {children}
      </FeatureImplementationExplanationLayout>
    </>
  );
};

export default InterceptingRouteLayout;
