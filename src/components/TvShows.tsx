import type { TvShowInterface } from "../constants";

import useInfiniteFetchData from "../hooks/useInfiniteFetchData";
import HorizontalRail from "./ui/HorizontalRail";
import SkeletonCard from "./ui/ShimmerLoader";
import ShowSectionHeading from "./ui/ShowSectionHeading";
import TvCard from "./ui/TvCard";

function TvShows() {
  const { data, loading, errorMessage } = useInfiniteFetchData<TvShowInterface>(
    "discover/tv?sort_by=popularity.desc"
  );

  return (
    <div className="space-y-7">
      <ShowSectionHeading routePath="tv" title="TV Shows" />
      {loading ? (
        <HorizontalRail
          data={Array.from({ length: 8 })}
          renderItem={() => <SkeletonCard />}
        />
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
