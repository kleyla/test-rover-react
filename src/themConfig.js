import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#9652ff",
      main: "#9652ff",
      dark: "#303f9f",
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
});

export default theme;
