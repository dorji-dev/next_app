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

/**
 * Formats the given duration in seconds to the given format
 * @param seconds The duration in seconds
 * @param format The format to format the duration in `hh:mm:ss` or `mm:ss`
 * @returns The formatted duration
 */
export function formatDuration(seconds: number, format: "hh:mm:ss" | "mm:ss") {
  const date = new Date(seconds * 1000);

  return format === "hh:mm:ss"
    ? date.toISOString().slice(11, 19)
    : date.toISOString().slice(14, 19);
}
