import { useState } from "react";
import { TextField, Button, Stack } from "@mui/material";

function SearchBar({ onSearch }){
  const [query, setQuery] = useState("");

  const handleSearch = () =>{
    if (query.trim()){
      onSearch(query);
    }
  };

  return(
    <Stack direction="row" spacing={2} mt={4}>
      <TextField fullWidth label="Search Movies" value={query} 
      onChange={(e) => setQuery(e.target.value)} 
      onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }} 
      />

      <Button variant="contained" onClick={handleSearch}>
        Search
      </Button>
      
    </Stack>
  );
}
export default SearchBar;