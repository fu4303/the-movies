// https://swr.vercel.app/getting-started#make-it-reusable

import useSWR from "swr";

import { API_URL, API_KEY, fetcher } from "../../config";

export const useMedia = (mediaId, mediaType, page) => {
  const { data, error } = useSWR(
    mediaId &&
      `${API_URL}${mediaType}/${mediaId}?api_key=${API_KEY}&language=en-US&page=${page}`,
    fetcher
  );

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const useMediaDetails = (mediaId, mediaType) => {
  const { data, error } = useSWR(
    mediaId &&
      `${API_URL}${mediaType}/${mediaId}?api_key=${API_KEY}&language=en-US`,
    fetcher
  );

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const useCredits = (mediaId, mediaType) => {
  const { data, error } = useSWR(
    mediaId &&
      `${API_URL}${mediaType}/${mediaId}/credits?api_key=${API_KEY}&language=en-US`,
    fetcher
  );

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const useCombinedCredits = (personId) => {
  const { data, error } = useSWR(
    personId
      ? `${API_URL}person/${personId}/combined_credits?api_key=${API_KEY}&language=en-US`
      : null,
    fetcher
  );

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};
