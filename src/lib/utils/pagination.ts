export const getActivePage = (
  page: string | null,
  pageSize: number,
  totalItems: number
) => {
  const toFixedValue = Number(Number(page).toFixed(0));
  const maximumSizePossible = getMaximumPagePossible(pageSize, totalItems);
  if (page && Number(page) && toFixedValue <= maximumSizePossible) {
    return toFixedValue <= 0 ? 1 : toFixedValue;
  } else {
    return 1;
  }
};

export const getMaximumPagePossible = (
  pageSize: number,
  totalItems: number
) => {
  let maximumPagePossible = 1;
  while (maximumPagePossible * pageSize < totalItems) {
    maximumPagePossible++;
  }
  return maximumPagePossible;
};

export const getTopFivePages = (
  maximumSizePossible: number,
  activePage: number,
  totalNumberToShow: number
) => {
  let topFivePageNumber: number[] = [];
  const partitionValue = Math.floor(totalNumberToShow / 2);
  // left half values based on partition value, always starts at 1
  const leastLeftPartitionValues = Array.from({ length: partitionValue }).map(
    (_, index) => index + 1
  );

  // right half values based on partition value, maximum size possible, and total number to show
  const greatestRightPartitionValues = Array.from({
    length: partitionValue,
  })
    .map(
      (_, index) =>
        (maximumSizePossible < totalNumberToShow
          ? totalNumberToShow
          : maximumSizePossible) - index
    )
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
