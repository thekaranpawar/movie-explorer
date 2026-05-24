import { AppBar, Toolbar, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ position: "relative", display: "flex" }}>

        <Link
          component={RouterLink}
          to="/favorites"
          sx={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
            border: "1px solid black",
            borderRadius: "3px",
            padding: "6px 12px",
          }}
        >
          Favorites ❤️
        </Link>

        <Typography
          variant="h6"
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            whiteSpace: "nowrap",
          }}
        >
          Search your Favourite Movies
        </Typography>

      </Toolbar>
    </AppBar>
  );
}
export default Navbar;