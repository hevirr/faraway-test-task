import { Box } from "@mui/material";

import { importantCharacterProperties } from "./model/constant";
import { PropValuePair } from "@/shared/ui/CharacterListItem/ui/PropValuePair";

const skeletonData = importantCharacterProperties.map((importantProperty) => ({
  prop: importantProperty,
  value: "Exploring galaxy",
}));

export const CharacterListItemSkeleton = () => {
  return (
    <Box
      sx={{
        background: "#e1dede",
        border: "3px solid #000000",
        borderRadius: "12px",
        padding: "8px 12px",
        cursor: "pointer",
        fontSize: "18px",
      }}
      data-testid="skeleton-component"
    >
      {skeletonData.map(({ prop, value }) => (
        <PropValuePair key={prop} prop={prop} value={value} />
      ))}
    </Box>
  );
};
