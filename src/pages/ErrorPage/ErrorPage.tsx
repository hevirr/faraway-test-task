import { useRouteError, Link } from "react-router-dom";
import { Box } from "@mui/material";

export const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <Box
      sx={{
        padding: "30px",
        background: "#464646",
      }}
      data-testid="error-page"
    >
      Something went wrong...
      <Link style={{ color: "#c4d02d" }} to="/">
        Go back to the ship!
      </Link>
    </Box>
  );
};
