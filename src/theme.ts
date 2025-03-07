import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#494953",
      paper: "rgba(240, 240, 240, 0.95)",
    },
  },
  typography: {
    fontFamily: [
      '"Source Sans 3"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

export default theme;
