import TextHighlight from "@/components/text-highlight.tsx";

const ParallelRoutingImplementation = () => {
  return (
    <p>
      Refresh the page to see how the parallel pages can have it&apos;s own
      loading states and error boundaries via{" "}
      <TextHighlight text="loading.tsx" /> and{" "}
      <TextHighlight text="error.tsx" /> files.
    </p>
  );
};

export default ParallelRoutingImplementation;
