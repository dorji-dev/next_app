"use client";

import { CiFolderOn } from "react-icons/ci";
import { BiLogoReact } from "react-icons/bi";
import { Tree } from "@/components/ui/file-tree";
import { FileTreeDataItem } from "@/lib/types/misc";

const FolderStructure = () => {
  return (
    <Tree
      data={folderStructureData}
      className="w-full h-[460px] border rounded-[4px]"
      initialSelectedItemId="app"
      expandAll={true}
      folderIcon={CiFolderOn}
      itemIcon={BiLogoReact}
    />
  );
};

export default FolderStructure;

const folderStructureData: FileTreeDataItem[] = [
  {
    id: "app",
    name: "app",
    children: [
      {
        id: "features",
        name: "features",
        children: [
          {
            id: "intercepting_routes",
            name: "intercepting-routes",
            children: [
              {
                id: "interception_modal",
                name: "@interceptionModal",
                children: [
                  {
                    id: "(...)product",
                    name: "(...)product",
                    children: [
                      {
                        id: "intercepted_product",
                        name: "productId",
                        children: [
                          {
                            id: "intercepted_product_page",
                            name: "page.tsx",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "default",
                    name: "default.tsx",
                  },
                ],
              },
              {
                id: "intercepting_routes_layout",
                name: "layout.tsx",
              },
              {
                id: "intercepting_routes_page",
                name: "page.tsx",
              },
            ],
          },
        ],
      },
      {
        id: "product",
        name: "product",
        children: [
          {
            id: "productId",
            name: "productId",
            children: [
              {
                id: "product_detail_page",
                name: "page.tsx",
              },
            ],
          },
        ],
      },
      {
        id: "layout",
        name: "layout.tsx",
      },
      {
        id: "page",
        name: "page.tsx",
      },
    ],
  },
];
