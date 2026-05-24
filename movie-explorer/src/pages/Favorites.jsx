import MovieCard from "../components/MovieCard";
import { useMoviesContext } from "../context/MoviesContext";
import { Container, Grid, Typography } from "@mui/material";

function Favorites() {
  const { favorites } = useMoviesContext();

  return (
    <Container>

      <Typography variant="h4" 
        sx={{ mt: 3, mb: 3 }}
      > 
        My Favorites Movies here : 
      </Typography>

      {favorites.length === 0 ? (
        <Typography mt={2}>
          No favorite movies yet
        </Typography>
      ) : (
        <Grid container spacing={3} mt={2}>
          {favorites.map((movie) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={movie.imdbID}
            >
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
export default Favorites;