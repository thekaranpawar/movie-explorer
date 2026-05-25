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
            "@media (max-width: 450px)": {
              padding: "2px 4px"
            }
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
            "@media (max-width:666px)": {
              left: "auto",
              right: "10px",
              transform: "none",
              fontSize: "16px",
            },
          }}
        >
          Movie Search Hub
        </Typography>

      </Toolbar>
    </AppBar>
  );
}
export default Navbar;