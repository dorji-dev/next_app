"use client";

import { Input } from "@/components/ui/input";
import { useQueryState } from "nuqs";
import { useDebounce } from "@uidotdev/usehooks";
import { useEffect, useRef, useState } from "react";

const ParamUpdateInput = () => {
  const [initialSearchQuery, setSearchQuery] = useQueryState("search");
  const [searchQueryValue, setSearchQueryValue] = useState(initialSearchQuery);
  const debouncedQueryValue = useDebounce(searchQueryValue, 300);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(
    function updateSearchQuery() {
      setSearchQuery(debouncedQueryValue, {
        shallow: false,
      });
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
