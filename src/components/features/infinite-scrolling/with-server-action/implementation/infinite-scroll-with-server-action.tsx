"use client";
import { InView } from "react-intersection-observer";
import { PokemonListResponse } from "@/lib/types/pokemon";
import React, { useRef, useState, useTransition } from "react";
import Loader from "@/components/loader";

interface InfiniteScrollWSAProps extends React.PropsWithChildren {
  pokemonsResponse: PokemonListResponse;
  getPokemonListNodes: (
    offset: number
  ) => Promise<readonly [React.JSX.Element, number | null] | null>;
  initialOffset: number;
}

const InfiniteScrollWSA = ({
  children,
  getPokemonListNodes,
  initialOffset,
}: InfiniteScrollWSAProps) => {
  const [isPending, startTransition] = useTransition();
  const offsetRef = useRef<number | null>(initialOffset);
  const [pokemonListNodes, setPokemonListNodes] = useState<React.JSX.Element[]>(
    []
  );

  // invoke server action when our target node is in view
  const updatePokemonListNodes = async () => {
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

export default InfiniteScrollWSA;