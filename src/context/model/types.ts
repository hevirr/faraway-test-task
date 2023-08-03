import { Dispatch, SetStateAction } from "react";

import { Character } from "@/model/types";

export interface PaginationControls {
  next: string | null;
  previous: string | null;
}

export interface ISWCharactersContext {
  charactersData: Character[] | null;
  setCharactersData: Dispatch<SetStateAction<Character[] | null>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  paginationControls: PaginationControls;
  setPaginationControls: Dispatch<SetStateAction<PaginationControls>>;
}
