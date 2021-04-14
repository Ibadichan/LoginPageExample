import React, { StrictMode } from "react";
import { Router } from "react-router";
import { CookiesProvider } from 'react-cookie';
import { Switch } from "react-router-dom";
import history from "constants/history";
import RouteWithSubRoutes from "components/common/RouteWithSubRoutes";
import AuthProvider from "components/providers/AuthProvider";
import routes from "routes";
import "normalize.css";
import "./style.css";

function Application() {
  return (
    <StrictMode>
      <CookiesProvider>
        <AuthProvider>
          <Router history={history}>
            <Switch>
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
            </Switch>
          </Router>
        </AuthProvider>
      </CookiesProvider>
    </StrictMode>
  );
}

export default Application;
