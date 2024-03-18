import {
  TAILWIND_2XL,
  TAILWIND_LARGE,
  TAILWIND_MEDIUM,
  TAILWIND_SMALL,
  TAILWIND_XL,
  TAILWIND_XSMALL,
  TAILWIND_XXSMALL,
} from "../constants/tailwind-device-width";

export type FETCH_METHODS = "POST" | "GET" | "DELETE" | "PATCH" | "PUT";

export type ClassNameProp = {
  className?: string;
};

export type TailwindBreakPoints =
  | typeof TAILWIND_XXSMALL
  | typeof TAILWIND_XSMALL
  | typeof TAILWIND_SMALL
  | typeof TAILWIND_MEDIUM
  | typeof TAILWIND_LARGE
  | typeof TAILWIND_XL
  | typeof TAILWIND_2XL;

export type NextFetchTags = "";

export type FetchArguments<BodyType> = {
  url: string;
  method: FETCH_METHODS;
  body?: BodyType;
  headers?: { [index: string]: string };
  nextOptions?:
    | (Omit<NextFetchRequestConfig, "tags"> & {
        tags?: NextFetchTags[];
      })
    | undefined;
  cache?: RequestCache;
};

export type ErrorPageProps = {
  reset: () => void;
  error?: Error & { digest?: string };
};

export type LibrariesUsed = {
  name: string;
  link: string;
  description: string;
}[];
