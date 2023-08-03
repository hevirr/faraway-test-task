import { useLoaderData } from "react-router-dom";
import { Box } from "@mui/material";

import { filterCharacterByImportantProperties } from "@/shared/ui/CharacterListItem/lib/filterCharacterByImportantProperties";
import { EditablePropValuePair } from "@/shared/ui/CharacterListItem/ui/EditablePropValuePair/EditablePropValuePair";
import type { Character } from "@/model/types";
import { unwantedProperties } from "./model/constant";

export const CharacterDetailsPage = () => {
  const { character } = useLoaderData() as { character: Character };

  const filteredCharacter = filterCharacterByImportantProperties(
    character,
    (key) => !unwantedProperties.includes(key) && character[key].length !== 0
  );

  return (
    <Box
      sx={{
        padding: "15px",
        background: "#ffffff",
      }}
    >
      {filteredCharacter.map(({ prop, value }) => (
        <EditablePropValuePair key={prop} prop={prop} value={value} />
      ))}
    </Box>
  );
};
