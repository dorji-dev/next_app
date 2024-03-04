import { getPokemons } from "@/services/get-pokemon";
import PokemonInfiniteScroll from "./pokemon-infinite-scroll";
import PokemonList from "./pokemon-list";

const PAGE_SIZE = 12;

const ISWSAImplementation = async () => {
  const pokeMonsResponse = await getPokemons(undefined, PAGE_SIZE);

  const getPokemonListNodes = async (offset: number) => {
    "use server";
    try {
      const response = await getPokemons(offset, PAGE_SIZE);
      const nextOffset = response.next ? offset + PAGE_SIZE : null;
      return [
        <PokemonList pokemons={response.results} key={offset} />,
        nextOffset,
      ] as const;
    } catch (_) {
      return null;
    }
  };

  return (
    <PokemonInfiniteScroll
      pokemonsResponse={pokeMonsResponse}
      getPokemonListNodes={getPokemonListNodes}
      initialOffset={PAGE_SIZE}
    >
      <PokemonList pokemons={pokeMonsResponse.results} />
    </PokemonInfiniteScroll>
  );
};

export default ISWSAImplementation;
