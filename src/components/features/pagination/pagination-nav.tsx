"use client";

import { Button } from "@/components/ui/button";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  getActivePage,
  getMaximumPagePossible,
  getPagesToShow,
} from "@/lib/utils/pagination";
import clsx from "clsx";
import { parseAsString, useQueryState } from "nuqs";
import { useTransition } from "react";
import ProgressLoader from "@/components/loaders/progress-loader";
import { useTailwindMediaQuery } from "@/hooks/use-tailwind-media-query";

interface PaginationNavProps {
  pageSize: number;
  totalItems: number;
  shallow: boolean; // whether the query update should cause server request, shallow = true won't, and false will
}

const PaginationNav = ({
  pageSize,
  totalItems,
  shallow,
}: PaginationNavProps) => {
  const [isLoading, startTransition] = useTransition(); // lets us know if the server request is completed
  const [page, setPage] = useQueryState(
    "page",
    parseAsString.withOptions({
      startTransition: shallow ? undefined : startTransition,
      history: "push",
    })
  );
  const { mediaMatches: isAbove480, isChecking } = useTailwindMediaQuery("480");
  const activePage = getActivePage(page, pageSize, totalItems);
  const maximumSizePossible = getMaximumPagePossible(pageSize, totalItems);
  const totalPagesToShow = isAbove480 ? 5 : 3;
  const pagesToShow = getPagesToShow(
    maximumSizePossible,
    activePage,
    totalPagesToShow
  );

  // avoid content change
  if (isChecking) {
    return;
  }

  return (
    <>
      <div className="-mt-[18px] absolute top-0 left-0 right-0">
        {isLoading && <ProgressLoader />}
      </div>
      <Pagination className="text-[13px]">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              disabled={activePage === 1}
              className={clsx(
                activePage === 1
                  ? "text-foreground/45"
                  : "text-primary hover:text-primary",
                "gap-[4px]"
              )}
              onClick={() => setPage((activePage - 1).toString())}
            >
              <LuChevronLeft className="h-[16px] w-[16px]" />
              <span className="hidden xxs:block">Previous</span>
            </PaginationPrevious>
          </PaginationItem>
          {pagesToShow.map((value) => (
            <PaginationItem key={value}>
              <PaginationLink
                disabled={value > maximumSizePossible ? true : false}
                aria-current={activePage === value ? "page" : undefined}
                onClick={() => setPage(value.toString())}
                className={clsx(
                  value > maximumSizePossible && "text-foreground/45"
                )}
              >
                {value}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              disabled={activePage === maximumSizePossible}
              className={clsx(
                activePage === maximumSizePossible
                  ? "text-foreground/45"
                  : "text-primary hover:text-primary",
                "gap-[4px]"
              )}
              onClick={() => setPage((activePage + 1).toString())}
            >
              <span className="hidden xxs:block">Next</span>
              <LuChevronRight className="h-[16px] w-[16px]" />
            </PaginationNext>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};

export default PaginationNav;
