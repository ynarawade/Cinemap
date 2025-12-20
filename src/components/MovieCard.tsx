import { Star } from "lucide-react";
import type { MovieInterface } from "../constants";

interface MovieCardProps {
  movie: MovieInterface;
}

function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="movie-card">
      <img
        alt={movie.title}
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : "/no-movie.png"
        }
      />
      <div className="mt-4">
        <h3>{movie.title}</h3>
        <div className="content">
          <div className="rating">
            <Star size={16} absoluteStrokeWidth className="text-accent-200" />
            <p>{movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}</p>
            <span>•</span>
            <p className="lang">{movie.original_language}</p>
            <span>•</span>
            <p className="year">
              {movie.release_date ? movie.release_date.split("-")[0] : "N/A"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
