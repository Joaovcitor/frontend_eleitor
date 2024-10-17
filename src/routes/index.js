import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "../pages/Login";
import Home from "../pages/Home";

import Page404 from "../pages/Page404";

export default function Routes() {

  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" isClosed component={Home} />
      <Route path="*" component={Page404} />
    </Switch>
  );
}
