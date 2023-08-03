import { useContext, useMemo } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { SWCharactersContext } from "@/context/SWCharactersProvider";
import type { ISWCharactersContext } from "@/context/model/types";
import { RootLayout } from "@/layout/ui/RootLayout";
import { ListPage } from "@/pages/ListPage";
import { loader } from "@/pages/CharacterDetailsPage/loader";
import { CharacterDetailsPage } from "@/pages/CharacterDetailsPage/CharacterDetailsPage";
import { ErrorPage } from "@/pages/ErrorPage";

const App = () => {
  const appContext = useContext(SWCharactersContext) as ISWCharactersContext;
  const router = useMemo(
    () =>
      createBrowserRouter([
        {
          path: "/",
          element: <RootLayout />,
          errorElement: <ErrorPage />,
          children: [
            {
              path: "/",
              element: <ListPage />,
            },
            {
              path: "character/:characterId",
              loader: loader(appContext.charactersData),
              element: <CharacterDetailsPage />,
            },
          ],
        },
      ]),
    []
  );

  return <RouterProvider router={router} />;
};

export default App;
