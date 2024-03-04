import { fetchHelper } from "@/helpers/fetch-helper";
import { PokemonListResponse } from "@/lib/types/pokemon";

/**
 * Fetch a list of pokemons
 * @param offset
 * @param pageSize
 * @returns
 */
export const getPokemons = async (offset: number = 0, pageSize: number) =>
  await fetchHelper<PokemonListResponse>({
    url: `https://pokeapi.co/api/v2/pokemon-species?limit=${pageSize}&offset=${offset}`,
    method: "GET",
  });
