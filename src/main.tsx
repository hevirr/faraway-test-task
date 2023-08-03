// import React from "react";
import ReactDOM from "react-dom/client";

import { SWCharactersContextProvider } from "@/context/SWCharactersProvider";
import "@/styles/reset.css";
import "@/styles/global.css";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <SWCharactersContextProvider>
    <App />
  </SWCharactersContextProvider>
  // </React.StrictMode>
);
