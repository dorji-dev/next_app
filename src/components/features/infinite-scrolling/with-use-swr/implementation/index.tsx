import { getPokemons } from "@/services/get-pokemon";
import WithUseSWRLoadMore from "./wswr-load-more";
import PokemonList from "@/components/shared/pokemon-list";

const PAGE_SIZE = 12;

const ISWithUseSWRImplementation = async () => {
  const pokeMonsResponse = await getPokemons(undefined, PAGE_SIZE);
  return (
    <WithUseSWRLoadMore initialOffset={PAGE_SIZE}>
      <PokemonList pokemons={pokeMonsResponse.results} />
    </WithUseSWRLoadMore>
  );
};

export default ISWithUseSWRImplementation;
