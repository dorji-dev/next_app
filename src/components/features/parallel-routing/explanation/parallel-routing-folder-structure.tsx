"use client";

import { CiFolderOn } from "react-icons/ci";
import { BiLogoReact } from "react-icons/bi";
import { Tree } from "@/components/ui/file-tree";
import { FileTreeDataItem } from "@/lib/types/misc";

const ParallelRoutingFolderStructure = () => {
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

export default ParallelRoutingFolderStructure;

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
            id: "implementations",
            name: "(implementations)",
            children: [
              {
                id: "parallel-routing",
                name: "parallel-routing",
                children: [
                  {
                    id: "first",
                    name: "@firstPage",
                    children: [
                      {
                        id: "first-page",
                        name: "page.tsx",
                      },
                    ],
                  },
                  {
                    id: "fourth",
                    name: "@fourthPage",
                    children: [
                      {
                        id: "error",
                        name: "error.tsx",
                      },
                      {
                        id: "loading",
                        name: "loading.tsx",
                      },
                      {
                        id: "page",
                        name: "page.tsx",
                      },
                    ],
                  },
                  {
                    id: "second",
                    name: "@secondPage",
                    children: [
                      {
                        id: "error",
                        name: "error.tsx",
                      },
                      {
                        id: "loading",
                        name: "loading.tsx",
                      },
                      {
                        id: "page",
                        name: "page.tsx",
                      },
                    ],
                  },
                  {
                    id: "third",
                    name: "@thirdPage",
                    children: [
                      {
                        id: "error",
                        name: "error.tsx",
                      },
                      {
                        id: "loading",
                        name: "loading.tsx",
                      },
                      {
                        id: "page",
                        name: "page.tsx",
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
