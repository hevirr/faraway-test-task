import { useContext, useRef } from "react";

import { extractSingleQueryFromUrlString } from "@/shared/lib/extractQueryFromUrlString";
import { SWCharactersContext } from "@/context/SWCharactersProvider";
import { ISWCharactersContext } from "@/context/model/types";
import { fetchStarWarsCharactersByParams } from "@/api/api";

// prevent multiple calls with same params
let cachedParams: string | undefined;

export const useFetchCharacters = () => {
  const { setCharactersData, setIsLoading, setPaginationControls } = useContext(
    SWCharactersContext
  ) as ISWCharactersContext;

  // debounce effect
  const timeout = useRef<ReturnType<typeof setInterval>>();

  const fetchCharacters = (params?: string) => {
    if (params === cachedParams) return;
    cachedParams = params;

    clearTimeout(timeout.current);

    const makeRequestWithParams = async () => {
      const searchParams = params || "";

      setIsLoading(true);

      timeout.current = setTimeout(async () => {
        const response = await fetchStarWarsCharactersByParams(searchParams);
        const { results: characters, next, previous } = await response.json();

        setIsLoading(false);

        setCharactersData(characters);

        setPaginationControls((prev) => ({
          ...prev,
          next: next ? extractSingleQueryFromUrlString(next) : null,
          previous: previous ? extractSingleQueryFromUrlString(previous) : null,
        }));
      }, 500);
    };

    makeRequestWithParams();
  };

  return { fetchCharacters };
};
