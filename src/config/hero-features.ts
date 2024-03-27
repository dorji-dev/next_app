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
        description: "Infinite scrolling with server action",
      },
      {
        href: "/features/infinite-scrolling/with-use-swr" as Route,
        hrefText: "With useSWR",
        completed: true,
        description:
          "Infinite scrolling with client side data fetching and useSWR",
      },
    ],
  },
  {
    title: "Pagination",
    content:
      "Implementation of pagination with server side and client side data fetching with tanstack table. Thanks to tanstack table, it also has features like column visibility toggle, row selection, client side filter out of the box.",
    subFeatures: [
      {
        hrefText: "Server side",
        href: "/features/pagination/server-side" as Route,
        completed: true,
        description: "Pagination with server side data fetching",
      },
      {
        hrefText: "Client side",
        href: "/features/pagination/client-side" as Route,
        completed: true,
        description: "Pagination with client side data fetching using useSWR",
      },
    ],
  },
  {
    title: "Intercepting routes",
    content:
      "Load another route from current layout or page without losing the context of the current page or layout. Also known as modal routing.",
    subFeatures: [
      {
        hrefText: "Implementation",
        href: "/features/intercepting-routes" as Route,
        completed: true,
        description: "Intercepting routes to create modal routing",
      },
    ],
  },
  {
    title: "Parallel routing",
    content:
      "Render more than one page in the same layout conditionally or simultaneously.",
    subFeatures: [
      {
        hrefText: "Implementation",
        href: "/features/parallel-routing" as Route,
        completed: false,
        description: "Parallel routing to render more than one page",
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
        description: "Video streaming",
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
        description: "Music streaming",
      },
    ],
  },
  {
    title: "State management",
    content:
      "Understand state management in app router which differs by quite a mile compared to pages router.",
    subFeatures: [
      {
        hrefText: "With Zustand",
        href: "/" as Route,
        completed: false,
        description: "State management with zustand",
      },
    ],
  },
];
