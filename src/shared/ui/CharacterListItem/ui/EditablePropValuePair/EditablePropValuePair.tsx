import { useState } from "react";
import { Box, TextField } from "@mui/material";
import { PropValuePairType } from "@/shared/ui/CharacterListItem/model/types";

export const EditablePropValuePair = (props: PropValuePairType) => {
  const { prop, value } = props;

  const [isEditable, setIsEditable] = useState(false);
  const [interactiveValue, setInteractiveValue] = useState(value);

  const handleClick = () => {
    setIsEditable((prev) => !prev);
  };

  return (
    <Box>
      <span>{prop}: </span>
      {!isEditable ? (
        <span
          onClick={handleClick}
          style={{
            textShadow: "#FFE81F -3px 2px 2px",
            cursor: "pointer",
          }}
        >
          {interactiveValue}
        </span>
      ) : (
        <TextField
          fullWidth
          value={interactiveValue}
          onKeyDown={(e) => {
            if (e.key === "Enter") setIsEditable(false);
          }}
          onChange={(e) => setInteractiveValue(e.target.value)}
        />
      )}
    </Box>
  );
};
