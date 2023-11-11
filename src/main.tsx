import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { SnackbarProvider } from "notistack";
import GlobalStyle from "./GlobalStyle";

const rootElement = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <SnackbarProvider
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      <GlobalStyle />

      <App />
    </SnackbarProvider>
  </React.StrictMode>
);
