import React from "react";
import { Switch, Route } from "react-router-dom";

import About from "../views/About";
import Home from "../views/Home";
import Mapa from "../views/Mapa";
import Maps from "../views/Maps";

export const AppRouter = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/maps" component={Maps} />
      <Route path="/map/:title/:lat/:lng" component={Mapa} />
    </Switch>
  );
};
