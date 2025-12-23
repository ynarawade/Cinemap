import { useEffect, useRef } from "react";
import type { MovieInterface } from "../constants";
import useInfiniteFetchData from "../hooks/useInfiniteFetchData";
import Loading from "./ui/Loading";
import MovieCard from "./ui/MovieCard";
import ShowSectionHeading from "./ui/ShowSectionHeading";

function MoviesGrid() {
  const { data, loading, errorMessage, setPage, hasMore } =
    useInfiniteFetchData<MovieInterface>(
      "discover/movie?sort_by=popularity.desc"
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
      <ShowSectionHeading title="All Movies" showViewAll={false} />

      {loading && data.length === 0 && <Loading />}
      {errorMessage && <p>{errorMessage}</p>}

      {!errorMessage && (
        <div className="grid grid-cols-1 gap-5 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
          <div ref={divRef} className="h-10 w-full" />
          {loading && data.length !== 0 && <Loading />}
        </div>
      )}
    </section>
  );
}

export default MoviesGrid;
