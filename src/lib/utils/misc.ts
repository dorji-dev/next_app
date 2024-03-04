/**
 * Convert string to title case
 * @param str
 * @returns
 */
export const toTitleCase = (str: string): string => {
  return str.replace(
    /\b\w+/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
  );
};
