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
  const [dailyTrendingMovies, setDailyTrendingMovies] = useState<
    MovieInterface[]
  >([]);
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

  async function fetchTrendingMovies() {
    try {
      const endpoint = `${BASE_API_URL}/trending/movie/day`;
      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Failed to fetch trending movies");
      }
      const data = await response.json();
      if (data.response === "False") {
        setDailyTrendingMovies([]);
        return;
      }
      console.log("Daily trending", data);

      setDailyTrendingMovies(data.results || []);
    } catch (error) {
      console.error(`Error fetching trending movies. ${error}`);
    }
  }

  useEffect(() => {
    fetchMovies(debouncedSearchQuery);
  }, [debouncedSearchQuery]);

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  return (
    <main className="selection:bg-accent-200 selection:text-accent-50">
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

        {dailyTrendingMovies.length > 0 && (
          <section className="trending">
            <h2>Trending Movies</h2>
            <ul>
              {dailyTrendingMovies.map((movie, index) => (
                <li key={movie.id}>
                  <p>{index + 1}</p>
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                        : "/no-movie.png"
                    }
                    alt={movie.title}
                  />
                </li>
              ))}
            </ul>
          </section>
        )}
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
