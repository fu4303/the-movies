// Site Configuration
export default {
  title: "The Movies",
  description: "My awesome description!",
  social: {
    twitter: "who",
  },
};

export const MAX_WIDTH = "1440px";

export const fetcher = (url) => fetch(url).then((res) => res.json());

export const API_URL = "https://api.themoviedb.org/3/";

export const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";

// BACKDROP SIZES: w300, w780, w1280, original.
export const MEDIUM_BACKDROP_SIZE = "w780";
export const BACKDROP_SIZE = "w1280";

// POSTER SIZES: w92, w154, w185, w342, w500, w780, original.
export const POSTER_SIZE = "w342";

// PROFILE SIZES: w92, w185, w300, original.
export const SMALL_PROFILE_SIZE = "w185";
export const PROFILE_SIZE = "w300";

// Links
export const movie = [
  {
    title: "Popular",
    href: "/movie/popular",
  },
  {
    title: "Now Playing",
    href: "/movie/now_playing",
  },
  {
    title: "Upcoming",
    href: "/movie/upcoming",
  },
  {
    title: "Top Rated",
    href: "/movie/top_rated",
  },
];

export const tv = [
  {
    title: "Popular",
    href: "/tv/popular",
  },
  {
    title: "Airing Today",
    href: "/tv/airing_today",
  },
  {
    title: "On TV",
    href: "/tv/on_the_air",
  },
  {
    title: "Top Rated",
    href: "/tv/top_rated",
  },
];

export const people = [
  {
    title: "Popular",
    href: "/person/popular",
  },
];
