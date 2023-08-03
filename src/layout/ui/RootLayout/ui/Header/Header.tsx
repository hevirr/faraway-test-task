import { useRef, KeyboardEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, FilledInputProps, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { useFetchCharacters } from "@/context/hooks/useFetchCharacters";

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { fetchCharacters } = useFetchCharacters();

  const handleSearchCharacterByName = () => {
    if (location.pathname !== "/") navigate("/");

    if (inputRef.current) {
      const searchValue = inputRef.current.value;
      const param = searchValue.length > 0 ? `?search=${searchValue}` : "";

      fetchCharacters(param);
    }
  };

  const handleEnterPress = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") handleSearchCharacterByName();
  };

  return (
    <Box
      sx={{
        padding: "8px",
        backgroundColor: "#111111",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TextField
        placeholder="Enter character name"
        inputRef={inputRef}
        sx={{ backgroundColor: "#f8f8f8", borderRadius: "4px", width: "30%" }}
        onKeyDown={handleEnterPress}
        InputProps={
          {
            "data-testid": "searchbar",
            endAdornment: (
              <SearchIcon
                sx={{ cursor: "pointer" }}
                onClick={handleSearchCharacterByName}
                data-testid="search-icon"
              />
            ),
          } as Partial<FilledInputProps>
        }
      />
    </Box>
  );
};
