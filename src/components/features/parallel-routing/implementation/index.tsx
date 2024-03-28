import TextHighlight from "@/components/text-highlight.tsx";

const ParallelRoutingImplementation = () => {
  return (
    <p className="text-muted-foreground">
      Refresh the page to see how the each parallel pages/routes can have it&apos;s own
      loading states that enables{" "}
      <TextHighlight
        text="page streaming"
        textLink="https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming#what-is-streaming"
      />{" "}
      with{" "}
      <TextHighlight
        text="loading.tsx"
        textLink="https://nextjs.org/docs/app/api-reference/file-conventions/loading"
      />{" "}
      files. Click on the red outline button to throw runtime error and see how
      granular you can go with{" "}
      <TextHighlight
        text="error handling"
        textLink="https://nextjs.org/docs/app/building-your-application/routing/error-handling"
      />{" "}
      on the parallel page/route level as well with{" "}
      <TextHighlight
        text="error.tsx"
        textLink="https://nextjs.org/docs/app/api-reference/file-conventions/error"
      />{" "}
      files.
    </p>
  );
};

export default ParallelRoutingImplementation;
