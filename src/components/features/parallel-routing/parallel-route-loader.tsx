interface ParallelRouteLoaderProps {
  pageName: string;
}

const ParallelRouteLoader = ({ pageName }: ParallelRouteLoaderProps) => {
  return (
    <div>
      <p className="text-[13px] text-muted-foreground">
        Loading page{" "}
        <span className="text-foreground font-bold">{pageName}</span> ...
      </p>
    </div>
  );
};

export default ParallelRouteLoader;
