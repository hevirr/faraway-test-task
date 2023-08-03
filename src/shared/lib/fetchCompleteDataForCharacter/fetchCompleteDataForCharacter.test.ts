import "@testing-library/jest-dom";
import "isomorphic-fetch";

import { fetchCompleteDataForCharacter } from "./fetchCompleteDataForCharacter";
import {
  mockApiClient,
  mockCharacter,
  expectedMockCharacterAfterFetching,
} from "./test/mock";

test("return correct response with appropriate input", async () => {
  const result = await fetchCompleteDataForCharacter(
    mockCharacter,
    mockApiClient
  );

  expect(result).toEqual(expectedMockCharacterAfterFetching);
});
