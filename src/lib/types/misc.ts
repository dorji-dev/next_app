import { ReactNode } from "react";
import {
  TAILWIND_2XL,
  TAILWIND_LARGE,
  TAILWIND_MEDIUM,
  TAILWIND_SMALL,
  TAILWIND_XL,
  TAILWIND_XSMALL,
} from "../constants/tailwind-device-width";

export interface ChildrenProp {
  children: ReactNode;
}

export type ClassNameProp = {
  className: string;
};

export interface InfiniteScrollingPageSearchParams {
  searchParams: {
    with_server_action: "true" | "false";
  };
}

export type TailwindBreakPoints =
  | typeof TAILWIND_XSMALL
  | typeof TAILWIND_SMALL
  | typeof TAILWIND_MEDIUM
  | typeof TAILWIND_LARGE
  | typeof TAILWIND_XL
  | typeof TAILWIND_2XL;
