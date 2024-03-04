import { PokemonListResponse } from "@/lib/types/pokemon";
import { toTitleCase } from "@/lib/utils/misc";
import Image from "next/image";

interface PokemonListProps {
  pokemons: PokemonListResponse["results"];
}

const PokemonList = ({ pokemons }: PokemonListProps) => {
  // this is the actual url of the pokemon image, may not find this in their documentation
  const getPokemonImageURL = (pokemonURL: string) =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
      pokemonURL.split("/")[6]
    }.png`;

  return pokemons.map((pokemon) => (
    <div
      key={pokemon.url}
      className="flex flex-col items-center border border-border rounded-[8px]"
    >
      <div className="relative h-[200px] w-[200px]  xs:h-[150px] xs:w-[150px] sm:h-[200px] sm:w-[200px] p-[10px]">
        <Image
          src={getPokemonImageURL(pokemon.url)}
          alt={pokemon.name}
          fill
          className="object-fit"
        />
      </div>
      <p className="p-[15px] text-foreground/50">{toTitleCase(pokemon.name)}</p>
    </div>
  ));
};

export default PokemonList;
