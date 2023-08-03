import "isomorphic-fetch";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { SWCharactersContextProvider } from "@/context/SWCharactersProvider";
import { buildRouterTree } from "@/router/routes";
import App from "./App";

test("root layout and characters list are mounted", async () => {
  render(
    <SWCharactersContextProvider>
      <App />
    </SWCharactersContextProvider>
  );

  expect(screen.getByTestId("root-layout")).toBeInTheDocument();
  expect(screen.getByTestId("characters-list")).toBeInTheDocument();
});

test("header searchbar initiates api call and loading and skeletons are displayed correctly", async () => {
  render(
    <SWCharactersContextProvider>
      <App />
    </SWCharactersContextProvider>
  );

  const inputNode = screen.getByTestId("searchbar").firstChild;
  const searchIcon = screen.getByTestId("search-icon");
  if (inputNode) {
    fireEvent.change(inputNode, { target: { value: "r2" } });
    fireEvent.click(searchIcon);
  }

  expect(
    await screen.getAllByTestId("skeleton-component")[0]
  ).toBeInTheDocument();
});

test("page not found", async () => {
  const router = createMemoryRouter(buildRouterTree(null), {
    initialEntries: ["/pagenotfound"],
  });

  render(
    <SWCharactersContextProvider>
      <RouterProvider router={router} />
    </SWCharactersContextProvider>
  );

  expect(screen.getByTestId("error-page")).toBeInTheDocument();
});
