import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

/**
 * Hook to update query params in next app router
 * @returns
 */
export const useUpdateQueryString = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const updateQueryString = useCallback(
    (queryObject: { query: Record<string, string> }) => {
      const params = new URLSearchParams(searchParams.toString());
      Object.keys(queryObject.query).forEach((queryKey) =>
        params.set(queryKey, queryObject.query[queryKey])
      );

      return pathname + "?" + params.toString();
    },
    [searchParams, pathname]
  );
  return { updateQueryString };
};
