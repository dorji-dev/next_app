import TextHighlight from "@/components/text-highlight.tsx";

const ISWithUseSWRExplanation = () => {
  return (
    <div className="space-y-[20px]">
      <p>
        In this implementation we are making use of the{" "}
        <TextHighlight
          text="useSWRInfinite"
          textLink="https://swr.vercel.app/docs/pagination#useswrinfinite"
        />{" "}
        hook from{" "}
        <TextHighlight text="swr" textLink="https://swr.vercel.app/" />, a light
        weight client side data fetching library.
      </p>
      <p>
        All the data is fetched on the client in the{" "}
        <TextHighlight text="WithUseSWRLoadMore" /> component.
      </p>
      <p>
        <TextHighlight
          text="useSWRInfinite"
          textLink="https://swr.vercel.app/docs/pagination#useswrinfinite"
        />{" "}
        accepts two params. The first param is a function that receives the page
        index starting from <TextHighlight text="0" /> and the data of the
        previous fetch call. The function needs to return a url based on those
        two info which will then be passed to the the second param which is also
        a function that actually fetches your data. If the function{" "}
        <TextHighlight text="first param" /> returns{" "}
        <TextHighlight text="null" /> then, no data will be fetched.
      </p>
      <p>
        The response of all those data call can be accessed as an array of those
        responses in the <TextHighlight text="data" /> value returned by the{" "}
        <TextHighlight text="useSWRInfinite" /> hook. You also get the{" "}
        <TextHighlight text="isLoading" /> and{" "}
        <TextHighlight text="isValidating" /> status with which you can control
        the UI by showing loaders whenever necessary.
      </p>
      <p>
        We make use of{" "}
        <TextHighlight
          text="react-intersection-observer"
          textLink="https://www.npmjs.com/package/react-intersection-observer"
        />{" "}
        to observe the end of product list upon which we increment the page size
        for next fetch.
      </p>
      <p>
        <TextHighlight text="SWR" /> handles the caching of our client side data
        fetch. If you{" "}
        <TextHighlight
          text="soft navigate"
          textLink="https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#5-soft-navigation"
        />{" "}
        and return to this page, you will see all the previously loaded products
        instantly.
      </p>
      <p className="text-foreground">
        You can learn more about infinite loading with{" "}
        <TextHighlight text="useSWRInfinite" /> via given links.
      </p>
    </div>
  );
};

export default ISWithUseSWRExplanation;
