import { fetcher, API_URL, API_KEY } from "../config";

export const getTvShowDetails = async (tvShowId) => {
  const tvShowDetails = await fetcher(
    `${API_URL}tv/${tvShowId}?api_key=${API_KEY}&language=en-US`
  );

  return tvShowDetails;
};
