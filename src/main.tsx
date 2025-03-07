import ReactDOM from "react-dom";
import App from "./App";
import "@fontsource/source-sans-3";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
