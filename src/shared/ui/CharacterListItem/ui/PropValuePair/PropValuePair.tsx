import { Box } from "@mui/material";
import { PropValuePairType } from "@/shared/ui/CharacterListItem/model/types";

export const PropValuePair = (props: PropValuePairType) => {
  const { prop, value } = props;

  return (
    <Box>
      <span>{prop}: </span>
      <span style={{ textShadow: "#FFE81F -3px 2px 2px" }}>{value}</span>
    </Box>
  );
};
