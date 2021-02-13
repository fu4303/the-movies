import { fetcher, API_URL, API_KEY } from "../config";

export const getPeople = async (pId, page) => {
  const people = await fetcher(
    `${API_URL}person/${pId}?api_key=${API_KEY}&language=en-US&page=${page}`
  );

  return people;
};
