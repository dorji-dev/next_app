import TextHighlight from "@/components/text-highlight.tsx";

const ISWOSAExplanation = () => {
  return (
    <div className="space-y-[20px]">
      <p>
        In this implementation, no server action is used. However, the initial
        pokemon list is still fetched and rendered on the server inside{" "}
        <TextHighlight text="ISWOSAImplementation" /> component so we still have the SEO benefits.
      </p>
      <p>
        The subsequent pokemon data is fetched on the client side in{" "}
        <TextHighlight text="InfiniteScrollWOSA" /> component whenever the end
        of pokemon list is reached. We are using{" "}
        <TextHighlight
          text="react-intersection-observer"
          textLink="https://www.npmjs.com/package/react-intersection-observer"
        />{" "}
        to detect the end of pokemon list. Upon detection, we fetch the next
        batch of pokemons by keeping track of the{" "}
        <TextHighlight text="offset" /> value. After successful fetch, we update
        the <TextHighlight text="pokemons" /> state and is rendered with the{" "}
        <TextHighlight text="PokemonList" /> component.
      </p>
      <p className="text-foreground">
        You can read about the recommended data fetching patterns and its
        caching mechanisms{" "}
        <TextHighlight
          text="here"
          textLink="https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating"
        />.
      </p>
    </div>
  );
};

export default ISWOSAExplanation;
