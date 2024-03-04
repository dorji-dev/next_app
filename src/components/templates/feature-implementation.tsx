"use client";

import { Route } from "next";
import Link from "next/link";
import { PiArrowLineUpRightThin } from "react-icons/pi";
import { Button } from "../ui/button";
import { IoMdArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";
import React from "react";

interface FeatureImplementationTemplateProps extends React.PropsWithChildren {
  longFeatureTitle: string;
  resourceLink: string;
}

const FeatureImplementationTemplate = ({
  longFeatureTitle,
  children,
  resourceLink,
}: FeatureImplementationTemplateProps) => {
  const router = useRouter();

  return (
    <div>
      <div className="hidden md:flex md:justify-between">
        <Button
          onClick={router.back}
          size="icon"
          variant="outline"
          aria-label="Back"
        >
          <IoMdArrowBack className="w-[20px] h-[24px]" />
        </Button>
        <Link
          href={resourceLink as Route}
          target="_blank"
          className="flex items-center bg-foreground/5 w-max py-[8px] font-medium px-[16px] rounded-[4px] hover:bg-accent"
        >
          Github link <PiArrowLineUpRightThin className="ml-[4px]" />
        </Link>
      </div>
      <h2 className="text-[24px] my-[18px] leading-[30px] font-[500]">
        {longFeatureTitle}
      </h2>
      <Link
        href={resourceLink as Route}
        target="_blank"
        className="flex items-center md:hidden text-[12px] bg-foreground/5 font-medium w-max py-[4px] px-[12px] rounded-[4px]"
      >
        Github link <PiArrowLineUpRightThin className="ml-[4px]" />
      </Link>
      <div className="mt-[20px]">{children}</div>
    </div>
  );
};

export default FeatureImplementationTemplate;
