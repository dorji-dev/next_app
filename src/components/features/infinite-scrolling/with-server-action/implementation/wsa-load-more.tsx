"use client";
import { InView } from "react-intersection-observer";
import React, { useRef, useState, useTransition } from "react";
import Loader from "@/components/loader";

interface WSALoadMoreProps extends React.PropsWithChildren {
  getPokemonListNodes: (
    offset: number
  ) => Promise<readonly [React.JSX.Element, number | null] | null>;
  initialOffset: number;
}

const WSALoadMore = ({
  children,
  getPokemonListNodes,
  initialOffset,
}: WSALoadMoreProps) => {
  const [isPending, startTransition] = useTransition();
  const offsetRef = useRef<number | null>(initialOffset);
  const [pokemonListNodes, setPokemonListNodes] = useState<React.JSX.Element[]>(
    []
  );

  // invoke server action when our target node is in view
  const updatePokemonListNodes = () => {
    startTransition(async () => {
      const response =
        offsetRef.current && (await getPokemonListNodes(offsetRef.current));
      if (response) {
        const [listNode, nextOffset] = response;
        offsetRef.current = nextOffset;
        setPokemonListNodes((previousNodeList) => [
          ...previousNodeList,
          listNode,
        ]);
      }
    });
  };

  return (
    <div>
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-[15px]">
        {children}
        {pokemonListNodes}
      </div>
      <InView
        as="div"
        onChange={(inView) => inView && updatePokemonListNodes()}
      >
        <div></div>
      </InView>
      {isPending && (
        <div className="relative mt-[60px]">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default WSALoadMore;
