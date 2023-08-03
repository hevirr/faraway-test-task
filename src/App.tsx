import { useContext, useMemo } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { SWCharactersContext } from "@/context/SWCharactersProvider";
import type { ISWCharactersContext } from "@/context/model/types";
import { buildRouterTree } from "@/router/routes";

const App = () => {
  const appContext = useContext(SWCharactersContext) as ISWCharactersContext;
  const router = useMemo(
    () => createBrowserRouter(buildRouterTree(appContext.charactersData)),
    []
  );

  return (
    <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
  );
};

export default App;
