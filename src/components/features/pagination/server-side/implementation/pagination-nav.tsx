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
import { getActivePage, getMaximumPagePossible } from "@/lib/utils/pagination";
import clsx from "clsx";
import { useQueryState } from "nuqs";
import { useUpdateSearchParams } from "@/hooks/use-update-search-params";

interface PaginationNavProps {
  pageSize: number;
  totalItems: number;
}

const PaginationNav = ({ pageSize, totalItems }: PaginationNavProps) => {
  const [page, _] = useQueryState("page");
  const updateSearchParams = useUpdateSearchParams();
  const activePage = getActivePage(page, pageSize, totalItems);
  const maximumSizePossible = getMaximumPagePossible(pageSize, totalItems);

  const getTopFivePages = () => {
    const totalNumberToShow = 5;
    let topFivePageNumber: number[] = [];
    const partitionValue = Math.floor(totalNumberToShow / 2);
    const leastLeftPartitionValues = Array.from({ length: partitionValue }).map(
      (_, index) => index + 1
    );

    const greatestRightPartitionValues = Array.from({
      length: partitionValue,
    })
      .map((_, index) => maximumSizePossible - index)
      .reverse();

    if (leastLeftPartitionValues.includes(activePage)) {
      topFivePageNumber = [...leastLeftPartitionValues];
      Array.from({
        length: totalNumberToShow - leastLeftPartitionValues.length,
      }).forEach((_, index) =>
        topFivePageNumber.push(
          leastLeftPartitionValues[leastLeftPartitionValues.length - 1] +
            (index + 1)
        )
      );
    } else if (greatestRightPartitionValues.includes(activePage)) {
      const leftPageNumbers: number[] = [];
      Array.from({
        length: totalNumberToShow - greatestRightPartitionValues.length,
      }).forEach((_, index) =>
        leftPageNumbers.push(greatestRightPartitionValues[0] - (index + 1))
      );
      topFivePageNumber = [
        ...leftPageNumbers.reverse(),
        ...greatestRightPartitionValues,
      ];
    } else {
      const leftPageNumbers: number[] = [];
      const rightPageNumbers: number[] = [];
      Array.from({ length: partitionValue }).forEach((_, index) =>
        leftPageNumbers.push(activePage - (index + 1))
      );
      Array.from({ length: partitionValue }).forEach((_, index) =>
        rightPageNumbers.push(activePage + (index + 1))
      );
      topFivePageNumber = [
        ...leftPageNumbers.reverse(),
        activePage,
        ...rightPageNumbers,
      ];
    }
    return topFivePageNumber;
  };

  return (
    <Pagination className="text-[13px]">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious asChild>
            <Button
              variant="ghost"
              disabled={activePage === 1}
              className={clsx(
                activePage === 1
                  ? "text-foreground/45"
                  : "text-primary hover:text-primary",
                "gap-[4px]"
              )}
              onClick={() =>
                updateSearchParams({ query: { page: activePage - 1 } })
              }
            >
              <LuChevronLeft className="h-[16px] w-[16px]" />
              <span>Previous</span>
            </Button>
          </PaginationPrevious>
        </PaginationItem>
        {getTopFivePages().map((value) => (
          <PaginationItem key={value}>
            <PaginationLink asChild>
              <Button
                disabled={value > maximumSizePossible ? true : false}
                aria-current={activePage === value ? "page" : undefined}
                onClick={() => updateSearchParams({ query: { page: value } })}
                variant={activePage === value ? "outline" : "ghost"}
                size="icon"
                className={clsx(
                  value > maximumSizePossible && "text-foreground/45"
                )}
              >
                {value}
              </Button>
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext asChild>
            <Button
              variant="ghost"
              disabled={activePage === maximumSizePossible}
              className={clsx(
                activePage === maximumSizePossible
                  ? "text-foreground/45"
                  : "text-primary hover:text-primary",
                "gap-[4px]"
              )}
              onClick={() =>
                updateSearchParams({
                  query: {
                    page: activePage + 1,
                  },
                })
              }
            >
              <span>Next</span>
              <LuChevronRight className="h-[16px] w-[16px]" />
            </Button>
          </PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationNav;
