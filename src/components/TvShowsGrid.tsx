import { useEffect, useRef } from "react";
import {
  INTERSECTION_OBSERVER_API_OPTIONS,
  type TvShowInterface,
} from "../constants";
import useInfiniteFetchData from "../hooks/useInfiniteFetchData";
import SkeletonCard from "./ui/ShimmerLoader";
import ShowSectionHeading from "./ui/ShowSectionHeading";
import TvCard from "./ui/TvCard";

function TvShowsGrid() {
  const { data, loading, errorMessage, setPage, hasMore } =
    useInfiniteFetchData<TvShowInterface>(
      "discover/tv?sort_by=popularity.desc"
    );

  const divRef = useRef<HTMLDivElement | null>(null);
  const isFetchingRef = useRef(false);

  function loadMore() {
    if (!hasMore || isFetchingRef.current) return;
    isFetchingRef.current = true;
    setPage((prev) => prev + 1);
  }

  useEffect(() => {
    if (!divRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore && !loading) {
        // load more data
        console.log("Load more");
        loadMore();
      }
    }, INTERSECTION_OBSERVER_API_OPTIONS);

    observer.observe(divRef.current);

    return () => {
      observer.disconnect();
    };
  }, [hasMore]);

  useEffect(() => {
    if (!loading) {
      isFetchingRef.current = false;
    }
  }, [loading]);

  return (
    <section className="space-y-7">
      <ShowSectionHeading
        routePath="/tv"
        title="TV Shows"
        showViewAll={false}
      />
      {loading && data.length === 0 && (
        <div className="grid grid-cols-1 gap-5 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      )}
      {errorMessage && <p>{errorMessage}</p>}

      {!errorMessage && (
        <div className="grid grid-cols-1 gap-5 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((show) => (
            <TvCard key={show.id} show={show} />
          ))}
          {loading &&
            data.length !== 0 &&
            Array.from({ length: 7 }).map((_, i) => <SkeletonCard key={i} />)}
          <div ref={divRef} className="h-10 w-full " />
        </div>
      )}
    </section>
  );
}

export default TvShowsGrid;
