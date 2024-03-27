"use client";

import { ErrorBoundary } from "react-error-boundary";
import ParallelRoutePageContent from "@/components/features/parallel-routing/parallel-route-content";
import ParallelRouteError from "@/components/features/parallel-routing/parallel-route-error";

const PageContent = () => {
  // Currently there seems to be a bug for error.tsx files in parallel routes
  // especially the first parallel route in the folder structure so using
  // custom error boundary for now.
  return (
    <ErrorBoundary
      fallbackRender={({ resetErrorBoundary }) => (
        <ParallelRouteError reset={resetErrorBoundary} />
      )}
    >
      <ParallelRoutePageContent pageName="One" timeToLoad={2} />
    </ErrorBoundary>
  );
};

export default PageContent;
