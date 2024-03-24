import { PropsWithChildren, ReactNode } from "react";

interface InterceptingRouteLayoutProps extends PropsWithChildren {
  interceptionModal: ReactNode;
}

// Since the route interception is inside "intercepting-routes" segment,
// it must have a layout.{ts, tsx, js, jsx} file that receives the slot
// "interceptionModal" and renders it. 
const InterceptingRouteLayout = ({
  children,
  interceptionModal,
}: InterceptingRouteLayoutProps) => {
  return (
    <>
      {children}
      {interceptionModal}
    </>
  );
};

export default InterceptingRouteLayout;
