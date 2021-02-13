import { fetcher, API_URL, API_KEY } from "../config";

export const getTvShows = async (pId, page) => {
  const tvShows = await fetcher(
    `${API_URL}tv/${pId}?api_key=${API_KEY}&language=en-US&page=${page}`
  );

  return tvShows;
};
