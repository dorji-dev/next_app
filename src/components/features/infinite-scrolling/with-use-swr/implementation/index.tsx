import WithUseSWRLoadMore from "./wswr-load-more";

const PAGE_SIZE = 12;

const ISWithUseSWRImplementation = async () => {
  return <WithUseSWRLoadMore initialOffset={PAGE_SIZE}></WithUseSWRLoadMore>;
};

export default ISWithUseSWRImplementation;
