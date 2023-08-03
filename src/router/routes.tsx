import type { Character } from "@/model/types";
import { RootLayout } from "@/layout/ui/RootLayout";
import { ErrorPage } from "@/pages/ErrorPage";
import { ListPage } from "@/pages/ListPage";
import { loader } from "@/pages/CharacterDetailsPage/loader";
import { CharacterDetailsPage } from "@/pages/CharacterDetailsPage/CharacterDetailsPage";

export const buildRouterTree = (charactersData: Character[] | null) => [
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
        loader: loader(charactersData),
        element: <CharacterDetailsPage />,
      },
    ],
  },
];
