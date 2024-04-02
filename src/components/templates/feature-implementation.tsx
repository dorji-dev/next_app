import { Route } from "next";
import Link from "next/link";
import React from "react";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import AppBreadCrumb from "../app-breadcrumb";

interface FeatureImplementationTemplateProps extends React.PropsWithChildren {
  longFeatureTitle: string;
  resourceLink: string;
  inspirationLink?: string;
  apiLink?: string;
}

const FeatureImplementationTemplate = ({
  longFeatureTitle,
  children,
  resourceLink,
  inspirationLink,
  apiLink,
}: FeatureImplementationTemplateProps) => {
  return (
    <div>
      {/* Desktop page header */}
      <div className="hidden md:flex md:justify-between items-center">
        <AppBreadCrumb />
        <div className="flex space-x-[20px]">
          {apiLink && (
            <Link
              href={apiLink as Route}
              target="_blank"
              className="flex items-center text-[13px] text-primary underline decoration-border underline-offset-[4px]"
            >
              Data API
            </Link>
          )}
          {inspirationLink && (
            <Link
              href={inspirationLink as Route}
              target="_blank"
              className="flex items-center text-[13px] text-primary underline decoration-border underline-offset-[4px]"
            >
              Inspiration
            </Link>
          )}
          <Link
            href={resourceLink as Route}
            target="_blank"
            className="flex items-center text-[13px] text-primary underline decoration-border underline-offset-[4px]"
          >
            Github link
          </Link>
        </div>
      </div>
      <h5 className="text-[24px] my-[18px] font-[500]">{longFeatureTitle}</h5>
      {/* Mobile page header */}
      <ScrollArea className="w-full md:hidden">
        <div className="flex space-x-[20px]">
          <Link
            href={resourceLink as Route}
            target="_blank"
            className="flex items-center text-[13px] text-primary underline decoration-border underline-offset-[4px]"
          >
            Github link
          </Link>
          {inspirationLink && (
            <Link
              href={inspirationLink as Route}
              target="_blank"
              className="flex items-center text-[13px] text-primary underline decoration-border underline-offset-[4px]"
            >
              Inspiration
            </Link>
          )}
          {apiLink && (
            <Link
              href={apiLink as Route}
              target="_blank"
              className="flex items-center text-[13px] text-primary underline decoration-border underline-offset-[4px]"
            >
              Data API
            </Link>
          )}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <div className="mt-[20px]">{children}</div>
    </div>
  );
};

export default FeatureImplementationTemplate;
