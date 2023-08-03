// TODO: чекнуть норм ли без пустых массивов
export interface Character {
  birth_year: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: string[];
  starsips: string[];
  vehicles: string[];
  created: string;
  edited: string;
  url: string;
  [key: string]: string | string[];
}
