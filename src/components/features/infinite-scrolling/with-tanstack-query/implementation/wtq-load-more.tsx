"use client";

import Loader from "@/components/loader";
import PokemonList from "@/components/shared/pokemon-list";
import { PokemonListResponse } from "@/lib/types/pokemon";
import { getPokemons } from "@/services/get-pokemon";
import { useRef, useState, useTransition } from "react";
import { InView } from "react-intersection-observer";

interface WTQLoadMoreProps extends React.PropsWithChildren {
  initialOffset: number;
}

const WTQLoadMore = ({
  children,
  initialOffset,
}: WTQLoadMoreProps) => {
  const [pokemons, setPokemons] = useState<PokemonListResponse["results"]>([]);
  const offsetRef = useRef<number | null>(initialOffset);
  const [isPending, startTransition] = useTransition();

  // fetch pokemon and update state whenever we reach the end of pokemon list
  const updatePokemonState = () => {
    startTransition(async () => {
      const response =
        offsetRef.current &&
        (await getPokemons(offsetRef.current, initialOffset));
      if (response && offsetRef.current) {
        setPokemons((prev) => [...prev, ...response.results]);
        offsetRef.current += initialOffset;
      }
    });
  };

  return (
    <div>
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-[15px]">
        {children}
        <PokemonList pokemons={pokemons} />
      </div>
      <InView as="div" onChange={(inView) => inView && updatePokemonState()}>
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

export default WTQLoadMore;
