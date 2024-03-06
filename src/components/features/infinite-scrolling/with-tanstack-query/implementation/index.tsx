import { getPokemons } from "@/services/get-pokemon";
import WTQLoadMore from "./wtq-load-more";
import PokemonList from "@/components/shared/pokemon-list";

const PAGE_SIZE = 12;

const ISWithTanstackQuery = async () => {
  const pokeMonsResponse = await getPokemons(undefined, PAGE_SIZE);
  return (
    <WTQLoadMore initialOffset={PAGE_SIZE}>
      <PokemonList pokemons={pokeMonsResponse.results} />
    </WTQLoadMore>
  );
};

export default ISWithTanstackQuery;
