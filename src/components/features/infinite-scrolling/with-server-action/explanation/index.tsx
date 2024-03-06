import TextHighlight from "@/components/text-highlight.tsx";

const ISWithServerActionExplanation = () => {
  return (
    <div className="space-y-[20px]">
      <p>
        This feature makes use of{" "}
        <TextHighlight
          text="React Server Components"
          textLink="https://nextjs.org/docs/app/building-your-application/rendering/server-components"
        />{" "}
        and{" "}
        <TextHighlight
          text="React Server Actions"
          textLink="https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations"
        />{" "}
        to render all the pokemon list on the server.
      </p>
      <p>
        On the initial load, the pokemon data is fetched on the server component{" "}
        <TextHighlight text="ISWithServerActionImplementation" />. We also define a server
        action <TextHighlight text="getPokemonListNodes" /> which we pass to the{" "}
        <TextHighlight text="WSALoadMore" /> client component to later on
        fetch the pokemon.
      </p>
      <p>
        We pass the initial pokemon list to the{" "}
        <TextHighlight text="WSALoadMore" /> component as a children as
        that is the only way a client component can render a server component.
        In the <TextHighlight text="WSALoadMore" /> component, we maintain
        a state <TextHighlight text="pokemonListNodes" /> which we use to hold
        the pokemon list node returned from the server action{" "}
        <TextHighlight text="getPokemonListNodes" /> and is rendered after the{" "}
        <TextHighlight text="children" /> prop.
      </p>
      <p>
        Inside <TextHighlight text="WSALoadMore" />, we make use of{" "}
        <TextHighlight
          text="react-intersection-observer"
          textLink="https://www.npmjs.com/package/react-intersection-observer"
        />{" "}
        to observe the end of pokemon list depending on which we call the server
        action to get new pokemons and update the{" "}
        <TextHighlight text="pokemonListNodes" /> state with our new pokemon
        list returned from the server action. So basically we are able to render
        every pokemon on the server directly enhancing SEO of the page and of
        course a significant reduction in{" "}
        <TextHighlight text="Javascript bundle" /> sent to the client which
        ensures faster initial load times.
      </p>
      <p>
        As the user goes on scrolling, the newly added{" "}
        <TextHighlight text="pokemonListNodes" /> from the server action does
        not cause unnecessary re-render of the previously rendered pokemon
        lists. This is because of the fact that we are passing a{" "}
        <TextHighlight
          text="key"
          textLink="https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key"
        />{" "}
        prop to the list node returned from the server action. Fantastic.
      </p>
      <p>
        We haven&apos;t used any client side data fetching library and used only
        one state to get one of the much loved content listing feature. Feel
        free to explore your way around{" "}
        <TextHighlight text="Server components and actions" />.
      </p>
      <p className="text-foreground">
        You can read about the recommended data fetching patterns and its
        caching mechanisms{" "}
        <TextHighlight
          text="here"
          textLink="https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating"
        />
        .
      </p>
    </div>
  );
};

export default ISWithServerActionExplanation;
