import { useEffect, useRef } from "react";
import type { TvShowInterface } from "../constants";
import useInfiniteFetchData from "../hooks/useInfiniteFetchData";
import Loading from "./ui/Loading";
import ShowSectionHeading from "./ui/ShowSectionHeading";
import TvCard from "./ui/TvCard";

function TvShowsGrid() {
  const { data, loading, errorMessage, setPage, hasMore } =
    useInfiniteFetchData<TvShowInterface>(
      "discover/tv?sort_by=popularity.desc"
    );

  const divRef = useRef<HTMLDivElement | null>(null);

  const options = { root: null, rootMargin: "200px", threshold: 0 };

  function loadMore() {
    if (!hasMore || loading) return;
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
    }, options);

    observer.observe(divRef.current);

    return () => {
      observer.disconnect();
    };
  }, [hasMore, loading]);

  return (
    <section className="space-y-7">
      <ShowSectionHeading
        routePath="/tv"
        title="TV Shows"
        showViewAll={false}
      />

      {errorMessage && <p>{errorMessage}</p>}

      {!errorMessage && (
        <div className="grid grid-cols-1 gap-5 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((show) => (
            <TvCard key={show.id} show={show} />
          ))}
          {loading && <Loading />}
          <div ref={divRef} className="h-10 w-full " />
        </div>
      )}
    </section>
  );
}

export default TvShowsGrid;
