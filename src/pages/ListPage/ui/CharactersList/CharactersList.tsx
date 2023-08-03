import { useContext } from "react";
import { Box } from "@mui/material";

import { CharacterListItemSkeleton } from "@/shared/ui/CharacterListItem/CharacterListItemSkeleton";
import { CharacterListItem } from "@/shared/ui/CharacterListItem";
import { SWCharactersContext } from "@/context/SWCharactersProvider";
import type { ISWCharactersContext } from "@/context/model/types";
import type { Character } from "@/model/types";
import { skeletonArray } from "@/pages/ListPage/model/constant";
import { EmptyListPlaceholder } from "@/pages/ListPage/ui/CharactersList/ui/EmptyListPlaceholder";

const renderCharacterList = (charactersData: Character[] | null) => {
  if (charactersData === null || charactersData.length === 0) {
    return <EmptyListPlaceholder />;
  }

  return charactersData.map((character) => (
    <CharacterListItem character={character} key={character.url} />
  ));
};

export const CharactersList = () => {
  const { charactersData, isLoading } = useContext(
    SWCharactersContext
  ) as ISWCharactersContext;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        flexWrap: "wrap",
        maxHeight: "50vh",
        overflowX: "auto",
        paddingBottom: "15px",
        marginBottom: "35px",
      }}
      data-testid="characters-list"
    >
      {isLoading
        ? skeletonArray.map((int) => <CharacterListItemSkeleton key={int} />)
        : renderCharacterList(charactersData)}
    </Box>
  );
};
