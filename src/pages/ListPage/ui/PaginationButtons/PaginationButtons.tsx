import { Box } from "@mui/material";
import { useContext } from "react";

import type { ISWCharactersContext } from "@/context/model/types";
import { SWCharactersContext } from "@/context/SWCharactersProvider";
import { PaginationButton } from "./ui/PaginationButton";

export const PaginationButtons = () => {
  const { paginationControls, isLoading } = useContext(
    SWCharactersContext
  ) as ISWCharactersContext;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "30px",
      }}
    >
      <PaginationButton
        disabled={!paginationControls.previous || isLoading}
        to={`/${paginationControls.previous}`}
      >
        Previous
      </PaginationButton>
      <PaginationButton
        disabled={!paginationControls.next || isLoading}
        to={`/${paginationControls.next}`}
      >
        Next
      </PaginationButton>
    </Box>
  );
};
