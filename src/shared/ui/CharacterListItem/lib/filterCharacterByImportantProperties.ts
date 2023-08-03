import { Character } from "@/model/types";
import { PropValuePairType } from "@/shared/ui/CharacterListItem/model/types";

export const filterCharacterByImportantProperties = (
  character: Character,
  filterFunc: (key: string) => boolean
): PropValuePairType[] => {
  return Object.keys(character)
    .filter(filterFunc)
    .map((key) => ({
      prop: key,
      value: character[key as keyof Character],
    }));
};
