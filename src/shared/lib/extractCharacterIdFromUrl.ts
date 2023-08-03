export const extractCharacterIdFromUrl = (url: string) => {
  const peopleSegment = url.substring(url.indexOf("people/"));
  return peopleSegment.substring(
    peopleSegment.indexOf("/") + 1,
    peopleSegment.lastIndexOf("/")
  );
};
