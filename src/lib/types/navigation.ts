import { Route } from "next";

export type NavigationConfig = {
  desktopNav: {
    withMenu: {
      title: string;
      subMenu: {
        title: string;
        href: Route<string>;
        description: string;
      }[];
    }[];
    withoutMenu: {
      title: string;
      href: Route<string>;
      description: string;
    }[];
  };
  mobileNav: {
    withSubMenu: {
      title: string;
      subMenu: {
        title: string;
        href: Route<string>;
      }[];
    }[];
    withoutSubMenu: {
      title: string;
      href: Route<string>;
    }[];
  };
};
