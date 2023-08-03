export const fetchStarWarsCharactersByParams = async (
  params: string | undefined
) => await fetch(`https://swapi.dev/api/people/${params ?? ""}`);
