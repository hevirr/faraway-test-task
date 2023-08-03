import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SWCharactersContext } from "@/context/SWCharactersProvider";
import App from "@/App";

describe("empty data placeholder mounts correctly", () => {
  it("renders placeholder when data equals null", async () => {
    render(
      <SWCharactersContext.Provider
        value={{
          charactersData: null,
          setCharactersData: jest.fn,
          isLoading: false,
          setIsLoading: jest.fn,
          paginationControls: { next: null, previous: null },
          setPaginationControls: jest.fn,
        }}
      >
        <App />
      </SWCharactersContext.Provider>
    );

    expect(screen.getByTestId("empty-list-placeholder")).toBeInTheDocument();
  });

  it("renders placeholder when data equals empty array", async () => {
    render(
      <SWCharactersContext.Provider
        value={{
          charactersData: [],
          setCharactersData: jest.fn,
          isLoading: false,
          setIsLoading: jest.fn,
          paginationControls: { next: null, previous: null },
          setPaginationControls: jest.fn,
        }}
      >
        <App />
      </SWCharactersContext.Provider>
    );

    expect(screen.getByTestId("empty-list-placeholder")).toBeInTheDocument();
  });
});
