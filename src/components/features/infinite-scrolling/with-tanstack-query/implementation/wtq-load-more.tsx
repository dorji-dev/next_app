"use client";

interface WTQLoadMoreProps extends React.PropsWithChildren {
  initialOffset: number;
}

const WTQLoadMore = ({
  children,
  initialOffset,
}: WTQLoadMoreProps) => {

  return (
    <div>
      Tanstack query implementation
    </div>
  );
};

export default WTQLoadMore;
