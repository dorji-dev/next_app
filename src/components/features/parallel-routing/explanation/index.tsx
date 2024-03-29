import TextHighlight from "@/components/text-highlight.tsx";
import ParallelRoutingFolderStructure from "./parallel-routing-folder-structure";

const ParallelRoutingExplanation = () => {
  return (
    <div className="space-y-[20px]">
      <p>
        <TextHighlight
          text="Parallel routing"
          textLink="https://nextjs.org/docs/app/building-your-application/routing/parallel-routes"
        />{" "}
        is a opt in feature in NextJs where you can render one or more pages
        within the same layout simultaneously or conditionally. It is
        recommended for highly dynamic sections of an application like
        dashboards and feeds on social sites.
      </p>
      <p>
        Go through the folder structure for the current implementation below for
        a quick drive on how to define parallel routes.
      </p>
      <ParallelRoutingFolderStructure />
      <p>
        As you can see, parallel routes are denoted by the named{" "}
        <TextHighlight
          text="slots"
          textLink="https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#slots"
        />
        . Slots are defined with the convention <TextHighlight text="@folder" />
      </p>
      <p>
        Currently we are at the route segment{" "}
        <TextHighlight text="/parallel-routing" />, and we have four parallel
        routes under that namely <TextHighlight text="@firstPage" />,{" "}
        <TextHighlight text="@secondPage" />,{" "}
        <TextHighlight text="@thirdPage" />, and{" "}
        <TextHighlight text="@fourthPage" /> which corresponds to{" "}
        <TextHighlight text="One" />, <TextHighlight text="Two" />,{" "}
        <TextHighlight text="Three" />, and <TextHighlight text="Four" /> page
        titles respectively on the implementation section.
      </p>
      <p>
        Now all those named slots are passed as props to the{" "}
        <span className="font-bold">parent</span>{" "}
        <TextHighlight text="layout.tsx" /> file. Inside that layout file, you
        can choose to render those slots any way you want and can also position
        them any way you want. The <TextHighlight text="page.tsx" /> file
        directly under <TextHighlight text="/parallel-routing" /> folder will be
        passed as <TextHighlight text="children" /> prop to the layout as well.
        That&apos;s why <TextHighlight text="children" /> is an implicit slot
        that NextJs automatically passes to your layout.
      </p>
      <p>
        Each parallel routes can have both <TextHighlight text="error.tsx" />{" "}
        and <TextHighlight text="loading.tsx" /> files which enables page
        streaming and granular error handling as you can see in the demo. You
        can play around it get the idea as well.
      </p>
    </div>
  );
};

export default ParallelRoutingExplanation;
