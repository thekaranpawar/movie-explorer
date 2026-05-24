import { useState } from "react";
import { searchMoviesApi, getMovieDetailsApi } from "../services/api";

const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export const useMovies = () => {

  const genreKeywordMap = {
    Action: "action",
    Comedy: "funny",
    Drama: "family",
    Horror: "ghost",
    Romance: "love",
    Thriller: "crime",
    "Sci-Fi": "space",
  };

  const [movie, setMovie] = useState(null);
  const [searchMoviesList, setSearchMoviesList] = useState([]);
  const [trailerId, setTrailerId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  const searchMovies = async (query) => {
    try {
      setLoading(true);

      setError(null);

      const data = await searchMoviesApi(query);

      if (!data.Search) {
        setSearchMoviesList([]);
        setError("No movies found");
        return;
      }

      const detailedMovies = await Promise.all(
        data.Search.map((movie) =>
          getMovieDetailsApi(movie.imdbID)
        )
      );

      setSearchMoviesList(detailedMovies);

    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const getMovieTrailer = async (title, year) => {
    try {

      const query = `${title} ${year} official trailer`;

      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
          query
        )}&type=video&maxResults=1&key=${YOUTUBE_API_KEY}`
      );

      const data = await response.json();

      if (data.items?.length > 0) {
        setTrailerId(data.items[0].id.videoId);
      } else {
        setTrailerId("");
      }

    } catch (err) {
      console.error("Trailer fetch failed", err);
      setTrailerId("");
    }
  };

  const getMovieDetails = async (id) => {
    try{
      setLoading(true);
      setError(null);

      const data = await getMovieDetailsApi(id);

      setMovie(data);

      await getMovieTrailer(data.Title, data.Year);

    } catch (err){
      setError("Failed to load movie");
    } finally{
      setLoading(false);
    }
  };

  const searchByGenre = async (genre) => {
    try {
      setLoading(true);
      setError(null);

      if (!genre){
        setSearchMoviesList([]);
        return;
      }
      const keyword = genreKeywordMap[genre] || genre;
      const data = await searchMoviesApi(keyword);

      if (!data.Search){
        setSearchMoviesList([]);
        setError("No movies found");
        return;
      }
      const detailedMovies = await Promise.all(
        data.Search.map((movie) =>
          getMovieDetailsApi(movie.imdbID)
        )
      );

      setSearchMoviesList(detailedMovies);

    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const addToFavorites = (movie) => {
    setFavorites((prev) => {

      const exists = prev.some(
        (m) => m.imdbID === movie.imdbID
      );

      if (exists) return prev;

      const updated = [...prev, movie];

      localStorage.setItem(
        "favorites",
        JSON.stringify(updated)
      );

      return updated;
    });
  };

  const removeFromFavorites = (id) => {
    setFavorites((prev) => {

      const updated = prev.filter(
        (m) => m.imdbID !== id
      );

      localStorage.setItem(
        "favorites",
        JSON.stringify(updated)
      );

    return updated;
    });
  };

  const isFavorite = (id) => {
    return favorites.some(
      (m) => m.imdbID === id
    );
  };


  return { movie, trailerId, searchMoviesList, loading, error, searchMovies, getMovieDetails, searchByGenre, favorites, addToFavorites, removeFromFavorites, isFavorite };

};