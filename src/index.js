import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App/App.js";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Theme } from "./Theme/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </>
);
