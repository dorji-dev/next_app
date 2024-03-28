import TextHighlight from "@/components/text-highlight.tsx";
import FolderStructure from "./folder-structure";

const InterceptingRoutesExplanation = () => {
  return (
    <div className="space-y-[20px]">
      <p>
        Modal routing is one of best way to display content of a page from
        another part of the application. It enhances user experience greatly as
        the user does not lose context of the current page.
      </p>
      <p>
        In <TextHighlight text="NextJS" />, we can implement it with the feature
        called{" "}
        <TextHighlight
          text="Intercepting Routes"
          textLink="https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes"
        />{" "}
        and with a little bit of help from{" "}
        <TextHighlight
          text="Parallel Routing"
          textLink="https://nextjs.org/docs/app/building-your-application/routing/parallel-routes"
        />
        .
      </p>
      <p>
        Briefly go through the following folder structure used for this feature
        implementation to understand it better.
      </p>
      <FolderStructure />
      <p>
        Currently, we are on the <TextHighlight text="page.tsx" /> file of{" "}
        <TextHighlight text="/intercepting-routes" /> segment. From that page we
        want to intercept the route{" "}
        <TextHighlight text="/product/[productId]" />. To do that we need to
        create a folder with the <TextHighlight text="(..)" />{" "}
        <TextHighlight
          text="convention"
          textLink="https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes#convention"
        />{" "}
        inside any{" "}
        <TextHighlight
          text="route segment"
          textLink="https://nextjs.org/docs/app/building-your-application/routing#route-segments"
        />
        . For this implementation, we have created{" "}
        <TextHighlight text="(...)product" /> folder which will match the
        segment inside the root folder i.e. the <TextHighlight text="app" />{" "}
        folder inside which we have created the{" "}
        <TextHighlight text="/product/[productId]" /> route. Three dot will
        match the segment inside root folder. Next we wrap the folder with the{" "}
        <TextHighlight
          text="named slot"
          textLink="https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#slots"
        />{" "}
        to create a parallel route with the help of which we will create a modal
        route.
      </p>
      <p>
        Now the most important thing to keep in mind is that the segment which
        contains the parallel route and the route interception folder, for our modal
        routing must have a <TextHighlight text="layout.{tsx, jsx}" /> file
        which will{" "}
        <TextHighlight
          text="receive"
          textLink="https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#slots"
        />{" "}
        our parallel route slot along with the <TextHighlight text="children" />{" "}
        as prop which you can render whatever way you want, even conditionally!
        The intercepting route <TextHighlight text="(..)" /> folder structure
        must match the structure of the actual route. And the{" "}
        <TextHighlight text="page.{tsx, jsx}" /> file of the intercepting route
        can directly have a modal component to achieve 100% modal routing.
      </p>
      <p>
        Now if you click on any of the product, it will initially load a modal
        with the product details instead of navigating to the actual details
        page. And you will see that the <TextHighlight text="URL" /> is also
        updated. If you close the modal or hit the browser back button, it takes
        you to where you exactly left previously without losing any context.
        While the modal is still open and you try to refresh the page, it will
        now take you to the actual product details page without the modal.
      </p>
      <p>
        You can view the code via given github link to understand it better and
        the above folder structure is taken from the actual implementation as
        well.
      </p>
    </div>
  );
};

export default InterceptingRoutesExplanation;
