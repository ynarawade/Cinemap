import type { MovieInterface } from "../constants";
import useFetchData from "../hooks/useFetchData";
import Loading from "./ui/Loading";
import MovieCard from "./ui/MovieCard";
import ShowSectionHeading from "./ui/ShowSectionHeading";

function MoviesGrid() {
  const { data, loading, errorMessage } = useFetchData<MovieInterface>(
    "discover/movie?sort_by=popularity.desc"
  );

  return (
    <section className="space-y-7">
      <ShowSectionHeading title="All Movies" showViewAll={false} />

      {loading && <Loading />}
      {errorMessage && <p>{errorMessage}</p>}

      {!loading && !errorMessage && (
        <div className="grid grid-cols-1 gap-5 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </section>
  );
}

export default MoviesGrid;
