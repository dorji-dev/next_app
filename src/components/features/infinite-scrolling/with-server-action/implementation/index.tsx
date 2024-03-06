import { getPokemons } from "@/services/get-pokemon";
import WSALoadMore from "./wsa-load-more";
import PokemonList from "@/components/shared/pokemon-list";

const PAGE_SIZE = 12; 

const ISWithServerActionImplementation = async () => {
  const pokeMonsResponse = await getPokemons(undefined, PAGE_SIZE);

  // fetch pokemon and return Pokemon list and next offset
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
    <WSALoadMore
      getPokemonListNodes={getPokemonListNodes}
      initialOffset={PAGE_SIZE}
    >
      <PokemonList pokemons={pokeMonsResponse.results} />
    </WSALoadMore>
  );
};

export default ISWithServerActionImplementation;
