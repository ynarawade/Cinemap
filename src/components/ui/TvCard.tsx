import { Star } from "lucide-react";
import type { TvShowInterface } from "../../constants";

interface TvCardProps {
  show: TvShowInterface;
}

function TvCard({ show }: TvCardProps) {
  return (
    <div className="movie-card">
      <img
        alt={show.name}
        src={
          show.poster_path
            ? `https://image.tmdb.org/t/p/w500/${show.poster_path}`
            : "/no-movie.png"
        }
      />
      <div className="mt-4">
        <h3>{show.name}</h3>
        <div className="content">
          <div className="rating">
            <Star size={16} absoluteStrokeWidth className="text-accent-200" />
            <p>{show.vote_average ? show.vote_average.toFixed(1) : "N/A"}</p>
            <span>•</span>
            <p className="lang">{show.original_language}</p>
            <span>•</span>
            <p className="year">
              {show.first_air_date ? show.first_air_date.split("-")[0] : "N/A"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TvCard;
