"use client";
import { InView } from "react-intersection-observer";
import React, { useRef, useState, useTransition } from "react";
import ContentLoader from "@/components/loaders/content-loader";

interface WSALoadMoreProps extends React.PropsWithChildren {
  getProductListNodes: (
    offset: number
  ) => Promise<readonly [React.JSX.Element, number | null] | null>;
  initialOffset: number | null;
}

const WSALoadMore = ({
  children,
  getProductListNodes,
  initialOffset,
}: WSALoadMoreProps) => {
  const [isPending, startTransition] = useTransition();
  const offsetRef = useRef<number | null>(initialOffset);
  const [productListNodes, setProductListNodes] = useState<React.JSX.Element[]>(
    []
  );

  // invoke server action when our target node is in view
  const updateProductListNodes = () => {
    if (!offsetRef.current) {
      return;
    }
    startTransition(async () => {
      const response = await getProductListNodes(offsetRef.current as number);
      if (response) {
        const [listNode, nextOffset] = response;
        offsetRef.current = nextOffset;
        setProductListNodes((previousNodeList) => [
          ...previousNodeList,
          listNode,
        ]);
      }
    });
  };

  return (
    <>
      <div className="grid grid-cols-1 xxs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[15px]">
        {children}
        {productListNodes}
      </div>
      <InView
        as="div"
        onChange={(inView) => inView && updateProductListNodes()}
      >
        <div></div>
      </InView>
      {isPending && (
        <div className="relative mt-[60px] mb-[20px]">
          <ContentLoader />
        </div>
      )}
    </>
  );
};

export default WSALoadMore;
