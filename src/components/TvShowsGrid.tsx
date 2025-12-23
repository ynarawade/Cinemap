import type { TvShowInterface } from "../constants";
import useFetchData from "../hooks/useFetchData";
import Loading from "./ui/Loading";
import ShowSectionHeading from "./ui/ShowSectionHeading";
import TvCard from "./ui/TvCard";

function TvShowsGrid() {
  const { data, loading, errorMessage } = useFetchData<TvShowInterface>(
    "discover/tv?sort_by=popularity.desc"
  );

  return (
    <section className="space-y-7">
      <ShowSectionHeading
        routePath="/tv"
        title="TV Shows"
        showViewAll={false}
      />

      {loading && <Loading />}
      {errorMessage && <p>{errorMessage}</p>}

      {!loading && !errorMessage && (
        <div className="grid grid-cols-1 gap-5 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((show) => (
            <TvCard key={show.id} show={show} />
          ))}
        </div>
      )}
    </section>
  );
}

export default TvShowsGrid;
