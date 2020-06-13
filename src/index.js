import React from "react";
import ReactDOM from "react-dom";
import theme from "./theme";
import App from "./App";
import { ThemeProvider } from "@material-ui/core/styles";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  rootElement
);
