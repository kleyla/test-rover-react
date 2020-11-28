import React, { useState } from "react";
import { Hidden, ThemeProvider, makeStyles } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  HashRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import theme from "./themConfig";
import Home from "./views/Home";
import About from "./views/About";
import Maps from "./views/Maps";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    background: "red",
  },
});

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
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/maps" component={Maps} />
            </Switch>
          </div>
        </div>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;
