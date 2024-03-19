import TextHighlight from "@/components/text-highlight.tsx";

const ServerSidePaginationExplanation = () => {
  return (
    <div className="space-y-[20px]">
      <p>
        One of the most common everyday features is pagination. In this
        implementation, the data fetching is always done on the server inside{" "}
        <TextHighlight text="ServerSidePaginationImplementation" /> and the data
        is passed to the client component{" "}
        <TextHighlight text="PaginationDataTable" />.
      </p>
      <p>
        For the table, we have used{" "}
        <TextHighlight
          text="Tanstack table"
          textLink="https://tanstack.com/table/latest"
        />{" "}
        library to handle client side sorting and column visibility toggle. I
        highly recommend the library for tabular data since it is a breeze to
        set up and the features are very intuitive.
      </p>
      <p>
        While searching the product, we update the query param with key{" "}
        <TextHighlight text="search" /> which causes server request and our page
        gets the the value of the query which is used to fetch data on the
        server again. So even our search results are rendered on the server as
        well.
      </p>
      <p>
        Similarly, while clicking on the page number or the{" "}
        <TextHighlight text="Previous" /> and <TextHighlight text="Next" />{" "}
        navigation buttons, we make use of query param with the key{" "}
        <TextHighlight text="page" /> causing server request where the data for
        that page is fetched on the server.
      </p>
      <p>
        Note that the <TextHighlight text="page" /> query value is reset
        whenever the user makes new search which is the only reasonable thing
        since we want every search results pagination to start from page 1.
      </p>
      <p>
        Currently <TextHighlight text="NextJs" /> doesn&apos;t seem to support
        shallow query param updates meaning every query param update via{" "}
        <TextHighlight
          text="official method"
          textLink="https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams"
        />{" "}
        will cause server request which means all your server components for the
        page will re-render. You would want this for some cases like for the
        current feature, but you may not want the behavior for other cases. It
        is quite hacky to get that behavior currently so I am using a library
        called <TextHighlight text="nuqs" textLink="https://nuqs.47ng.com/" />{" "}
        which supports shallow updates. It supports both page and app router.
      </p>
    </div>
  );
};

export default ServerSidePaginationExplanation;
