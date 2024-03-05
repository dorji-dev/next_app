import { getPokemons } from "@/services/get-pokemon";
import InfiniteScrollWOSA from "./infinite-scroll-without-server-action";
import PokemonList from "@/components/shared/pokemon-list";

const PAGE_SIZE = 12;

const ISWOSAImplementation = async () => {
  const pokeMonsResponse = await getPokemons(undefined, PAGE_SIZE);
  return (
    <InfiniteScrollWOSA initialOffset={PAGE_SIZE}>
      <PokemonList pokemons={pokeMonsResponse.results} />
    </InfiniteScrollWOSA>
  );
};

export default ISWOSAImplementation;
