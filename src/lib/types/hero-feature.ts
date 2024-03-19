import { Route } from "next";

export type HeroFeatures = {
  title: string;
  content: string;
  subFeatures: {
    hrefText: string;
    href: Route<string>;
    completed: boolean;
    description: string;
  }[];
}[];
