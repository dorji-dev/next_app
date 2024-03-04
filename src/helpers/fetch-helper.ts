import { FetchArguments } from "@/lib/types/misc";

/**
 * Wrapper for `fetch` that handles promise rejection based on response status.
 * @param fetchArgs
 * @returns
 */
export const fetchHelper = async <ResponseType, BodyType = {}>(
  fetchArgs: FetchArguments<BodyType>
): Promise<ResponseType> => {
  const response = await fetch(fetchArgs.url, {
    method: fetchArgs.method,
    body: JSON.stringify(fetchArgs.body),
    headers: fetchArgs.headers,
    next: fetchArgs.nextOptions,
    cache: fetchArgs.cache,
  });

  if (response.status === 200) {
    return response.json();
  } else {
    let errorObject;
    try {
      // if errored response is JSON parsable, return the object as it is
      errorObject = await response.json();
    } catch (_) {
      // else return null
      errorObject = null;
    }
    return Promise.reject(errorObject);
  }
};
