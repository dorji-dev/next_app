import { Route } from "next";

export type HeroFeatures = {
  title: string;
  content: string;
  href: Route<string>;
}[]