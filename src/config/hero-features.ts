import { HeroFeatures } from "@/lib/types/hero-feature";
import { Route } from "next";

export const heroFeatures: HeroFeatures = [
  {
    title: "Pagination",
    content: "Pagination with server component",
    href: "/features/pagination" as Route,
  },
  {
    title: "Infinite scrolling",
    content: "Infinite scrolling with server component",
    href: "/features/infinite-scrolling" as Route,
  },
];
