import { useParams } from "react-router-dom";
import NotFound from "../NotFound";
import MoviesGrid from "./MoviesGrid";
import TvShowsGrid from "./TvShowsGrid";

function Discover() {
  const { slug } = useParams<{ slug: string }>();

  switch (slug) {
    case "tv":
      return <TvShowsGrid />;
    case "movies":
      return <MoviesGrid />;
    default:
      return <NotFound />;
  }
}

export default Discover;
