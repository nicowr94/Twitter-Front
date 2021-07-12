import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "../pages/Home";
import NotFound from "../pages/NotFound";

export default function DasboardRoutes() {
  return (
    <React.Fragment>
      {/* <Navigation /> */}
      <div>
        <Switch>
          <Route exact path="/home" component={HomePage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </React.Fragment>
  );
}
