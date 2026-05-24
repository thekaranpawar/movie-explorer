import { createContext, useContext } from "react";
import { useMovies } from "../hooks/useMovies";

const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {

  const movies = useMovies();

  return (
    <MoviesContext.Provider value={movies}>
      {children}
    </MoviesContext.Provider>
  );
};

export const useMoviesContext = () => {
  return useContext(MoviesContext);
};