import React, { useState } from "react";
import { Hidden, ThemeProvider, makeStyles } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import theme from "./themConfig";
import Home from "./views/Home";
import About from "./views/About";
import Maps from "./views/Maps";

const estilos = makeStyles({
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
  const classes = estilos();
  const [abrir, setAbrir] = useState(false);
  const accionAbrir = () => {
    setAbrir(!abrir);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className={classes.root}>
          <Navbar accionAbrir={accionAbrir} />
          <Hidden xsDown>
            <Sidebar variant="permanent" open={true} />
          </Hidden>
          <Hidden smUp>
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
      </Router>
    </ThemeProvider>
  );
};

export default App;
