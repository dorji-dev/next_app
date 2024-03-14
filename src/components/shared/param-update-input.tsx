"use client";

import { Input } from "@/components/ui/input";
import { useQueryState } from "nuqs";
import { useDebounce } from "@uidotdev/usehooks";
import { useEffect, useRef, useState } from "react";
import { useUpdateSearchParams } from "@/hooks/use-update-search-params";

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
  const [initialSearchQuery, setSearchQuery] = useQueryState(paramKey);
  const updateSearchParams = useUpdateSearchParams();
  const [searchQueryValue, setSearchQueryValue] = useState(initialSearchQuery);
  const debouncedQueryValue = useDebounce(searchQueryValue, 300);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(
    function updateSearchQuery() {
      if (shallow) {
        setSearchQuery(debouncedQueryValue);
      } else {
        // to get page loading status since it will cause server request
        updateSearchParams({
          query: {
            [paramKey]: searchQueryValue !== null ? debouncedQueryValue : null,
          },
          removeParams: resetParamKeys,
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [debouncedQueryValue]
  );

  useEffect(function focusInputOnMount() {
    inputRef.current?.focus();
  }, []);

  return (
    <Input
      onKeyDown={(e) => e.key === "Enter" && e.currentTarget.blur()}
      ref={inputRef}
      value={searchQueryValue ?? ""}
      onChange={(e) => setSearchQueryValue(e.target.value)}
      placeholder="Search products"
    />
  );
};

export default ParamUpdateInput;
