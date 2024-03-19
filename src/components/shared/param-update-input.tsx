"use client";

import { Input } from "@/components/ui/input";
import { parseAsString, useQueryState } from "nuqs";
import { useDebounce } from "@uidotdev/usehooks";
import { useEffect, useState, useTransition } from "react";
import { useRemoveSearchParams } from "@/hooks/use-remove-search-params";
import ActionLoader from "../loaders/action-loader";

interface ParamUpdateInputProps {
  shallow: boolean;
  paramKey?: string;
  resetParamKeys?: string[];
}

const ParamUpdateInput = ({
  shallow,
  paramKey = "search",
  resetParamKeys = [],
}: ParamUpdateInputProps) => {
  const [isLoading, startTransition] = useTransition(); // lets us know if the server request is completed
  const [initialSearchQuery, setSearchQuery] = useQueryState(
    paramKey,
    parseAsString.withOptions({
      startTransition: shallow ? undefined : startTransition,
    })
  );
  const removeParams = useRemoveSearchParams(resetParamKeys, true);
  const [searchQueryValue, setSearchQueryValue] = useState(initialSearchQuery);
  const debouncedQueryValue = useDebounce(searchQueryValue, 300);

  useEffect(
    function updateSearchQuery() {
      const updateQuery = async () => {
        debouncedQueryValue !== null &&
          setSearchQuery(debouncedQueryValue || null, { shallow }); // remove query key if the value === ''
        debouncedQueryValue !== null && (await removeParams());
      };
      updateQuery();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [debouncedQueryValue]
  );

  return (
    <div className="flex items-center relative">
      <Input
        onKeyDown={(e) => e.key === "Enter" && e.currentTarget.blur()}
        value={searchQueryValue ?? ""}
        onChange={(e) => setSearchQueryValue(e.target.value)}
        placeholder="Search products"
        className="pr-[40px]"
      />
      {isLoading && (
        <div className="absolute right-[12px]">
          <ActionLoader />
        </div>
      )}
    </div>
  );
};

export default ParamUpdateInput;
