import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "../pages/Login";
import Home from "../pages/Home";
import CriarDemanda from "../pages/Demandas/CriarDemandas";
import TodasAsDemandas from "../pages/Demandas/TodasAsDemandas";


import Page404 from "../pages/Page404";

export default function Routes() {

  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" isClosed component={Home} />
      <Route exact path="/criar-demanda" isClosed component={CriarDemanda} />
      <Route exact path="/demandas" isClosed component={TodasAsDemandas} />

      <Route path="*" component={Page404} />
    </Switch>
  );
}
