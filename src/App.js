import React, { useState } from "react";
import { Hidden, ThemeProvider } from "@material-ui/core";
import { HashRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import theme from "./themConfig";

import { useStyles } from "./hooks/useStyles";
import { AppRouter } from "./router/AppRouter";

const App = () => {
  const classes = useStyles();
  const [abrir, setAbrir] = useState(false);

  const accionAbrir = () => {
    setAbrir(!abrir);
  };

  return (
    <ThemeProvider theme={theme}>
      <HashRouter basename="/">
        <div className={classes.root}>
          <Navbar accionAbrir={accionAbrir} />
          <Hidden smDown>
            <Sidebar variant="permanent" open={true} />
          </Hidden>
          <Hidden mdUp>
            <Sidebar variant="temporary" open={abrir} onClose={accionAbrir} />
          </Hidden>
          <div className={classes.content}>
            <div className={classes.toolbar}></div>
            <AppRouter />
          </div>
        </div>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;
