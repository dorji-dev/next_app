import TextHighlight from "@/components/text-highlight.tsx";

const ClientSidePaginationExplanation = () => {
  return (
    <div className="space-y-[20px]">
      <p>
        For this implementation, we have used{" "}
        <TextHighlight text="useSWR" textLink="https://swr.vercel.app/" />
        hook to fetch data on the client side.
      </p>
      <p>
        For the table, we have used a reusable component{" "}
        <TextHighlight text="PaginationDataTable" /> which contains our main
        table component <TextHighlight text="DataTable" /> created with{" "}
        <TextHighlight text="@tanstack/table" /> library.
      </p>
      <p>
        For the <TextHighlight text="page" /> and{" "}
        <TextHighlight text="search" /> value, we have used query params instead
        of react states. As you change the page or search input value, the query
        params are updated accordingly and is used to fetch the data as
        necessary.
      </p>
      <p>
        Remember that if we update the params the{" "}
        <TextHighlight
          text="official"
          textLink="https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams"
        />{" "}
        way, it will cause a server request of the page. But we don&apos;t want
        that since the query params are used only inside the client components.
        So we need a way that the updating query params only cause the re-render
        of the client components that makes use of those values. It is quite
        hacky to get that functionality currently so, the implementation makes
        use of <TextHighlight text="nuqs" textLink="https://nuqs.47ng.com/" />,
        a query param update library for <TextHighlight text="NextJs" />. It
        supports shallow updates and can be used for both{" "}
        <TextHighlight text="pages" /> and <TextHighlight text="app" /> router.
      </p>
      <p>
        That&apos;s all it takes to get one of the most common features for
        content display in the web world.
      </p>
    </div>
  );
};

export default ClientSidePaginationExplanation;
