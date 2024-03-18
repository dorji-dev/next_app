import { NavigationConfig } from "@/lib/types/navigation";

export const navConfig: NavigationConfig = {
  desktopNav: {
    withMenu: [
      {
        title: "File conventions",
        subMenu: [
          {
            title: "default.js",
            href: "/",
            description:
              "Render fallback within parallel routes on hard reload.",
          },
          {
            title: "error.js",
            href: "/",
            description:
              "Handle runtime errors gracefully resulting from the route segment and its nested children.",
          },
          {
            title: "loading.js",
            href: "/",
            description:
              "Show an instant loading UI while your route segment is loading.",
          },
          {
            title: "template.js",
            href: "/",
            description:
              "Just like layout.js but unlike layout, it creates a new instance for each children on navigation.",
          },
          {
            title: "not-found.js",
            href: "/",
            description:
              "Render UI when notFound() is called withing a route segment.",
          },
          {
            title: "Metadata",
            href: "/",
            description:
              "Statically or dynamically generate your metadata files for each route segment.",
          },
        ],
      },
    ],
    withoutMenu: [
      {
        title: "Internationalization",
        href: "/",
        description:
          "Isolate errors to affected segments while keeping the rest of the application functional.",
      },
    ],
  },
  mobileNav: {
    withSubMenu: [
      {
        title: "File conventions",
        subMenu: [
          {
            title: "default.js",
            href: "/",
          },
          {
            title: "error.js",
            href: "/",
          },
          {
            title: "loading.js",
            href: "/",
          },
          {
            title: "template.js",
            href: "/",
          },
          {
            title: "not-found.js",
            href: "/",
          },
          {
            title: "Metadata",
            href: "/",
          },
        ],
      },
    ],
    withoutSubMenu: [
      {
        title: "Internationalization",
        href: "/",
      },
    ],
  },
};
