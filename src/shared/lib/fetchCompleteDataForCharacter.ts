import { propertiesToFetch } from "@/model/constant";
import { Character } from "@/model/types";

export const fetchCompleteDataForCharacter = async (character: Character) => {
  const objectWithFetchingProps = Object.keys(character)
    .filter((key) => propertiesToFetch.includes(key))
    .reduce((acc, key) => {
      return Object.assign(acc, {
        [key]: character[key as keyof Character],
      });
    }, {});

  const flattedProperties: string[] = Object.values<string>(
    objectWithFetchingProps
  ).flatMap((url) => url);

  return await Promise.all(
    flattedProperties.map(async (url) => {
      const response = await fetch(url);
      return response.json();
    })
  ).then((res) => {
    const arrayOfValues = res.map(
      (fetchedEntity: any) => fetchedEntity.name || fetchedEntity.title
    );

    const result = flattedProperties.reduce(
      (acc: { [key: string]: string }, currentValue, index) => {
        const substrToApi = currentValue.substring(
          currentValue.indexOf("api/"),
          currentValue.lastIndexOf("/")
        );
        let property = substrToApi.substring(
          substrToApi.indexOf("/") + 1,
          substrToApi.lastIndexOf("/")
        );

        if (property === "planets") property = "homeworld";

        acc[property] = acc[property]
          ? `${acc[property]}, ${arrayOfValues[index]}`
          : arrayOfValues[index];
        return acc;
      },
      {}
    );

    return {
      ...character,
      ...result,
    };
  });
};
