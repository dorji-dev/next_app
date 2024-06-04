"use client";

import ParallelRouteError from "@/components/features/parallel-routing/parallel-route-error";
import { ErrorPageProps } from "@/lib/types/misc";

const ErrorHandler = ({ reset, error }: ErrorPageProps) => {
  return <ParallelRouteError reset={reset} error={error} />;
};

export default ErrorHandler;