"use client";

import PageError from "@/components/shared/page-error";
import { ErrorPageProps } from "@/lib/types/misc";
import "../styles/globals.css";

export default function GlobalError({ reset }: ErrorPageProps) {
  return (
    <html>
      <body>
        <PageError reset={reset} />;
      </body>
    </html>
  );
}
