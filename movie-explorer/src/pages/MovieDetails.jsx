import Loader from "../components/Loader";
import { useMoviesContext } from "../context/MoviesContext";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Grid, Typography, CardMedia, Paper, Button, Modal,Box } from "@mui/material";

function MovieDetails() {
  const { id } = useParams();
  const { movie, trailerId, loading, error, getMovieDetails } = useMoviesContext();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getMovieDetails(id);
    setOpen(false);
  }, [id]);

  if (loading) return <Loader />;

  if (error)
    return (
      <Typography color="error">
        {error}
      </Typography>
    );

  if (!movie) return null;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container sx={{ mt: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <CardMedia
              component="img"
              image={movie.Poster}
              alt={movie.Title}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            
            <Typography variant="h4"> {movie.Title} </Typography>
            <Typography mt={2}> ⭐ IMDb: {movie.imdbRating} </Typography>
            <Typography mt={2}> {movie.Plot} </Typography>
            <Typography mt={2}> Director: {movie.Director} </Typography>
            <Typography mt={1}> Actors: {movie.Actors} </Typography>
            <Typography mt={2}> Genre: {movie.Genre} </Typography>
            <Typography mt={1}> Released: {movie.Released} </Typography>

            <Button variant="contained" sx={{ mt: 3 }} onClick={handleOpen} disabled={!trailerId}>
              Watch Trailer
            </Button>

          </Grid>
        </Grid>
      </Paper>

      <Modal open={open} onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "80%",
            height: "70%",
            bgcolor: "black",
            boxShadow: 24,
            p: 1,
          }}
        >
          {trailerId && (
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${trailerId}?autoplay=1`}
              title="Trailer"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          )}
        </Box>
      </Modal>
    </Container>
  );
}
export default MovieDetails;