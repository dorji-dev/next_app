export type NavigationConfig = {
  desktopNav: {
    withMenu: {
      title: string;
      subMenu: {
        title: string;
        href: string;
        description: string;
      }[];
    }[];
    withoutMenu: {
      title: string;
      href: string;
      description: string;
    }[];
  };
  mobileNav: {
    withSubMenu: {
      title: string;
      subMenu: {
        title: string;
        href: string;
      }[];
    }[];
    withoutSubMenu: {
      title: string;
      href: string;
    }[];
  }
};
