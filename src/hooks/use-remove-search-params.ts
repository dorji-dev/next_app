import { useQueryStates } from "nuqs";

/**
 * Hook to remove multiple URL search params. Useful if you want to reset or remove 
 * other query key-value based on another query.
 * @param keysToDelete Just an array of param keys that needs to be removed
 * @param shallow Whether the deletion should cause server request.
 * `true` won't cause server request while `false` will.
 * @returns
 */
export const useRemoveSearchParams = (
  keysToDelete: string[],
  shallow: boolean
) => {
  const nullableParamKeys = keysToDelete.reduce<{
    [index: string]: { parse: (value: string) => string | null };
  }>((accumulator, queryKey) => {
    accumulator[queryKey] = { parse: () => null };
    return accumulator;
  }, {});
  const [_, resetQueryKeys] = useQueryStates(
    { ...nullableParamKeys },
    {
      shallow,
    }
  );

  /**
   * Calling this function will remove all the query passed in the hook initialization.
   */
  const removeSearchParams = async () => {
    await resetQueryKeys(
      keysToDelete.reduce<{ [index: string]: null }>((accumulator, key) => {
        accumulator[key] = null;
        return accumulator;
      }, {})
    );
  };
  return removeSearchParams;
};
