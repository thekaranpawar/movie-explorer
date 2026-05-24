import React from "react";
import { FormControl, Select, MenuItem, Box } from "@mui/material";

const FilterByGenre = ({ onSelectGenre }) => {
  const handleChange = (event) => {
    onSelectGenre(event.target.value);
  };

  return (
    <Box>
      <FormControl sx={{ width: "40%" }}>
        <Select
          defaultValue=""
          displayEmpty
          onChange={handleChange}
          sx={{ height: 50 }}
        >
          <MenuItem value="" disabled> Select Genre </MenuItem>

          <MenuItem value="Action"> Action </MenuItem>

          <MenuItem value="Comedy"> Comedy </MenuItem>

          <MenuItem value="Drama"> Drama </MenuItem>

          <MenuItem value="Horror"> Horror </MenuItem>

          <MenuItem value="Romance"> Romance </MenuItem>

          <MenuItem value="Thriller"> Thriller </MenuItem>

          <MenuItem value="Sci-Fi"> Sci-Fi </MenuItem>

        </Select>
      </FormControl>
    </Box>
  );
};
export default FilterByGenre;