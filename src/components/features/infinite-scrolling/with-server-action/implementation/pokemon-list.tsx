import { PokemonListResponse } from "@/lib/types/pokemon";
import { toTitleCase } from "@/lib/utils/misc";
import { rgbDataURL } from "@/lib/utils/rgb-data-url";
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
      <div className="relative h-[0px] w-full pb-[100%]">
        <Image
          src={getPokemonImageURL(pokemon.url)}
          alt={pokemon.name}
          placeholder="blur"
          blurDataURL={rgbDataURL(229, 228, 226)}
          style={{
            borderTopLeftRadius: 7,
            borderTopRightRadius: 7,
          }}
          fill
          className="object-fit p-[20px]"
        />
      </div>
      <p className="pb-[20px] text-foreground/50">{toTitleCase(pokemon.name)}</p>
    </div>
  ));
};

export default PokemonList;
