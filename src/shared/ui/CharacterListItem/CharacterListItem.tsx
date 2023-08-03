import { Character } from "@/model/types";
import { Box } from "@mui/material";

import { importantCharacterProperties } from "./model/constant";
import { filterCharacterByImportantProperties } from "@/shared/ui/CharacterListItem/lib/filterCharacterByImportantProperties";
import { PropValuePair } from "@/shared/ui/CharacterListItem/ui/PropValuePair";
import { Link } from "react-router-dom";
import { extractCharacterIdFromUrl } from "@/shared/lib/extractCharacterIdFromUrl";

interface CharacterCardProps {
  character: Character;
}

export const CharacterListItem = (props: CharacterCardProps) => {
  const { character } = props;

  const characterId = extractCharacterIdFromUrl(character.url);

  const filteredCharacterProperties = filterCharacterByImportantProperties(
    character,
    (key) => importantCharacterProperties.includes(key)
  );

  return (
    <Box
      sx={{
        background: "#e1dede",
        border: "3px solid #000000",
        borderRadius: "12px",
        padding: "8px 12px",
        fontSize: "18px",
        color: "#1f1f1f",
        cursor: "pointer",
        transition: "0.2s",
        "&:hover": {
          background: "#b2aeae",
        },
      }}
      component={Link}
      to={`/character/${characterId}`}
    >
      {filteredCharacterProperties.map(({ prop, value }) => {
        return <PropValuePair key={prop} prop={prop} value={value} />;
      })}
    </Box>
  );
};
