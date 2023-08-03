import { Box } from "@mui/material";

export const EmptyListPlaceholder = () => {
  return (
    <Box
      sx={{
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        height: "70vh",
        width: "90vw",
        padding: "40px",
        background: `#ffffff url("/darth_vader.png") no-repeat right center`,
        backgroundSize: "20%",
        fontSize: "52px",
        border: "5px solid #000000",
        borderRadius: "70px",
      }}
    >
      Nothing found
    </Box>
  );
};
