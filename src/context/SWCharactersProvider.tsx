import { createContext, useState, PropsWithChildren } from "react";

import type { Character } from "@/model/types";
import type { ISWCharactersContext, PaginationControls } from "./model/types";

export const SWCharactersContext = createContext<ISWCharactersContext | null>(
  null
);

export const SWCharactersContextProvider = ({
  children,
}: PropsWithChildren) => {
  const [charactersData, setCharactersData] = useState<Character[] | null>(
    null
  );

  const [isLoading, setIsLoading] = useState(false);

  const [paginationControls, setPaginationControls] =
    useState<PaginationControls>({
      next: null,
      previous: null,
    });

  return (
    <SWCharactersContext.Provider
      value={{
        charactersData,
        setCharactersData,
        isLoading,
        setIsLoading,
        paginationControls,
        setPaginationControls,
      }}
    >
      {children}
    </SWCharactersContext.Provider>
  );
};
