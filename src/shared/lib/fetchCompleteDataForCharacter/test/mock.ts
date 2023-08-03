import { Character } from "@/model/types";

const mockApi: { [key: string]: Response } = {
  "mockapi/homeworld/1/": new Response(JSON.stringify({ name: "Tattoine" })),
  "mockapi/species/3/": new Response(JSON.stringify({ title: "human" })),
  "mockapi/starships/1/": new Response(
    JSON.stringify({ name: "Millenium Falcon" })
  ),
  "mockapi/starships/2/": new Response(JSON.stringify({ name: "Death Star" })),
  "mockapi/vehicles/1/": new Response(JSON.stringify({ name: "AT-ST" })),
};

export const mockApiClient = async (url: string) =>
  await Promise.resolve(mockApi[url]);

export const mockCharacter: Character = {
  birth_year: "1",
  eye_color: "yellow",
  hair_color: "black",
  gender: "male",
  height: "175",
  mass: "80",
  name: "Jedi 1",
  skin_color: "pale",
  created: "random date",
  edited: "random date",
  url: "someurl",
  homeworld: "mockapi/homeworld/1/",
  species: ["mockapi/species/3/"],
  starships: ["mockapi/starships/1/", "mockapi/starships/2/"],
  vehicles: ["mockapi/vehicles/1/"],
  films: [],
};

export const expectedMockCharacterAfterFetching = {
  birth_year: "1",
  eye_color: "yellow",
  hair_color: "black",
  gender: "male",
  height: "175",
  mass: "80",
  name: "Jedi 1",
  skin_color: "pale",
  created: "random date",
  edited: "random date",
  url: "someurl",
  homeworld: "Tattoine",
  species: "human",
  starships: "Millenium Falcon, Death Star",
  vehicles: "AT-ST",
  films: [],
};
