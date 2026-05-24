import { useMoviesContext } from "../context/MoviesContext";
import SearchBar from "../components/SearchBar";
import FilterByGenre from "../components/FilterByGenre";
import MovieCard from "../components/MovieCard";
import Loader from "../components/Loader";
import { Container, Grid, Typography, Box } from "@mui/material";

function Home(){
const {
  searchMoviesList,
  loading,
  error,
  searchMovies,
  searchByGenre
} = useMoviesContext();

  return (
    <Container maxWidth="lg">
      <Box sx={{
           minHeight: "30vh",
           display: "flex",
           flexDirection: "column",
           justifyContent: "center",
           alignItems: "center",
           textAlign: "center",
          }}
      >
        <Typography variant="h3"
          sx={{
            fontWeight: "bold",
            fontSize: {
              xs: "2rem",
              sm: "3rem",
              md: "4rem",
            },
          }}
        >
          Movie Explorer
        </Typography>

        <Box sx={{ mt: 3, width: "100%", maxWidth: "600px"}} >
          <SearchBar onSearch={searchMovies} />
          <Box sx={{ mt: 2 }}>
            <FilterByGenre onSelectGenre={searchByGenre} />
          </Box>
        </Box>
      </Box>

      { loading && <Loader /> }

      { error && (
          <Typography color="error"
            sx={{
              textAlign: "center",
              mt: 3,
            }}
          >
            {error}
          </Typography>
        )
      }

      {
        searchMoviesList.length > 0 && (
          <>
            <Typography variant="h5"
              sx={{ mt: 4, mb: 2, textAlign: "center", fontWeight: "bold"}}
            >
              Movies
            </Typography>

            <Grid container spacing={3}
              sx={{ justifyContent: "center"}}
            >
              { searchMoviesList.map((movie) => (
                  <Grid
                    key={movie.imdbID} size={{ xs: 12, sm: 6, md: 3}}
                  >
                    <MovieCard movie={movie} />
                  </Grid>
                ))
              }
            </Grid>
          </>
        )
      }
    </Container>
  );
}
export default Home;