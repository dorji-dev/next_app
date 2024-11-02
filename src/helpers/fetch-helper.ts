import { FetchArguments } from "@/lib/types/misc";

/**
 * Wrapper for `fetch` that handles promise rejection based on response status.
 * @param fetchArgs
 * @returns
 */
export const fetchHelper = async <ResponseType, BodyType = {}>(
  fetchArgs: FetchArguments<BodyType>
): Promise<ResponseType> => {
  try {
    const response = await fetch(fetchArgs.url, {
      method: fetchArgs.method,
      body: JSON.stringify(fetchArgs.body),
      headers: fetchArgs.headers,
      next: fetchArgs.nextOptions,
      cache: fetchArgs.cache,
    });

    if (!response.ok) {
      let errorDetails;
      try {
        errorDetails = await response.json();
      } catch (_) {
        errorDetails = {
          status: response.status,
          statusText: response.statusText,
          message: "An unexpected error occurred",
        };
      }

      const error = new Error("Fetch Error");
      error.name = "FetchError";
      (error as any).details = errorDetails;
      throw error;
    }

    return response.json();
  } catch (error) {
    // Handle network errors, CORS issues, etc.
    console.error("Fetch error:", error);
    throw error;
  }
};
