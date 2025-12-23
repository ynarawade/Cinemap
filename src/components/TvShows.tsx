import type { TvShowInterface } from "../constants";
import useFetchData from "../hooks/useFetchData";
import HorizontalRail from "./ui/HorizontalRail";
import Loading from "./ui/Loading";
import ShowSectionHeading from "./ui/ShowSectionHeading";
import TvCard from "./ui/TvCard";

function TvShows() {
  const { data, loading, errorMessage } = useFetchData<TvShowInterface>(
    "discover/tv?sort_by=popularity.desc"
  );

  return (
    <div className="space-y-7">
      <ShowSectionHeading routePath="tv" title="TV Shows" />
      {loading ? (
        <Loading />
      ) : errorMessage ? (
        <p>{errorMessage}</p>
      ) : (
        <HorizontalRail
          data={data}
          renderItem={(show) => <TvCard show={show} />}
        />
      )}
    </div>
  );
}

export default TvShows;
