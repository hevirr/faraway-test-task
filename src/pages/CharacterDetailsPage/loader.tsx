import { LoaderFunction } from 'react-router-dom';

import { extractCharacterIdFromUrl } from "@/shared/lib/extractCharacterIdFromUrl";
import {fetchCompleteDataForCharacter} from "@/shared/lib/fetchCompleteDataForCharacter";
import { fetchStarWarsCharactersByParams } from "@/api/api";
import { Character} from "@/model/types";

const fetchSingleCharacterById = async (id: string | undefined) => {
    try {
        const response = await fetchStarWarsCharactersByParams(id);
        return await response.json();
    } catch (e: any) {
        throw new Error(e)
    }
};

export const loader =
  (charactersData: Character[] | null) =>
  (async ({ params }) => {
    let character;

    if (charactersData) {
      const cachedCharacter = charactersData.find((character) => {
        return extractCharacterIdFromUrl(character.url) === params.characterId;
      });
      character =
        cachedCharacter || (await fetchSingleCharacterById(params.characterId));
    } else {
      character = await fetchSingleCharacterById(params.characterId);
    }

    character = await fetchCompleteDataForCharacter(character);

    return { character };
  }) satisfies LoaderFunction;
