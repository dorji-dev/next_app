"use client";

import PageError from "@/components/shared/page-error";
import { ErrorPageProps } from "@/lib/types/misc";

const ErrorHandler = ({ reset }: ErrorPageProps) => {
  return (
    <html>
      <body>
        <PageError reset={reset} />
      </body>
    </html>
  );
};

export default ErrorHandler;
