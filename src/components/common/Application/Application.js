import React, { StrictMode } from "react";
import { Router } from "react-router";
import { Switch } from "react-router-dom";
import history from "constants/history";
import RouteWithSubRoutes from "components/common/RouteWithSubRoutes";
import routes from "routes";
import "normalize.css";
import "./style.css";

function Application() {
  return (
    <StrictMode>
      <Router history={history}>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </Router>
    </StrictMode>
  );
}

export default Application;
