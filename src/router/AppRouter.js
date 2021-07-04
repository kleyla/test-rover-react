import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Route,
} from "react-router-dom";
import About from "../views/About";
import Home from "../views/Home";
import Maps from "../views/Maps";

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/maps" component={Maps} />
        <Route path="/map/:title/:lat/:lng" component={Mapa} />
      </Switch>
    </Router>
  );
};
