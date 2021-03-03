import { fetcher, API_URL, API_KEY } from "../config";

export const getMovieDetails = async (movieId) => {
  return await fetcher(
    `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
};
