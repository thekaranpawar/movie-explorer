import axios from "axios";

const OMDB_API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

const OMDB_BASE_URL = "https://www.omdbapi.com/";
const YOUTUBE_BASE_URL =
  "https://www.googleapis.com/youtube/v3/search";


export const searchMoviesApi = async (query) => {
  const { data } = await axios.get(OMDB_BASE_URL, {
    params: {
      apikey: OMDB_API_KEY,
      s: query,
    },
  });
  return data;
};

export const getMovieDetailsApi = async (id) => {
  const { data } = await axios.get(OMDB_BASE_URL, {
    params: {
      apikey: OMDB_API_KEY,
      i: id,
      plot: "full",
    },
  });
  return data;
};

export const getMovieTrailerApi = async (movieTitle) => {
  const { data } = await axios.get(YOUTUBE_BASE_URL, {
    params: {
      key: YOUTUBE_API_KEY,
      part: "snippet",
      q: `${movieTitle} official trailer`,
      type: "video",
      maxResults: 1,
    },
  });
  return data.items?.[0];
};