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

export const getMaximumPagePossible = (pageSize: number, totalItems: number) => {
  let maximumPagePossible = 1;
  while (maximumPagePossible * pageSize < totalItems) {
    maximumPagePossible++;
  }
  return maximumPagePossible;
};