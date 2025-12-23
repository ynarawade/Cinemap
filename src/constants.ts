export const BASE_API_URL = "https://api.themoviedb.org/3";
export const TMDB_ACCESS_TOKEN = import.meta.env.VITE_TMDB_API_ACCESS_TOKEN;
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
  },
};
export const INTERSECTION_OBSERVER_API_OPTIONS = {
  root: null,
  rootMargin: "200px",
  threshold: 0,
};

export interface MovieInterface {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface TvShowInterface {
  adult: boolean;
  backdrop_path: string;
  first_air_date: string;
  id: number;
  original_language: string;
  original_name: string;
  name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

// adult: false;
// backdrop_path: "/ufqytAlziHq5pljKByGJ8IKhtEZ.jpg";
// genre_ids: (3)[(53, 80, 9648)];
// id: 425274;
// original_language: "en";
// original_title: "Now You See Me: Now You Don't";
// overview: "The original Four Horsemen reunite with a new generation of illusionists to take on powerful diamond heiress Veronika Vanderberg, who leads a criminal empire built on money laundering and trafficking. The new and old magicians must overcome their differences to work together on their most ambitious heist yet.";
// popularity: 470.6124;
// poster_path: "/oD3Eey4e4Z259XLm3eD3WGcoJAh.jpg";
// release_date: "2025-11-12";
// title: "Now You See Me: Now You Don't";
// video: false;
// vote_average: 6.41;
// vote_count: 481;
