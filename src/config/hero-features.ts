import { HeroFeatures } from "@/lib/types/hero-feature";
import { Route } from "next";

export const heroFeatures: HeroFeatures = [
  {
    title: "Infinite scrolling",
    content:
      "Implementation of infinite scrolling with server action and useSWR hook.",
    subFeatures: [
      {
        href: "/features/infinite-scrolling/with-server-action" as Route,
        hrefText: "With server action",
        completed: true,
      },
      {
        href: "/features/infinite-scrolling/with-use-swr" as Route,
        hrefText: "With useSWR",
        completed: false
      },
    ],
  },
  {
    title: "Pagination",
    content:
      "Implementation of pagination with route params and useSWR hook.",
    subFeatures: [
      {
        hrefText: "With route params",
        href: "/",
        completed: false
      },
      {
        hrefText: "With useSWR",
        href: "/",
        completed: false
      },
    ],
  },
];
