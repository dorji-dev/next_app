"use client";

import ParallelRouteError from "@/components/features/parallel-routing/parallel-route-error";
import { ErrorPageProps } from "@/lib/types/misc";

const ErrorHandler = ({ reset }: ErrorPageProps) => {
  return <ParallelRouteError reset={reset} />;
};

export default ErrorHandler;
