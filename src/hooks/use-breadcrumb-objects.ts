import { BreadCrumbObj } from "@/lib/types/misc";
import { getProductDetailById } from "@/services/product-service";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * A hook to get an array of breadcrumb objects, both static and dynamic.
 * @returns
 */
export const useBreadCrumbObjects = () => {
  const [breadCrumbObjects, setBreadcrumbObjects] = useState<BreadCrumbObj[]>(
    []
  );
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  useEffect(() => {
    (async () => {
      let breadCrumbObjects: BreadCrumbObj[] = [];
      // at product page
      if (pathNames.includes("product") && pathNames.length === 2) {
        breadCrumbObjects = await getProductPageBreadcrumbObjects(
          pathNames,
          pathNames.at(-1) as string
        );
      } else {
        // static routes
        breadCrumbObjects = getStaticBreadcrumbObjects(pathNames);
      }
      setBreadcrumbObjects(breadCrumbObjects);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paths]);

  return {
    breadCrumbObjects,
  };
};

// Utility to get breadcrumb objects for all static routes
const getStaticBreadcrumbObjects = (pathNames: string[]): BreadCrumbObj[] => {
  return pathNames.reduce<BreadCrumbObj[]>(
    (accumulator, path, index) => {
      let href: string | undefined;
      let label = path.split("-").join(" ");

      if (index === pathNames.length - 1) {
        href = undefined;
      } else {
        href = `/${pathNames.slice(0, index + 1).join("/")}`;
      }

      return [
        ...accumulator,
        {
          label,
          href,
        },
      ];
    },
    [
      {
        label: "Home",
        href: "/",
      },
    ]
  );
};

const getProductPageBreadcrumbObjects = async (
  pathNames: string[],
  productId: string
): Promise<BreadCrumbObj[]> => {
  const product = await getProductDetailById(productId);
  return pathNames.reduce<BreadCrumbObj[]>(
    (accumulator, path, index) => {
      let href: string | undefined;
      let label: string;

      if (index === pathNames.length - 1) {
        label = product?.title ?? "No title";
        href = undefined;
      } else {
        label = path.split("-").join(" ");
        href = `/${pathNames.slice(0, index + 1).join("/")}`;
      }
      if (path === "product") {
        return accumulator;
      } else {
        return [
          ...accumulator,
          {
            label,
            href,
          },
        ];
      }
    },
    [
      {
        label: "Home",
        href: "/",
      },
    ]
  );
};
