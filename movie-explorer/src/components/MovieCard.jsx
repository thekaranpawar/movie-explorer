import { useMoviesContext } from "../context/MoviesContext";
import { Link } from "react-router-dom";
import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";

function MovieCard({ movie }) {

  const { addToFavorites, removeFromFavorites, isFavorite } = useMoviesContext();

  return (
    <Card>
      <CardMedia
        component="img"
        height="350"
        image={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300"
        }
      />

      <CardContent>

        <Typography> {movie.Title} </Typography>
        <Typography> {movie.Year} </Typography>

        <Button
          component={Link}
          to={`/movie/${movie.imdbID}`}
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
        >
          Details
        </Button>

        <Button
          variant="contained"
          color={
            isFavorite(movie.imdbID)
              ? "error"
              : "primary"
          }
          onClick={() =>
            isFavorite(movie.imdbID)
              ? removeFromFavorites(movie.imdbID)
              : addToFavorites(movie)
          }
          sx={{ mt: 2 }}
        >
          {isFavorite(movie.imdbID)
            ? "Remove ❤️"
            : "Add ❤️"}
        </Button>

      </CardContent>
    </Card>
  );
}
export default MovieCard;