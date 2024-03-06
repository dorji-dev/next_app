import { HeroFeatures } from "@/lib/types/hero-feature";
import { Route } from "next";

export const heroFeatures: HeroFeatures = [
  {
    title: "Pagination",
    content:
      "Implementation of pagination with route params and tanstack query.",
    subFeatures: [
      {
        hrefText: "With route params",
        href: "/",
      },
      {
        hrefText: "With tanstack query",
        href: "/",
      },
    ],
  },
  {
    title: "Infinite scrolling",
    content:
      "Implementation of infinite scrolling with server action and tanstack query.",
    subFeatures: [
      {
        href: "/features/infinite-scrolling/with-server-action" as Route,
        hrefText: "With server action",
      },
      {
        href: "/features/infinite-scrolling/with-tanstack-query" as Route,
        hrefText: "With tanstack query",
      },
    ],
  },
];
