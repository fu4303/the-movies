import { fetcher, API_URL, API_KEY } from "../config";

export const getTvShows = async (pId, page) => {
  return await fetcher(
    `${API_URL}tv/${pId}?api_key=${API_KEY}&language=en-US&page=${page}`
  );
};
