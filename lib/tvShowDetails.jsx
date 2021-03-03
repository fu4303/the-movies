import { fetcher, API_URL, API_KEY } from "../config";

export const getTvShowDetails = async (tvShowId) => {
  return await fetcher(
    `${API_URL}tv/${tvShowId}?api_key=${API_KEY}&language=en-US`
  );
};
