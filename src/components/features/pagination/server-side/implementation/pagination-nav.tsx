"use client";

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

interface PaginationNavProps {
  pageSize: number;
  totalItems: number;
}

const PaginationNav = ({ pageSize, totalItems }: PaginationNavProps) => {
  const [page, _] = useQueryState("page");
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
          <PaginationPrevious
            aria-disabled={activePage === 1}
            href={`/features/pagination/server-side?page=${activePage - 1}`}
            className={clsx(
              activePage === 1 && "pointer-events-none text-foreground/45"
            )}
          />
        </PaginationItem>
        {getTopFivePages().map((value) => (
          <PaginationItem key={value}>
            <PaginationLink
              href={`/features/pagination/server-side?page=${value}`}
              isActive={activePage === value}
            >
              {value}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            aria-disabled={activePage === maximumSizePossible}
            href={`/features/pagination/server-side?page=${activePage + 1}`}
            className={clsx(
              activePage === maximumSizePossible &&
                "pointer-events-none text-foreground/45"
            )}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationNav;
