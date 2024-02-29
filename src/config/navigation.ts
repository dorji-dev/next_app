import { NavigationConfig } from "@/lib/types/navigation";

export const navConfig: NavigationConfig = {
  desktopNav: {
    withMenu: [
      {
        title: "Routing",
        subMenu: [
          {
            title: "Pagination",
            href: "/",
            description:
              "Offset API pagination is the most common form of API pagination, particularly if you’re using a SQL database. It’s also sometimes called page-based pagination.",
          },
          {
            title: "Infinite scrolling",
            href: "/",
            description: `Infinite scrolling is a technique, which reveals more content as a user scrolls down the website. It's definitely cool, but serves its purpose beneficially only on particular types of pages. `,
          },
        ],
      },
      {
        title: "Routing",
        subMenu: [
          {
            title: "Parallel routing",
            href: "/",
            description:
              "Offset API pagination is the most common form of API pagination, particularly if you’re using a SQL database. It’s also sometimes called page-based pagination.",
          },
          {
            title: "Route interception",
            href: "/",
            description: `Infinite scrolling is a technique, which reveals more content as a user scrolls down the website. It's definitely cool, but serves its purpose beneficially only on particular types of pages. `,
          },
        ],
      },
    ],
    withoutMenu: [
      {
        title: "Error boundary",
        href: "/",
        description:
          "Isolate errors to affected segments while keeping the rest of the application functional.",
      },
      {
        title: "404",
        href: "/",
        description:
          "Isolate errors to affected segments while keeping the rest of the application functional.",
      },
    ],
  },
  mobileNav: {
    withSubMenu: [
      {
        title: "Routing",
        subMenu: [
          {
            title: "Parallel routing1",
            href: "/",
          },
          {
            title: "Data fetching2",
            href: "/",
          },
        ],
      },
      {
        title: "Parallel",
        subMenu: [
          {
            title: "Parallel routing1",
            href: "/",
          },
          {
            title: "Data fetching2",
            href: "/",
          },
        ],
      },
      {
        title: "Routing1",
        subMenu: [
          {
            title: "Parallel routing2",
            href: "/",
          },
          {
            title: "Data fetching3",
            href: "/",
          },
        ],
      },
    ],
    withoutSubMenu: [
      {
        title: "Error boundary1",
        href: "/",
      },
      {
        title: "Error boundary2",
        href: "/",
      },
      {
        title: "Error boundary3",
        href: "/",
      },
      {
        title: "Error boundary4",
        href: "/",
      },
    ],
  },
};
