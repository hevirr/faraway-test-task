import type { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

interface PaginationButtonProps {
  disabled: boolean;
  to: string;
}

export const PaginationButton = (
  props: PropsWithChildren<PaginationButtonProps>
) => {
  const { disabled, to, children } = props;

  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#151515",
        "&:hover": {
          backgroundColor: "#343131",
        },
      }}
      disabled={disabled}
      to={to}
      component={Link}
    >
      {children}
    </Button>
  );
};
