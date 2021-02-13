import { fetcher, API_URL, API_KEY } from "../config";

export const getMovieDetails = async (movieId) => {
  const movieDetails = await fetcher(
    `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );

  return movieDetails;
};
