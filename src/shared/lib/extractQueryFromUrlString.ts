export const extractSingleQueryFromUrlString = (url: string) => {
  return url.substring(url.indexOf("?"));
};
