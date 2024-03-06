"use client";

import { Route } from "next";
import Link from "next/link";
import { PiArrowLineUpRightThin } from "react-icons/pi";
import { Button, buttonVariants } from "../ui/button";
import { IoMdArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";
import React from "react";
import clsx from "clsx";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

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
  const router = useRouter();

  return (
    <div>
      <div className="hidden md:flex md:justify-between">
        <Button
          onClick={router.back}
          size="icon"
          variant="secondary"
          aria-label="Back"
        >
          <IoMdArrowBack className="w-[20px] h-[24px]" />
        </Button>
        <div className="flex space-x-[20px]">
          {apiLink && (
            <Link
              href={apiLink as Route}
              target="_blank"
              className={clsx(
                buttonVariants({
                  variant: "secondary",
                })
              )}
            >
              Data API <PiArrowLineUpRightThin className="ml-[4px]" />
            </Link>
          )}
          {inspirationLink && (
            <Link
              href={inspirationLink as Route}
              target="_blank"
              className={clsx(
                buttonVariants({
                  variant: "secondary",
                })
              )}
            >
              Inspiration <PiArrowLineUpRightThin className="ml-[4px]" />
            </Link>
          )}
          <Link
            href={resourceLink as Route}
            target="_blank"
            className={clsx(
              buttonVariants({
                variant: "secondary",
              })
            )}
          >
            Github link <PiArrowLineUpRightThin className="ml-[4px]" />
          </Link>
        </div>
      </div>
      <h2 className="text-[24px] my-[18px] leading-[30px] font-[500]">
        {longFeatureTitle}
      </h2>
      <ScrollArea className="w-full md:hidden">
        <div className="flex space-x-[20px]">
          <Link
            href={resourceLink as Route}
            target="_blank"
            className={clsx(
              buttonVariants({
                variant: "secondary",
              }),
              "text-[12px]"
            )}
          >
            Github link <PiArrowLineUpRightThin className="ml-[4px]" />
          </Link>
          {inspirationLink && (
            <Link
              href={inspirationLink as Route}
              target="_blank"
              className={clsx(
                buttonVariants({
                  variant: "secondary",
                }),
                "text-[12px]"
              )}
            >
              Inspiration <PiArrowLineUpRightThin className="ml-[4px]" />
            </Link>
          )}
          {apiLink && (
            <Link
              href={apiLink as Route}
              target="_blank"
              className={clsx(
                buttonVariants({
                  variant: "secondary",
                }),
                "text-[12px]"
              )}
            >
              Data API <PiArrowLineUpRightThin className="ml-[4px]" />
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
