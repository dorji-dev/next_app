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
        to render all the products on the server.
      </p>
      <p>
        On the initial load, the product data is fetched on the server component{" "}
        <TextHighlight text="ISWithServerActionImplementation" />. We also
        define a server action <TextHighlight text="getProductListNodes" />{" "}
        which we pass to the <TextHighlight text="WSALoadMore" /> client
        component to later on fetch the product.
      </p>
      <p>
        We pass the initial product list to the{" "}
        <TextHighlight text="WSALoadMore" /> component as a children as that is
        the only way a client component can render a server component. In the{" "}
        <TextHighlight text="WSALoadMore" /> component, we maintain a state{" "}
        <TextHighlight text="productListNodes" /> which we use to hold the
        product list node returned from the server action{" "}
        <TextHighlight text="getProductListNodes" /> and is rendered after the{" "}
        <TextHighlight text="children" /> prop.
      </p>
      <p>
        Inside <TextHighlight text="WSALoadMore" />, we make use of{" "}
        <TextHighlight
          text="react-intersection-observer"
          textLink="https://www.npmjs.com/package/react-intersection-observer"
        />{" "}
        to observe the end of product list depending on which we call the server
        action to get new products and update the{" "}
        <TextHighlight text="productListNodes" /> state with our new product
        list returned from the server action. So basically we are able to render
        every product on the server directly enhancing SEO of the page and of
        course a significant reduction in{" "}
        <TextHighlight text="Javascript bundle" /> sent to the client which
        ensures faster initial load times.
      </p>
      <p>
        As the user goes on scrolling, the newly added{" "}
        <TextHighlight text="productListNodes" /> from the server action does
        not cause any re-render of the previously rendered product lists. This
        is because of the fact that <TextHighlight text="ProductList" /> is a
        server component and they render only once i.e. on the server during
        request time or build time. Fantastic.
      </p>
      <p>
        As for the search feature, we are updating the search params with a{" "}
        <TextHighlight text="useDebounce" /> hook instead of using client side
        state . After the update, our page{" "}
        <TextHighlight text="InfiniteScrollWithServerActionPage" /> will receive
        the updated <TextHighlight text="search" /> param which we can use to
        fetch data with that filter.
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
