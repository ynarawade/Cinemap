import { useEffect, useState } from "react";
import { useDebounce } from "react-use";
import MovieCard from "./components/MovieCard";
import Search from "./components/Search";
import Loading from "./components/ui/Loading";
import StackedHeroBanner from "./components/ui/StackedHeroBanner";
import { API_OPTIONS, BASE_API_URL, type MovieInterface } from "./constants";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [movies, setMovies] = useState<MovieInterface[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useDebounce(() => setDebouncedSearchQuery(searchQuery), 1000, [searchQuery]);

  async function fetchMovies(query: string) {
    setIsLoading(true);
    setErrorMsg("");
    try {
      const endpoint = query
        ? `${BASE_API_URL}/search/movie?query=${encodeURI(query)}`
        : `${BASE_API_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();
      if (data.response === "False") {
        setErrorMsg(data.Error || "Failed to fetch movies");
        setMovies([]);
        return;
      }
      console.log(data);

      setMovies(data.results || []);
    } catch (error) {
      console.error(`Error fetching movies`, error);
      setErrorMsg("Error fetching movies,Please try again later!");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchMovies(debouncedSearchQuery);
  }, [debouncedSearchQuery]);

  return (
    <main>
      <div className="pattern  blur-lg " />
      <div className="wrapper space-y-20">
        <header className="space-y-1">
          <StackedHeroBanner />
          <h1>
            Find films
            <br />
            worth <span className="text-gradient">watching</span>
          </h1>
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </header>
        <section className="all-movies">
          <h2>All Movies</h2>
          {isLoading ? (
            <Loading />
          ) : errorMsg ? (
            <p className="text-red-500">{errorMsg}</p>
          ) : (
            <ul>
              {movies.map((movie: MovieInterface) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
}

export default App;
