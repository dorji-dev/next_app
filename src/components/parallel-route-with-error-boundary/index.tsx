"use client";

import { ErrorBoundary } from "react-error-boundary";
import { PropsWithChildren } from "react";
import ParallelRouteError from "../features/parallel-routing/parallel-route-error";

const ParallelRouteWithErrorBoundary = ({ children }: PropsWithChildren) => {
  return (
    <ErrorBoundary
      fallbackRender={({ resetErrorBoundary, error }) => (
        <ParallelRouteError reset={resetErrorBoundary} error={error} />
      )}
    >
      {children}
    </ErrorBoundary>
  );
};

export default ParallelRouteWithErrorBoundary;
