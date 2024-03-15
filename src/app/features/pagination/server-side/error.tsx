"use client";

import PageError from "@/components/shared/page-error";
import { ErrorPageProps } from "@/lib/types/misc";

const ErrorHandler = ({ reset }: ErrorPageProps) => {
  return <PageError reset={reset} />;
};

export default ErrorHandler;
