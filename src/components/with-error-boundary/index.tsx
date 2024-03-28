"use client";

import { ErrorBoundary } from "react-error-boundary";
import { PropsWithChildren, ReactNode } from "react";

interface WithErrorBoundaryProps extends PropsWithChildren {
  fallbackRender: (resetErrorBoundary: (...args: any[]) => void) => Promise<ReactNode>;
}

const WithErrorBoundary = ({
  children,
  fallbackRender,
}: WithErrorBoundaryProps) => {
  return (
    <ErrorBoundary
      fallbackRender={({ resetErrorBoundary }) =>
        fallbackRender(resetErrorBoundary)
      }
    >
      {children}
    </ErrorBoundary>
  );
};

export default WithErrorBoundary;
