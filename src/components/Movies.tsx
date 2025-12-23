import { useEffect, useState } from "react";
import { API_OPTIONS, BASE_API_URL, type MovieInterface } from "../constants";
import HorizontalRail from "./ui/HorizontalRail";
import Loading from "./ui/Loading";
import MovieCard from "./ui/MovieCard";
import ShowSectionHeading from "./ui/ShowSectionHeading";

function Movies() {
  const [errorMessage, setErrorMsg] = useState("");
  const [movies, setMovies] = useState<MovieInterface[]>([]);
  const [loading, setLoading] = useState(false);

  async function fetchMovies() {
    setLoading(true);
    setErrorMsg("");
    try {
      const endpoint = `${BASE_API_URL}/discover/movie?sort_by=popularity.asce`;
      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();
      if (!data.results) {
        setErrorMsg(data.Error || "No Movies Found");
        return;
      }
      console.log(data);

      setMovies(data.results || []);
    } catch (error) {
      console.error(`Error fetching movies`, error);
      setErrorMsg("Error fetching movies,Please try again later!");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="space-y-7">
      <ShowSectionHeading routePath="movies" title="Popular Movies" />
      {loading ? (
        <Loading />
      ) : errorMessage ? (
        <p>{errorMessage}</p>
      ) : (
        <HorizontalRail
          data={movies}
          renderItem={(movie) => <MovieCard movie={movie} />}
        />
      )}
    </div>
  );
}

export default Movies;
