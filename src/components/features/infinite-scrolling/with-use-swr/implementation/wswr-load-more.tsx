"use client";

interface WithUseSWRLoadMoreProps extends React.PropsWithChildren {
  initialOffset: number;
}

const WithUseSWRLoadMore = ({
  children,
  initialOffset,
}: WithUseSWRLoadMoreProps) => {

  return (
    <div>
      useSWR implementation
    </div>
  );
};

export default WithUseSWRLoadMore;
