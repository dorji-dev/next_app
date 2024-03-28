"use client";

import { ErrorBoundary } from "react-error-boundary";
import { PropsWithChildren } from "react";
import ParallelRouteError from "../features/parallel-routing/parallel-route-error";

const ParallelRouteWithErrorBoundary = ({ children }: PropsWithChildren) => {
  return (
    <ErrorBoundary
      fallbackRender={({ resetErrorBoundary }) => (
        <ParallelRouteError reset={resetErrorBoundary} />
      )}
    >
      {children}
    </ErrorBoundary>
  );
};

export default ParallelRouteWithErrorBoundary;
