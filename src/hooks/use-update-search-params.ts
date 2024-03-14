import { useRouter } from "@/lib/custom-router";
import { Route } from "next";
import { usePathname, useSearchParams } from "next/navigation";

type UpdateSearchParamsArgs = {
  query: { [index: string]: string | number | null };
  removeParams?: string[];
};

/**
 * A hook to update and delete URL search params in next app router
 * @returns
 */
export const useUpdateSearchParams = () => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(Array.from(searchParams.entries()));
  // You can use the import from 'next/navigation' here as well
  // Import from custom router enables Youtube and Google like page loading progress
  const router = useRouter();

  const updateSearchParams = (paramsObject: UpdateSearchParamsArgs) => {
    Object.entries(paramsObject.query).map(([key, value]) =>
      value !== null && params.set(key, value.toString())
    );
    paramsObject.removeParams?.map((key) => params.delete(key));
    const query = params.toString() ? `?${params.toString()}` : "";
    router.push((pathName + query) as Route);
  };

  return updateSearchParams;
};
