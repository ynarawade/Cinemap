import { type MovieInterface } from "../constants";
import useInfiniteFetchData from "../hooks/useInfiniteFetchData";
import HorizontalRail from "./ui/HorizontalRail";
import MovieCard from "./ui/MovieCard";
import SkeletonCard from "./ui/ShimmerLoader";
import ShowSectionHeading from "./ui/ShowSectionHeading";

function Movies() {
  const { data, loading, errorMessage } = useInfiniteFetchData<MovieInterface>(
    "discover/movie?sort_by=popularity.desc"
  );

  return (
    <div className="space-y-7">
      <ShowSectionHeading routePath="movies" title="Popular Movies" />
      {loading ? (
        <HorizontalRail
          data={Array.from({ length: 8 })}
          renderItem={(_) => <SkeletonCard />}
        />
      ) : errorMessage ? (
        <p>{errorMessage}</p>
      ) : (
        <HorizontalRail
          data={data}
          renderItem={(movie) => <MovieCard movie={movie} />}
        />
      )}
    </div>
  );
}

export default Movies;
