import { useEffect, useState } from "react";
import { API_OPTIONS, BASE_API_URL, type TvShowInterface } from "../constants";
import HorizontalRail from "./ui/HorizontalRail";
import Loading from "./ui/Loading";
import ShowSectionHeading from "./ui/ShowSectionHeading";
import TvCard from "./ui/TvCard";

function TvShows() {
  const [tvShows, setTvShows] = useState<TvShowInterface[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function fetchTvShows() {
    setLoading(true);
    setErrorMessage("");
    try {
      const endpoint = `${BASE_API_URL}/discover/tv?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Failed to fetch tv shows");
      }
      const data = await response.json();
      if (!data.results) {
        setErrorMessage("No TV shows found");
        return;
      }

      console.log(data);

      setTvShows(data.results || []);
    } catch (error) {
      console.error(`Error fetching tv shows`, error);
      setErrorMessage("Error fetching tv shows,Please try again later!");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTvShows();
  }, []);

  return (
    <div className="space-y-7">
      <ShowSectionHeading routePath="/tv-shows" title="TV Shows" />
      {loading ? (
        <Loading />
      ) : errorMessage ? (
        <p>{errorMessage}</p>
      ) : (
        <HorizontalRail
          data={tvShows}
          renderItem={(show) => <TvCard show={show} />}
        />
      )}
    </div>
  );
}

export default TvShows;
