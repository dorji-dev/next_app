import { Route } from "next";
import { UrlObject } from "url";

export type HeroFeatures = {
  title: string;
  content: string;
  href: Route<string> | UrlObject;
}[]