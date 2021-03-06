import { fetcher, API_URL, API_KEY } from "../config";

export const getPersonDetails = async (personId) => {
  return await fetcher(
    `${API_URL}person/${personId}?api_key=${API_KEY}&language=en-US`
  );
};
