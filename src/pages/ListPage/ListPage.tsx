import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useFetchCharacters } from "@/context/hooks/useFetchCharacters";
import { SWCharactersContext } from "@/context/SWCharactersProvider";
import type { ISWCharactersContext } from "@/context/model/types";
import { PaginationButtons } from "@/pages/ListPage/ui/PaginationButtons";
import { CharactersList } from "@/pages/ListPage/ui/CharactersList";

export const ListPage = () => {
  const { isLoading } = useContext(SWCharactersContext) as ISWCharactersContext;
  const { fetchCharacters } = useFetchCharacters();

  const location = useLocation();

  useEffect(() => {
    if (!isLoading) fetchCharacters(location.search);
  }, [location.search]);

  return (
    <>
      <CharactersList />

      <PaginationButtons />
    </>
  );
};
