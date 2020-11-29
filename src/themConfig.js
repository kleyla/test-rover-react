import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#9c27b0",
    },
    secondary: {
      main: "#3cd1c2",
    },
    info: {
      main: "#ffaa2c",
    },
    error: {
      main: "#f83e70",
    },
  },
  typography: {
    subtitle1: {
      color: "#9e9e9e",
    },
  },
});

export default theme;
