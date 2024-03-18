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
        completed: true,
      },
    ],
  },
  {
    title: "Pagination",
    content:
      "Implementation of pagination with server side and client side data fetching with tanstack table.",
    subFeatures: [
      {
        hrefText: "Server side",
        href: "/features/pagination/server-side" as Route,
        completed: true,
      },
      {
        hrefText: "Client side",
        href: "/features/pagination/client-side" as Route,
        completed: false,
      },
    ],
  },
  {
    title: "Video streaming",
    content: "Implementation of video streaming.",
    subFeatures: [
      {
        hrefText: "Implementation",
        href: "/" as Route,
        completed: false,
      },
    ],
  },
  {
    title: "Music streaming",
    content: "Implementation of music streaming.",
    subFeatures: [
      {
        hrefText: "Implementation",
        href: "/" as Route,
        completed: false,
      },
    ],
  },
  {
    title: "State management",
    content: "State management with Zustand.",
    subFeatures: [
      {
        hrefText: "Implementation",
        href: "/" as Route,
        completed: false,
      },
    ],
  },
];
