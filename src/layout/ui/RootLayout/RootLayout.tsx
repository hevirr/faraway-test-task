import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import { Header } from "./ui/Header";

export const RootLayout = () => {
  return (
    <Box data-testid="root-layout">
      <Header />
      <Box sx={{ padding: "15px" }}>
        <Outlet />
      </Box>
    </Box>
  );
};
