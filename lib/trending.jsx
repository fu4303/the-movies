import { fetcher, API_URL, API_KEY } from "../config";

export const getTrending = async (type, time) => {
  return await fetcher(`${API_URL}trending/${type}/${time}?api_key=${API_KEY}`);
};
