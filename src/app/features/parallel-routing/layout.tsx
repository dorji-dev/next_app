import { PropsWithChildren, ReactNode } from "react";

interface ParallelRoutingLayoutProps extends PropsWithChildren {
  firstPage: ReactNode;
  secondPage: ReactNode;
  thirdPage: ReactNode;
  fourthPage: ReactNode;
}

const ParallelRoutingLayout = (props: ParallelRoutingLayoutProps) => {
  const { firstPage, secondPage, thirdPage, fourthPage, children } = props;
  return (
    <div>
      <div>{children}</div>
      <div>
        {firstPage}
        {secondPage}
        {thirdPage}
        {fourthPage}
      </div>
    </div>
  );
};

export default ParallelRoutingLayout;
